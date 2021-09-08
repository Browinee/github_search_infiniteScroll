import React, {useCallback, useRef, useState} from "react";
import Loading from "../../components/Loading";
import ScrollTop from "../../components/ScrollTop";
import {Container} from "./components/StyledComponents";
import RepositoryList from "./components/RepositoryList";
import useRepoSearch, {ConfigType, defaultConfig} from "./usecase/useRepoSearch";
import Header from "./components/Header";
import useScrollTop from "../../hooks/useScrollTop";
import useDebounce from "../../hooks/useDebounce";
import Modal from "../../components/Modal";
import useModal from "../../components/Modal/usecase/useModal";

function Search () {
    const [search, setSearch] = useState<ConfigType>(defaultConfig);
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(prev => ({...prev, q: value, page: 1, reSearch: true}));
    };
    const debouncedSearch = useDebounce(search, 500);
    const {totalData, isLoading, hasMore, isEmpty, isError, error} = useRepoSearch(debouncedSearch);
    const observer = useRef<IntersectionObserver>();
    const lastRef = useCallback(node => {
        observer.current = new IntersectionObserver((entries, observer) => {
            if(entries[0].isIntersecting) {
                const {target} = entries[0];
                observer.unobserve(target);
                setSearch(prev => {
                    return {
                        ...prev,
                        page: prev.page + 1,
                        reSearch: false,
                    }
                });
            }
        })
        if(node) observer.current?.observe(node)
    }, [setSearch]);
    const [setScrollElement, scrollTop] = useScrollTop();
    const {isModalOpen, toggleModal} = useModal(isError);

    return (
        // error boundary
        <Container>
            <Header search={search} changeHandler={changeHandler}/>
            <RepositoryList items={totalData?.items || []} lastRef={lastRef} setScrollElement={setScrollElement}
                            hasMore={hasMore}
                            isEmpty={isEmpty}
            />
            {isLoading && <Loading/>}
            <ScrollTop scrollTo={scrollTop} isShow={!isEmpty}/>
            <Modal isShow={isModalOpen} toggleModal={toggleModal} contentLabel={error?.message}/>
        </Container>

    );
}

export default Search;
import React, {useCallback, useRef, useState} from "react";
import Loading from "../../components/Loading";
import ScrollTop from "../../components/ScrollTop";
import {Container} from "./components/StyledComponents";
import RepositoryList from "./components/RepositoryList";
import useRepoSearch, {ConfigType, defaultConfig} from "./hooks/useRepoSearch";
import Header from "./components/Header";
import useScrollTop from "../../hooks/useScrollTop";

function Search () {
    const [search, setSearch] = useState<ConfigType>(defaultConfig);
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(prev => ({...prev, q: value, page: 1}));
    };
    const {data, test} = useRepoSearch(search);
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
                    }
                });
            }
        })
        if(node) observer.current?.observe(node)
    }, [setSearch]);

    const [setScrollElement, scrollTop] = useScrollTop();
    return (
        <Container>
            <Header search={search} changeHandler={changeHandler}/>
            <RepositoryList items={test.items} lastRef={lastRef} setScrollElement={setScrollElement}/>
            {/*<Loading />*/}
            <ScrollTop scrollTo={scrollTop}/>
        </Container>
    );
}

export default Search;
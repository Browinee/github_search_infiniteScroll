import React, { useCallback, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import ScrollTop from "../../components/ScrollTop";
import { Container } from "./components/StyledComponents";
import RepositoryList from "./components/RepositoryList";
import useRepoSearch, {
  ConfigType,
  defaultConfig,
} from "./usecase/useRepoSearch";
import Header from "./components/Header";
import useScrollTop from "../../hooks/useScrollTop";
import useDebounce from "../../hooks/useDebounce";
import Modal from "../../components/Modal";
import useModal from "../../components/Modal/usecase/useModal";
import useInfiniteScroll from "../../hooks/useInfiniteScroll";

function Search() {
  const [search, setSearch] = useState<ConfigType>(defaultConfig);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch((prev) => ({ ...prev, q: value, page: 1, reSearch: true }));
  };
  const debouncedSearch = useDebounce(search, 500);
  const { totalData, isLoading, hasMore, isEmpty, isError, error } =
    useRepoSearch(debouncedSearch);

  const infiniteScrollCb = useCallback(() => {
    setSearch((prev) => {
      return {
        ...prev,
        page: prev.page + 1,
        reSearch: false,
      };
    });
  }, [setSearch]);
  const { targetRef, reObserve } = useInfiniteScroll(infiniteScrollCb, hasMore);
  const { scrollElement, setScrollElement, scrollTo } = useScrollTop();

  useEffect(() => {
    if (isError) {
      reObserve();
    }
  }, [isError, reObserve]);
  useEffect(() => {
    if (scrollElement) {
      scrollTo();
    }
  }, [debouncedSearch.q, scrollElement, scrollTo]);
  const { isModalOpen, toggleModal } = useModal(isError);

  return (
    <Container>
      <Header search={search} changeHandler={changeHandler} />
      <RepositoryList
        items={totalData?.items || []}
        lastRef={targetRef}
        setScrollElement={setScrollElement}
        hasMore={hasMore}
        isEmpty={isEmpty}
      />
      {isLoading && <Loading />}
      <ScrollTop scrollTo={scrollTo} isShow={!isEmpty} />
      <Modal
        isShow={isModalOpen}
        toggleModal={toggleModal}
        contentLabel={error?.message}
      />
    </Container>
  );
}

export default Search;

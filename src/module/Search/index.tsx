import React, { useState} from "react";
import {Container} from "./components/StyledComponents";
import RepositoryList from "./components/RepositoryList";
import SearchInput from "../../components/SearchInput";
import useRepoSearch, {ConfigType, defaultConfig} from "./hooks/useRepoSearch";

function Search () {
    const [search, setSearch] = useState<ConfigType>(defaultConfig);
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(prev => ({...prev, q: value}));
    };
    const {data } = useRepoSearch(search);

    return (
        <Container>
            <SearchInput value={search.q} onChange={changeHandler}/>
            <RepositoryList items={data.items}/>
        </Container>
    );
}

export default Search;
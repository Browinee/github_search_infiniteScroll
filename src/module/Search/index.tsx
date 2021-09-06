import React, {useState} from "react";
import {Container} from "./components/StyledComponents";
import RepositoryList from "./components/RepositoryList";
import SearchInput from "../../components/SearchInput";
import {ConfigType, defaultConfig} from "./hooks/useRepoSearch";

function Search () {
    const [search, setSearch] = useState<ConfigType>(defaultConfig);
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearch(prev => ({...prev, q: value, page: 1}));
    };

    return (
        <Container>
            <SearchInput value={search.q} onChange={changeHandler}/>
            <RepositoryList search={search} searchHandler={setSearch}/>
        </Container>
    );
}

export default Search;
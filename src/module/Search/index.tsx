import React, {useEffect, useState} from "react";
import {Container} from "./components/StyledComponents";
import RepositoryList from "./components/RepositoryList";
import SearchInput from "../../components/SearchInput";

function Search () {
    const [searchText, setSearchText] = useState("");
    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchText(value);

    };
    useEffect(() => {
        // axios
        //     .get(`https://api.github.com/search/repositories?q=${"nextjs"}`)
        //     .then(result => console.log(result))
    }, [])
    return (
        <Container>
            <SearchInput value={searchText} onChange={changeHandler}/>
            <RepositoryList />
        </Container>
    );
}

export default Search;
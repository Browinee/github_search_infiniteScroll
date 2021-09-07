import React from "react";
import {SearchProvider} from "./context";
import RepositorySearch from "./view/RepositorySearch";

function Search () {
    // module error boundary
    return (
        <SearchProvider>
            <RepositorySearch/>
        </SearchProvider>
    );
}

export default Search;
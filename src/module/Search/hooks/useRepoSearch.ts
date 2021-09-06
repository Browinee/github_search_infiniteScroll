import useAsync from "../../../hooks/useAsync";
import {useEffect} from "react";
import http from "../../../infra";
import {mock} from "./mock";


export type ConfigType = {
    q: string,
    per_page: number,
    page: number;
    sort?: string;
    order?: string;
}
export const defaultConfig: ConfigType = {
    q: "",
    per_page: 30,
    page: 1,
}
export type RepoResult = {
    incomplete_results: boolean;
    items: any[];
    total_count: number;
}
const defaultResponse: RepoResult = {
    incomplete_results: false,
    items: [],
    total_count: 0,
}
// unauthorized : 10 /min
const useRepoSearch = (config: ConfigType) => {
    const {run, isLoading, data, error, isError, isIdle, isSuccess} = useAsync<RepoResult>();

    useEffect(() => {
        if(config.q === "") return;
        console.log("config", config);
        // run(http.get('/search/repositories', {
        //     params: {
        //         ...defaultConfig,
        //         ...config,
        //     }
        // }))
    }, [config]);
    return {
        isLoading,
        data: mock,
        // data: config.q === "" ? defaultResponse: data,
        error,
        isError,
        isIdle,
        isSuccess,
    }
};


export default useRepoSearch;
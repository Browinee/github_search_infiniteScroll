import useAsync from "../../../hooks/useAsync";
import {useEffect, useState} from "react";
import http from "../../../infra";
import {RepoSearchItemsResponse } from "../../../types/search";


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
    items: RepoSearchItemsResponse[];
    total_count: number;
}
const defaultResponse: RepoResult = {
    incomplete_results: false,
    items: [],
    total_count: 0,
}
// unauthorized user: 10 per min
const useRepoSearch = (config: ConfigType) => {
    const {run, isLoading, data, error, isError, isIdle, isSuccess} = useAsync<RepoResult>();
    const [totalData, setTotalData] = useState<RepoResult>(defaultResponse);
    useEffect(() => {
        if(config.q === "") {
            setTotalData(defaultResponse);
            return;
        };
        run(http.get('/search/repositories', {
            params: {
                ...defaultConfig,
                ...config,
            }
        }))
     // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [config]);

    useEffect(() => {
        if(data !== null) {
            setTotalData((prev: RepoResult) => {
                const totalItems = [...prev.items, ...(data.items)];
                return {
                    ...prev,
                    ...data,
                    items: totalItems,
                }
            });
        }
    },[data]);
    return {
        hasMore: totalData.total_count > totalData.items.length,
        isEmpty: totalData.items.length === 0,
        totalData,
        isLoading,
        error,
        isError,
        isIdle,
        isSuccess,
    }
};


export default useRepoSearch;
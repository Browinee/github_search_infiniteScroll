import {ConfigType} from "../usecase/useRepoSearch";

export const processConfig= (config: ConfigType): Omit<ConfigType, "reSearch"> => {
    const {reSearch, ...param} = config;
    return param;
}
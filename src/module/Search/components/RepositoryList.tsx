import {useCallback, useRef} from "react";
import useRepoSearch, {ConfigType} from "../hooks/useRepoSearch";
import styled from "styled-components";
import Card from "../../../components/Card";

type RepositoryListProps = {
    search: ConfigType;
    searchHandler: (value: (((prevState: ConfigType) => ConfigType) | ConfigType)) => void;
};
const Container = styled.div`
  width: 100%;
`;
const RepositoryList = (props: RepositoryListProps) => {
    const {search, searchHandler} = props;
    const {data} = useRepoSearch(search);
    const observer = useRef<IntersectionObserver>();
    const lastRef = useCallback(node => {
        observer.current = new IntersectionObserver((entries, observer) => {
            if(entries[0].isIntersecting) {
                const {target} = entries[0];
                observer.unobserve(target);
                searchHandler(prev => {
                    return {
                        ...prev,
                        page: prev.page + 1,
                    }
                });
            }
        })
        if(node) observer.current?.observe(node)
    }, [])
    const isLast = (idx: number) => idx === data.items.length - 1;
    return <Container>
        {
            data.items.map((info, idx) => <div
                key={info.id + idx.toString()} ref={isLast(idx) ? lastRef : null}><Card {...info} /></div>)
        }
    </Container>
}


export default RepositoryList;
import {useCallback, useRef} from "react";
import useRepoSearch, {ConfigType} from "../hooks/useRepoSearch";
import styled from "styled-components";
import Card from "../../../components/Card";
import {down} from "styled-breakpoints";

type RepositoryListProps = {
    items: any[];
    lastRef: (node: HTMLDivElement | null) => void;
};
const Container = styled.div`
  margin-top: 6rem;
  width: 75%;
  overflow: auto;
  background: white;
  ${down('md')} {
    width: 100%;
  }

`;
const RepositoryList = (props: RepositoryListProps) => {
    const {items, lastRef} = props;
    const isLast = (idx: number) => idx === items.length - 1;
    return <Container>
        {
            items.map((info, idx) => <div
                key={info.id + idx.toString()} ref={isLast(idx) ? lastRef : null}><Card {...info} /></div>)
        }
    </Container>
}


export default RepositoryList;
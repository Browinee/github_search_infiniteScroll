import styled from "styled-components";
import Card from "../../../components/Card";
import {down} from "styled-breakpoints";
import Empty from "../../../components/Empty";

type RepositoryListProps = {
    items: any[];
    lastRef: (node: HTMLDivElement | null) => void;
    setScrollElement: (node: HTMLDivElement | null) => void;
};
const Container = styled.div`
  margin-top: 6rem;
  width: 75%;
  overflow: auto;
  background: white;
  height: calc(100vh - 60px);

  ${down('md')} {
    width: 100%;
  }

`;
const RepositoryList = (props: RepositoryListProps) => {
    const {items, lastRef, setScrollElement} = props;
    const isLast = (idx: number) => idx === items.length - 1;
    return <Container ref={node => {
        setScrollElement(node)
    }}>
        {
            items.length ? items.map((info, idx) => <div
                    key={info.id + idx.toString()} ref={isLast(idx) ? lastRef : null}><Card {...info} /></div>)
                : <Empty/>
        }
    </Container>
}


export default RepositoryList;
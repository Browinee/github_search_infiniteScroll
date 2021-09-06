import {RepoResult} from "../hooks/useRepoSearch";
import styled from "styled-components";
import Card from "../../../components/Card";

type RepositoryListProps = Pick<RepoResult, "items">;
const Container = styled.div`
  width: 100%;
`;
const RepositoryList = (props: RepositoryListProps) => {
    const {items} = props;
    console.log("list", items);
    return <Container>
        {
            items.map((info, idx) => <Card key={info.id + idx.toString()} {...info} />)
        }
    </Container>
}


export default RepositoryList;
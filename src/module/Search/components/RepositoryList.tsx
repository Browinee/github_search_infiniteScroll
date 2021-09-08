import styled from "styled-components";
import Card from "../../../components/Card";
import { down } from "styled-breakpoints";
import Empty from "../../../components/Empty";
import { getLastUpdated, getLicense } from "../../../utils";
import { RepoSearchItemsResponse } from "../../../types/search";

type RepositoryListProps = {
  items: RepoSearchItemsResponse[];
  lastRef: (node: HTMLDivElement | null) => void;
  setScrollElement: (node: HTMLDivElement | null) => void;
  hasMore: boolean;
  isEmpty: boolean;
};
const Container = styled.div`
  margin-top: 6rem;
  width: 75%;
  overflow: auto;
  background: white;
  height: calc(100vh - 60px);

  ${down("md")} {
    width: 100%;
  }
`;
const RepositoryList = (props: RepositoryListProps) => {
  const { items, lastRef, setScrollElement, isEmpty, hasMore } = props;
  const isLast = (idx: number) => idx === items.length - 1;

  return (
    <Container
      ref={(node) => {
        setScrollElement(node);
      }}
    >
      {!isEmpty ? (
        items.map((info, idx) => {
          const newInfo = {
            ...info,
            license: getLicense(info.license),
            updated_at: getLastUpdated(info.updated_at),
          };
          return (
            <div
              key={info.id + idx.toString()}
              ref={isLast(idx) ? lastRef : null}
            >
              <Card {...newInfo} />
            </div>
          );
        })
      ) : (
        <Empty />
      )}
      {!isEmpty && !hasMore && (
        <Empty content={"No more. Please don't scroll anymore~"} />
      )}
    </Container>
  );
};

export default RepositoryList;

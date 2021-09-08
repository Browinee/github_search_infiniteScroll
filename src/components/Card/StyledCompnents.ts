import styled from "styled-components";

export const Container = styled.article`
  width: 100%;
  border-top: 1px solid rgb(233, 233, 233);
  border-bottom: 1px solid rgb(233, 233, 233);
  padding: 10px;
  & + & {
    border-top: 0;
  }
`;

export const Title = styled.header`
  font-size: 2rem;
  width: 100%;
  color: black;
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  color: rgba(0, 0, 0, 0.75);
  margin-bottom: 10px;
`;
export const Footer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  > div {
    margin-right: 1rem;
  }
`;

export const Star = styled.div``;
export const Lang = styled.div``;
export const License = styled.div``;
export const UpdateTime = styled.div``;
export const Content = styled.div`
  display: inline-block;
  margin-left: 5px;
`;

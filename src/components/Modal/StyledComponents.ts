import styled from "styled-components";

export const MainIcon = styled.header`
  font-size: 5rem;
  color: lightcoral;
  text-align: center;
`;
export const Content = styled.main`
  flex: 1;
  padding: 10px;
  font-size: 1.5rem;
`;
export const Footer = styled.footer`
  height: 5rem;
`
export const Button = styled.button`
  background-color: #00324e;
  color: white;
  border-radius: 7px;
  min-height: 3rem;
  min-width: 5rem;
  cursor: pointer;

  :active {
    outline: none;
  }
`;
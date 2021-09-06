import React from "react";
import SearchInput  from "../../../components/SearchInput";
import styled from "styled-components";
import {ConfigType} from "../hooks/useRepoSearch";

type HeaderProps = {
    search: ConfigType;
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  background: rgb(0, 106, 166);
  height: 6rem;
`;

const Header = (props: HeaderProps) => {
    const {search, changeHandler} = props;

    return (
        <Container>
            <SearchInput value={search.q} onChange={changeHandler}/>
        </Container>
    )

}


export default Header;
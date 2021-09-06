import React from 'react';
import './App.css';
import Search from "./module/Search";
import GlobalStyle from "./theme/globalStyles";
import ResetStyle from "./theme/resestStyles";
import styled, {ThemeProvider} from "styled-components";
import THEME from "./theme/theme";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #00324e;
`

function App () {
    return (
        <ThemeProvider theme={THEME}>
            <Container className="App">
                <ResetStyle/>
                <GlobalStyle/>
                <Search/>
            </Container>
        </ThemeProvider>
    );
}

export default App;

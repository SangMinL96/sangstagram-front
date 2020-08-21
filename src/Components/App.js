import React from "react";
import GlobalStyles from "../GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "../Theme";
import Routers from "./Routers";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const QUERY = gql`
  {
    isLogin @client
  }
`;

function App() {
  const {
    data: { isLogin },
  } = useQuery(QUERY);
  console.log(isLogin);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Routers isLogin={isLogin} />
    </ThemeProvider>
  );
}

export default App;

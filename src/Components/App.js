import React from "react";
import GlobalStyles from "../GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "../Theme";
import Routers from "./Routers";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

import { ToastContainer, toast } from "react-toastify";
import "../../node_modules/react-toastify/dist/ReactToastify.css";

const QUERY = gql`
  {
    isLogin @client
  }
`;

function App() {
  const {
    data: { isLogin },
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />

      <Routers isLogin={isLogin} />
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </ThemeProvider>
  );
}

export default App;

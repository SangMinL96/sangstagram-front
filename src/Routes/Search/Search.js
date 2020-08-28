import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH } from "../../Query";
import SearchContainer from "./SearchContainer";

const Container = styled.div`
  margin-top: 60px;
  width: 100%;
  height: 93vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const ItemNone = styled.div``;
function Search({ location }) {
  const searchItem = location.pathname.split("/")[2];
  const { data, loading } = useQuery(SEARCH, {
    skip: searchItem === undefined,
    variables: {
      term: searchItem,
    },
  });

  return (
    <Container>
      {searchItem === undefined ? (
        <ItemNone>관련 게시물이 없습니다.</ItemNone>
      ) : (
        <SearchContainer {...data} loading={loading} />
      )}
    </Container>
  );
}

export default withRouter(Search);

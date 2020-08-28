import React from "react";
import styled from "styled-components";
import DetailPost from "./DetailPost";
import DetailContents from "./DetailContents";
import DetailHeader from "./DetailHeader";
import { useQuery } from "@apollo/react-hooks";
import { DETAIL_POST } from "../../Query";
import { useEffect } from "react";

const DetailArticle = styled.article`
  position: absolute;
  top: 20%;
  width: 950px;
  height: 600px;
  display: flex;
  justify-content: space-between;

  background-color: red;
`;
const Contents = styled.article``;

function Detail({ id }) {
  const { data, loading } = useQuery(DETAIL_POST, {
    skip: id === undefined,
    variables: { id },
  });
  useEffect(() => {}, []);
  return (
    <DetailArticle>
      <DetailPost />
      <Contents>
        <DetailHeader />

        <DetailContents />
      </Contents>
    </DetailArticle>
  );
}

export default Detail;

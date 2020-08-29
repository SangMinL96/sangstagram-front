import React, { useRef } from "react";
import styled from "styled-components";
import DetailPost from "./DetailPost";
import DetailContents from "./DetailContents";
import DetailHeader from "./DetailHeader";
import { useQuery } from "@apollo/react-hooks";
import { DETAIL_POST } from "../../Query";

import Loading from "../../Loading";

const DetailArticle = styled.article`
  position: absolute;
  top: 30%;
  width: 950px;
  height: 610px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e6e6e6;
  background-color: #ffffff;
`;
const Contents = styled.article``;

function Detail({ id }) {
  const { data, loading } = useQuery(DETAIL_POST, {
    returnPartialData: true,
    skip: id === undefined,
    variables: { id },
  });

  if (loading) return null;
  const fileUrl = data?.seeFullPost.files.map((item) => item.url);
  const headerData = data?.seeFullPost.user;
  const comments = data?.seeFullPost.comments.map((item) => item);
  const datas = data?.seeFullPost;
  return (
    <>
      <DetailArticle>
        <DetailPost file={fileUrl} />
        <Contents>
          <DetailHeader headerData={headerData} />
          <DetailContents
            postId={datas?.id}
            isLiked={datas?.isLiked}
            likeCount={datas?.likeConut}
            comments={comments}
            createdAt={datas?.createdAt}
          />
        </Contents>
      </DetailArticle>
    </>
  );
}

export default Detail;

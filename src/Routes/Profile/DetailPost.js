import React from "react";
import styled from "styled-components";

const PostImg = styled.div`
  width: 620px;
  height: 100%;
  background-image: url(${(props) => props.bg});
  background-size: 100% 100%;
`;

function DetailPost({ bg }) {
  return (
    <>
      <PostImg bg={bg} />
    </>
  );
}

export default DetailPost;

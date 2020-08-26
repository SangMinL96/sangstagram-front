import React from "react";
import styled from "styled-components";
import { IoMdHeartEmpty, IoMdHeart, IoIosText } from "react-icons/io";

const PostContainer = styled.section`
  width: 100%;
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(50px, auto);
  grid-gap: 10px;
`;

const Post = styled.div`
  width: 200px;
  height: 200px;
  background-image: url(${(props) => props.bg});
  background-size: 100% 100%;
  cursor: pointer;
  &:hover .hover {
    display: flex;
  }
`;
const PostHover = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  background-color: #0000008c;

  justify-content: center;
  align-items: center;
  color: white;
  font-size: 0.95rem;
  font-weight: bold;
  .Icon {
    font-size: 1.5rem;
  }
`;
const PostLike = styled.div`
  margin-left: 0.5em;
  margin-right: 0.5em;
`;
const PostComment = styled.div`
  margin-left: 0.5em;
  margin-right: 0.5em;
`;

function SearchPost({ id, files, commentCount, likeConut }) {
  console.log(files);
  return (
    <PostContainer>
      {files?.map((img) => (
        <Post bg={img.url}>
          <PostHover className="hover">
            <PostLike>
              <IoMdHeart className="Icon" /> {likeConut}
            </PostLike>
            <PostComment>
              <IoIosText className="Icon" /> {commentCount}
            </PostComment>
          </PostHover>
        </Post>
      ))}
    </PostContainer>
  );
}

export default SearchPost;

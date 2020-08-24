import React, { useState } from "react";
import styled from "styled-components";
import { IoIosHeartEmpty, IoIosHeart, IoMdChatbubbles } from "react-icons/io";
import { useInput } from "../../Hooks/useInput";

const ContentsContainer = styled.section`
  width: 35%;
  height: 150px;

  ${(props) => props.theme.whiteBox};
`;
const LikedComments = styled.div`
  display: flex;
  margin-top: 0.5em;
  margin-left: 0.7em;
  font-size: 1.8rem;
`;
const Like = styled.div`
  cursor: pointer;
  margin-right: 0.5em;
`;
const Comment = styled.div`
  cursor: pointer;
`;
const LikedCount = styled.div`
  margin-top: 0.5em;
  margin-left: 1.8em;
  font-weight: 500;
`;
const CreateAT = styled.div`
  margin-top: 0.5em;
  margin-left: 1.8em;
  margin-right: 1.8em;
  padding-bottom: 1em;
  border-bottom: 1px solid #e6e6e6;
`;
const Text = styled.input``;

function PosterContents({ likeConut, isLiked, comments, createdAt }) {
  const [like, setLike] = useState(0);
  const text = useInput("");
  return (
    <ContentsContainer>
      <LikedComments>
        <Like>
          {like === 0 && <IoIosHeartEmpty onClick={() => setLike(like + 1)} />}
          {like === 1 && <IoIosHeart onClick={() => setLike(like - 1)} />}
        </Like>
        <Comment>
          <IoMdChatbubbles />
        </Comment>
      </LikedComments>
      <LikedCount>{like} 좋아요</LikedCount>
      <CreateAT>{createdAt}</CreateAT>
      <form>
        <Text onChange={text.onChange} value={text.value} />
      </form>
    </ContentsContainer>
  );
}

export default PosterContents;

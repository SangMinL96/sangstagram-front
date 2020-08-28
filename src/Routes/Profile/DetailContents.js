import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { IoMdHeartEmpty, IoMdHeart, IoIosText } from "react-icons/io";
import TextareaAutosize from "react-autosize-textarea";
import { useInput } from "../../Hooks/useInput";
import { TOGGLE_LIKE, ADD_COMMENT, FEED_QUERY } from "../../Query";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { toast } from "react-toastify";

const DetailAni = keyframes`
0%{
  transform:scale(1)
}50%{
  transform:scale(1.5)
}100%{
  transform:scale(1)
}
`;
const DetailLikeBtn = styled(IoMdHeart)`
  color: red;
  animation: ${DetailAni} 0.3s linear;
`;
const DetailContent = styled.article`
  width: 330px;
  height: 8vh;
  background-color: blue;
`;
const DetailIcons = styled.ul`
  margin-top: 0.5em;
  margin-left: 0.5em;
  font-size: 1.85rem;
  cursor: pointer;
`;
const DetailLike = styled.div`
  margin-top: 0.3em;
  margin-left: 1.4em;
  font-size: 0.9rem;
`;
const DetailCreateAT = styled.div`
  margin-top: 0.5em;
  margin-bottom: 0.5em;
  margin-left: 1.4em;
  font-size: 0.9rem;
`;
const DetailText = styled(TextareaAutosize)`
  border: none;
  outline: none;
  padding: 10px;
  width: 330px;
  height: 43px;
  resize: none;
  color: #858585;
  display: flex;
  align-items: center;
  font-size: 1.02rem;
  border-top: 1px solid #e6e6e6;

  &::placeholder {
    font-size: 1.02rem;
  }
`;

const DCarticle = styled.article`
  width: 330px;
  height: 42vh;

  border-bottom: 1px solid #e6e6e6;
`;

function DetailContents({ postId, likedCount }) {
  const { data, loading } = useQuery(FEED_QUERY);

  console.log(data);
  const [like, setLike] = useState(false);
  const [commentUp, setCommentUp] = useState(null);
  const DetailTextValue = useInput("");
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: postId },
  });
  const [addCommentMutation] = useMutation(ADD_COMMENT, {
    variables: { postId: postId, text: DetailTextValue.value },
  });
  const onKeyUp = async (ev) => {
    const { keyCode } = ev;
    if (keyCode === 13) {
      ev.preventDefault();
      DetailText.setValue("");
      try {
        const {
          data: { addComment },
        } = await addCommentMutation();

        setCommentUp([...commentUp, addComment]);
      } catch {
        toast.error("메시지를 보낼수없습니다.");
      }
    }
  };
  return (
    <>
      <DCarticle></DCarticle>
      <DetailContent>
        <DetailIcons>
          {like ? (
            <DetailLikeBtn onClick={() => setLike(false)} />
          ) : (
            <IoMdHeartEmpty onClick={() => setLike(true)} />
          )}
          <IoIosText />
        </DetailIcons>
        <DetailLike>{likedCount} 좋아요</DetailLike>

        <form>
          <DetailText
            placeholder="댓글을 입력하세요."
            onChange={DetailTextValue.onChange}
            value={DetailTextValue.value}
            onKeyUp={onKeyUp}
          />
        </form>
      </DetailContent>
    </>
  );
}

export default DetailContents;

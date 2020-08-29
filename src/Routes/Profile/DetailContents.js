import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { IoMdHeartEmpty, IoMdHeart, IoIosText } from "react-icons/io";
import TextareaAutosize from "react-autosize-textarea";
import { useInput } from "../../Hooks/useInput";
import { TOGGLE_LIKE, ADD_COMMENT } from "../../Query";
import { useMutation } from "@apollo/react-hooks";
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
  div {
    margin-top: 0.5em;
    margin-left: 0.5em;
    display: flex;
    align-items: center;
    h3 {
      font-weight: 600;
      font-size: 0.8rem;
      margin-left: 0.5em;
    }
    span {
      margin-left: 0.5em;
    }
  }
`;
const CommentAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-image: url(${(props) => props.avatar});
  background-size: 100% 100%;
`;

function DetailContents({ postId, isLiked, likeCount, comments, createdAt }) {
  const [like, setLike] = useState(isLiked);
  const [likeCountS, setLikeCount] = useState(likeCount);
  const [commentUp, setCommentUp] = useState(comments);
  const DetailTextValue = useInput("");
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: postId },
  });
  const [addCommentMutation] = useMutation(ADD_COMMENT, {
    variables: { postId: postId, text: DetailTextValue.value },
  });

  const likeTogle = async () => {
    if (like === false) {
      setLikeCount(likeCountS + 1);
      setLike(true);
    } else {
      setLikeCount(likeCountS - 1);
      setLike(false);
    }
    try {
      await toggleLikeMutation();
    } catch {
      setLike(!like);
      toast.error("좋아요를 누를수 없습니다.");
    }
  };
  const onKeyUp = async (ev) => {
    const { keyCode } = ev;
    if (keyCode === 13) {
      ev.preventDefault();
      DetailTextValue.setValue("");
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
      <DCarticle>
        {commentUp &&
          commentUp.map((item) => (
            <div key={item.id}>
              <CommentAvatar avatar={item.user.avatar} />
              <h3>{item.user.name}</h3>
              <span>{item.text}</span>
            </div>
          ))}
      </DCarticle>
      <DetailContent>
        <DetailIcons>
          {like ? (
            <DetailLikeBtn onClick={likeTogle} />
          ) : (
            <IoMdHeartEmpty onClick={likeTogle} />
          )}

          <IoIosText />
        </DetailIcons>
        <DetailLike>{likeCount} 좋아요</DetailLike>
        <DetailCreateAT>{createdAt}</DetailCreateAT>
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

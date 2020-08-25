import React, { useState } from "react";
import styled from "styled-components";
import { IoMdHeartEmpty, IoMdHeart, IoIosText } from "react-icons/io";
import { useInput } from "../../Hooks/useInput";
import TextareaAutosize from "react-autosize-textarea";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { TOGGLE_LIKE, ADD_COMMENT, ME } from "../../Query";
import { toast } from "react-toastify";

const ContentsContainer = styled.section`
  width: 550px;
  user-select: none;
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
  margin-right: 0.3em;
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
const Text = styled(TextareaAutosize)`
  margin-left: 1.8em;
  border: none;
  outline: none;
  margin-top: 1em;
  margin-bottom: 1em;
  width: 93%;
  resize: none;
  color: #858585;
`;
const LikeIcon = styled.div``;
const UserComment = styled.ul`
  margin-top: 1em;
  margin-left: 1.8em;
  margin-right: 1.8em;
  li {
    display: flex;
    h3 {
      font-size: 0.8rem;
      font-weight: 600;
      margin-right: 0.5em;
      margin-bottom: 0.5em;
    }
    span {
      font-size: 0.8rem;
    }
  }
`;

const TrueLike = styled(IoMdHeart)`
  color: red;
`;

function PosterContents({ id, likeConut, isLiked, comments, createdAt }) {
  const [like, setLike] = useState(isLiked);
  const [likeCount, setLikeCount] = useState(likeConut);
  const [commentUp, setCommentUp] = useState(comments);
  const text = useInput("");
  const [toggleLikeMutation] = useMutation(TOGGLE_LIKE, {
    variables: { postId: id },
  });
  const [addCommentMutation] = useMutation(ADD_COMMENT, {
    variables: { postId: id, text: text.value },
  });

  const likeTogle = async () => {
    if (like === false) {
      setLike(true);
      setLikeCount(likeCount + 1);
    } else {
      setLike(false);
      setLikeCount(likeCount - 1);
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
      text.setValue("");
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
    <ContentsContainer>
      <LikedComments>
        <Like>
          <LikeIcon onClick={likeTogle}>
            {like ? <TrueLike /> : <IoMdHeartEmpty />}
          </LikeIcon>
        </Like>
        <Comment>
          <IoIosText />
        </Comment>
      </LikedComments>
      <LikedCount>{likeCount} 좋아요</LikedCount>
      <UserComment>
        {commentUp &&
          commentUp.map((item) => (
            <li key={item.id}>
              <h3>{item.user.name}</h3>
              <span>{item.text}</span>
            </li>
          ))}
      </UserComment>
      <CreateAT>{createdAt}</CreateAT>
      <form>
        <Text
          placeholder="댓글을 입력하세요."
          onChange={text.onChange}
          value={text.value}
          onKeyUp={onKeyUp}
        />
      </form>
    </ContentsContainer>
  );
}

export default PosterContents;

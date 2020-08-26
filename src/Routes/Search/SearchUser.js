import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { FOLLOW, UNFOLLOW } from "../../Query";
const UserContainer = styled.div`
  width: 100%;
`;
const User = styled.div`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${(props) => props.theme.whiteBox}
`;
const Avatar = styled.div`
  width: 55px;
  height: 55px;
  background-image: url(${(props) => props.avatar});
  background-size: 100% 100%;
  border-radius: 100%;
  margin-bottom: 0.5em;
`;
const UserName = styled.h3`
  font-size: 0.85rem;
  font-weight: bold;
  margin-bottom: 1em;
`;
const FollowBtn = styled.button`
  display: flex;
  font-size: 0.9rem;
  font-weight: bold;
  color: white;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 25px;
  background-color: #0984e3;
  border-radius: 5px;
  outline: none;
  border: none;
  cursor: pointer;
`;
function SearchUser({ id, avatar, name, isFollowing }) {
  const [followMution] = useMutation(FOLLOW, {
    variables: {
      id,
    },
  });
  const [unFollowMution] = useMutation(UNFOLLOW, {
    variables: {
      id,
    },
  });
  const [follow, setFollow] = useState(isFollowing);

  const onFollow = () => {
    if (follow === true) {
      setFollow(false);
      unFollowMution();
    } else {
      setFollow(true);
      followMution();
    }
  };
  return (
    <UserContainer>
      <User>
        <Avatar avatar={avatar} />
        <UserName>{name}</UserName>
        <FollowBtn onClick={onFollow}>
          {follow ? "팔로우 취소" : "팔로우"}
        </FollowBtn>
      </User>
    </UserContainer>
  );
}

export default SearchUser;

import React, { useState } from "react";
import styled from "styled-components";
const UserContainer = styled.div`
  width: 100%;
  margin-top: 10em;
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
const FollowBtn = styled.div`
  display: flex;
  font-weight: bold;
  color: white;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 25px;
  background-color: #0984e3;
  border-radius: 5px;
  cursor: pointer;
`;
function SearchUser({ avatar, name, isFollowing }) {
  const [follow, setFollow] = useState(false);
  return (
    <UserContainer>
      <User>
        <Avatar avatar={avatar} />
        <UserName>{name}</UserName>
        <FollowBtn onClick={() => setFollow(!follow)}>
          {follow ? "Follow" : "unFollow"}
        </FollowBtn>
      </User>
    </UserContainer>
  );
}

export default SearchUser;

import React from "react";
import styled from "styled-components";
import ProfileEdit from "./ProfileEdit";

const PFheaderArticle = styled.article`
  margin-top: 5em;
  width: 50%;
  height: 25vh;
  background-color: #fafafa;
  display: flex;
  align-items: center;
  user-select: none;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 2em;
`;

const PFavatar = styled.div`
  margin-left: 5em;
  width: 150px;
  height: 150px;
  background-image: url(${(props) => props.avatar});
  background-size: 100% 100%;
  border-radius: 100%;
`;

const PFheaderContents = styled.div`
  margin-left: 6em;
  line-height: 2.5;
  font-size: 1rem;
  h3 {
    display: inline;
    font-size: 1.5rem;
    font-weight: 300;
  }
  h5 {
    font-weight: 600;
  }
`;
const PFcount = styled.ul`
  display: flex;
  li {
    margin-right: 2em;
    span {
      font-weight: bold;
    }
  }
`;

function ProfileHeader({
  avatar,
  followersCount,
  followingCount,
  postsCount,
  name,
  fullName,
  isSelf,
  email,
  firstName,
  lastName,
}) {
  return (
    <PFheaderArticle>
      <PFavatar avatar={avatar} />
      <PFheaderContents>
        <>
          <h3>{name}</h3>
          {isSelf ? <ProfileEdit /> : null}
          <PFcount>
            <li>
              게시물 <span>{postsCount}</span>
            </li>
            <li>
              팔로워 <span>{followersCount}</span>
            </li>
            <li>
              팔로우 <span>{followingCount}</span>
            </li>
          </PFcount>
          <h5>{fullName}</h5>
        </>
      </PFheaderContents>
    </PFheaderArticle>
  );
}

export default ProfileHeader;

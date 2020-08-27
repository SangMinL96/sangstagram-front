import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER } from "../../Query";
import { withRouter } from "react-router-dom";
import Loading from "../../Loading";
import ProfileHeader from "./ProfileHeader";
import styled from "styled-components";
import ProfilePost from "./ProfilePost";

const ProfileContainer = styled.section`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

function Profile({ match }) {
  const name = match.params.name;
  const { data, loading } = useQuery(GET_USER, {
    variables: { name },
  });
  console.log(data);
  return (
    <ProfileContainer>
      {loading ? (
        <Loading />
      ) : (
        <>
          <ProfileHeader
            avatar={data?.seeUser.avatar}
            followersCount={data?.seeUser.followersCount}
            followingCount={data?.seeUser.followingCount}
            postsCount={data?.seeUser.postsCount}
            name={data?.seeUser.name}
            fullName={data?.seeUser.fullName}
            isSelf={data?.seeUser.itsSelf}
          />
          {data?.seeUser.posts.map((item) => (
            <ProfilePost
              key={item.id}
              poster={item.files.map((poster) => poster)}
              likeCount={item.likeConut}
              commentCount={item.commentCount}
            />
          ))}
        </>
      )}
    </ProfileContainer>
  );
}

export default withRouter(Profile);

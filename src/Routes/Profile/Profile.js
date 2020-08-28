import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_USER } from "../../Query";
import { withRouter } from "react-router-dom";
import Loading from "../../Loading";
import ProfileHeader from "./ProfileHeader";
import styled from "styled-components";
import ProfilePost from "./ProfilePost";
import Detail from "./Detail";
import { useState } from "react";

const ProfileContainer = styled.section`
  position: relative;
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;

function Profile({ match }) {
  const name = match.params.name;
  const [detailId, setDetailId] = useState();
  const [detail, setDetail] = useState(false);

  const { data, loading } = useQuery(GET_USER, {
    variables: { name },
  });

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
              id={item.id}
              poster={item.files.map((poster) => poster)}
              likeConut={item.likeConut}
              commentCount={item.commentCount}
              setDetailId={setDetailId}
              setDetail={setDetail}
            />
          ))}
          <Detail id={detailId} />
        </>
      )}
    </ProfileContainer>
  );
}

export default withRouter(Profile);

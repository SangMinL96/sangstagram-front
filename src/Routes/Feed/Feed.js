import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { FEED_QUERY } from "../../Query";
import Loading from "../../Loading";
import styled from "styled-components";
import FeedContainer from "./FeedContainer";

const Container = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: 93.5vh;
`;
function Feed() {
  const { data, loading } = useQuery(FEED_QUERY);

  return (
    <Container>
      {loading && <Loading />}
      {!loading &&
        data?.seeFeed.map((item) => (
          <FeedContainer
            key={item.id}
            id={item.id}
            user={item.user}
            files={item.files}
            likeConut={item.likeConut}
            isLiked={item.isLiked}
            comments={item.comments}
            createdAt={item.createdAt}
            location={item.location}
            caption={item.caption}
          />
        ))}
    </Container>
  );
}

export default Feed;

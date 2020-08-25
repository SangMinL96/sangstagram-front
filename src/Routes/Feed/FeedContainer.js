import React from "react";

import PosterHeader from "./PosterHeader";
import PosterFile from "./PosterFile";
import PosterContents from "./PosterContents";

function FeedContainer({
  id,
  user,
  files,
  likeConut,
  isLiked,
  comments,
  createdAt,
  location,
  caption,
}) {
  return (
    <>
      <PosterHeader user={user} location={location} caption={caption} />
      <PosterFile files={files} />
      <PosterContents
        id={id}
        likeConut={likeConut}
        isLiked={isLiked}
        comments={comments}
        createdAt={createdAt}
      />
    </>
  );
}

export default FeedContainer;

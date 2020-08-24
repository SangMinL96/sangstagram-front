import React from "react";
import FeedHeader from "./PosterHeader";
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
  console.log(files);
  return (
    <>
      <PosterHeader user={user} location={location} caption={caption} />
      <PosterFile files={files} />
      <PosterContents
        likeConut={likeConut}
        isLiked={isLiked}
        comments={comments}
        createdAt={createdAt}
      />
    </>
  );
}

export default FeedContainer;

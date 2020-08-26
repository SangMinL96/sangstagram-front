import React from "react";
import styled from "styled-components";
import SearchUser from "./SearchUser";
import Loading from "../../Loading";
import SearchPost from "./SearchPost";
const SearchItemContainer = styled.div`
  width: 49%;
  height: 100%;
  margin-top: 10em;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.display};
`;

function SearchContainer({ searchUser, searchPost, loading }) {
  return (
    <SearchItemContainer display={loading ? "center" : "start"}>
      {loading ? (
        <Loading />
      ) : (
        !loading &&
        searchUser?.map((item) => (
          <SearchUser
            key={item.id}
            id={item.id}
            avatar={item.avatar}
            name={item.name}
            isFollowing={item.isFollowing}
          />
        ))
      )}
      {loading
        ? null
        : !loading &&
          searchPost?.map((item) => (
            <SearchPost
              key={item.id}
              id={item.id}
              files={item.files}
              commentCount={item.commentCount}
              likeConut={item.likeConut}
            />
          ))}
    </SearchItemContainer>
  );
}

export default SearchContainer;

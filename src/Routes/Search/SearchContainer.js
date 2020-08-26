import React from "react";
import styled from "styled-components";
import SearchUser from "./SearchUser";
import Loading from "../../Loading";
const SearchItemContainer = styled.div`
  width: 49%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${(props) => props.display};
`;

function SearchContainer({ user, loading }) {
  console.log(user);
  return (
    <SearchItemContainer display={loading ? "center" : "start"}>
      {loading ? (
        <Loading />
      ) : (
        !loading &&
        user?.map((item) => (
          <SearchUser
            avatar={item.avatar}
            name={item.name}
            isFollowing={item.isFollowing}
          />
        ))
      )}
    </SearchItemContainer>
  );
}

export default SearchContainer;

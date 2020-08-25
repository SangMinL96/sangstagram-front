import React from "react";
import styled from "styled-components";

const Container = styled.section`
  width: 650px;
  height: 70px;
  margin-top: 5em;
  ${(props) => props.theme.whiteBox};
`;
const Contents = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 1em;
`;
const PosterMyLogo = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 100%;
  background-image: url(${(props) => props.avatar});
  background-size: 100% 100%;
`;
const PosterContent = styled.div`
  margin-left: 1em;
  font-size: 0.85rem;
  line-height: 1.3;
`;
const PosterName = styled.div`
  font-weight: 600;
`;

function PosterHeader({ user, location, caption }) {
  return (
    <Container>
      <Contents>
        <PosterMyLogo avatar={user.avatar} />
        <PosterContent>
          <PosterName>{user.name}</PosterName>
          {location}
        </PosterContent>
      </Contents>
    </Container>
  );
}

export default PosterHeader;

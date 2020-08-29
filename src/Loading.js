import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "./Image/logo.png";
const loaderAni = keyframes`
0%{
  opacity: 0;
}
50%{
  opacity: 1;
}
100%{
  opacity: 0;
}
`;

const Loader = styled.div`
  height: 93.5vh;
  position: fixed;
  top: 50%;

  transform: translate(50% -50%);
`;
const LoaderLogo = styled.img`
  animation: ${loaderAni} 0.7s ease-in-out infinite;
`;

function Loading() {
  return (
    <Loader>
      <LoaderLogo src={logo} />
    </Loader>
  );
}

export default Loading;

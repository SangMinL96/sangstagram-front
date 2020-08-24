import React from "react";
import styled from "styled-components";

const FlieContainer = styled.div`
  width: 35%;
  height: 400px;

  ${(props) => props.theme.whiteBox};
`;
const FlieSlider = styled.div``;

function PosterFile({ files }) {
  return <FlieContainer></FlieContainer>;
}

export default PosterFile;

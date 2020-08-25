import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const FileContainer = styled.div`
  width: 550px;
  height: 450px;
  position: relative;
  overflow: hidden;
  ${(props) => props.theme.whiteBox};
`;
const FileSlider = styled.div`
  height: 100%;
  display: flex;
  position: absolute;
  left: 0%;
  transition: all 0.5s linear;
`;
const SliderItem = styled.div`
  width: 670px;
  height: 100%;
  background-image: url(${(props) => props.SliderBG});
  background-size: 100% 100%;
`;
const LeftIcon = styled(IoIosArrowBack)`
  position: absolute;
  font-size: 3rem;
  left: 1%;
  top: 50%;
  cursor: pointer;
  display: ${(props) => props.display};
  color: #b8b8b8;
`;
const RightIcon = styled(IoIosArrowForward)`
  position: absolute;
  font-size: 3rem;
  right: 1%;
  top: 50%;
  cursor: pointer;
  display: ${(props) => props.display};
  color: #b8b8b8;
`;

function PosterFile({ files }) {
  const [current, setCurrent] = useState(0);
  const SliderContainer = useRef();

  const onRight = (inx) => {
    SliderContainer.current.style.left = inx * -670 + "px";
    setCurrent(inx);
  };
  const onLeft = (inx) => {
    SliderContainer.current.style.left = inx * -670 + "px";
    setCurrent(inx);
  };

  return (
    <FileContainer>
      <FileSlider ref={SliderContainer}>
        {files.map((item) => (
          <SliderItem key={item.id} SliderBG={item.url} />
        ))}
      </FileSlider>
      <LeftIcon
        onClick={() => onLeft(current - 1)}
        display={current === 0 ? "none" : "block"}
      />
      <RightIcon
        onClick={() => onRight(current + 1)}
        display={current === files.length - 1 ? "none" : "block"}
      />
    </FileContainer>
  );
}

export default PosterFile;

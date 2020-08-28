import React from "react";
import styled from "styled-components";

const DetailHeaderArticle = styled.article`
  width: 330px;
  height: 70px;
  display: flex;
  align-items: center;

  border-bottom: 1px solid #e6e6e6;
`;
const DHavatar = styled.div`
  background-image: url(${(props) => props.avatar});
  background-size: 100% 100%;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin-left: 1em;
`;
const DHname = styled.h3`
  margin-left: 1em;
  font-size: 1.1rem;
  font-weight: 600;
`;

function DetailHeader({ avatar, name }) {
  return (
    <DetailHeaderArticle>
      <DHavatar avatar={avatar} />
      <DHname>{name}</DHname>
    </DetailHeaderArticle>
  );
}

export default DetailHeader;

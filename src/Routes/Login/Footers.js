import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  margin-top: 8em;
  width: 75%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: ${(props) => props.theme.darkBlueColor};
  font-size: 0.8rem;
  font-weight: 700;
`;
const FootList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FootItems = styled.li`
  margin-right: 1em;
`;
const FootLink = styled.a``;
const Aside = styled.div``;
function Footers() {
  return (
    <Foot>
      <FootList>
        <FootItems>
          <FootLink href="#">소개</FootLink>
        </FootItems>
        <FootItems>
          <FootLink href="#">도움말</FootLink>
        </FootItems>
        <FootItems>
          <FootLink href="#">홍보 센터</FootLink>
        </FootItems>
        <FootItems>
          <FootLink href="#">API</FootLink>
        </FootItems>
        <FootItems>
          <FootLink href="#">채용 정보</FootLink>
        </FootItems>
        <FootItems>
          <FootLink href="#">개인정보처리방침</FootLink>
        </FootItems>
        <FootItems>
          <FootLink href="#">약관</FootLink>
        </FootItems>
        <FootItems>
          <FootLink href="#">위치</FootLink>
        </FootItems>
        <FootItems>
          <FootLink href="#">인기 계정</FootLink>
        </FootItems>
        <FootItems>
          <FootLink href="#">해시태그</FootLink>
        </FootItems>
        <FootItems>
          <FootLink href="#">언어</FootLink>
        </FootItems>
      </FootList>
      <Aside>© 2020 INSTAGRAM FROM FACEBOOK</Aside>
    </Foot>
  );
}

export default Footers;

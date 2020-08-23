import React, { useState } from "react";
import styled from "styled-components";
import Footers from "./Footers";
import LoginForm from "./LoginForm";
import logoImg from "../../Image/logo.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginContainer = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 350px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LoginState = styled.div`
  margin-top: 1em;
  ${(props) => props.theme.whiteBox};
  width: 350px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SignIn = styled.span`
  margin-left: 1em;
  font-weight: 700;
  cursor: pointer;
  color: ${(props) => props.theme.blueColor};
`;
const LogoImg = styled.img`
  margin-bottom: 3em;
  margin-top: 3em;
`;

function LoginAuth() {
  const [login, setLogin] = useState("" || true);
  return (
    <Wrapper>
      {login ? (
        <>
          <LoginContainer>
            <LogoImg src={logoImg} />
            <LoginForm loginState={login} setLogin={setLogin} />
          </LoginContainer>
          <LoginState>
            계정이 없으신가요?
            <SignIn onClick={() => setLogin(false)}>가입하기</SignIn>
          </LoginState>
        </>
      ) : (
        <>
          <LoginContainer>
            <LogoImg src={logoImg} />
            <LoginForm loginState={login} />
          </LoginContainer>
          <LoginState>
            계정이 있으신가요?
            <SignIn onClick={() => setLogin(true)}>로그인</SignIn>
          </LoginState>
        </>
      )}

      <Footers />
    </Wrapper>
  );
}

export default LoginAuth;

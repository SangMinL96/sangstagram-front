import React, { useState } from "react";
import styled from "styled-components";
import { useInput } from "../../Hooks/useInput";
import { useMutation } from "@apollo/react-hooks";
import { LOG_IN, CREATE_ACCOUNT } from "./LoginQuery";
import { toast } from "react-toastify";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  ${(props) => props.theme.whiteBox};
  margin-top: 0.5em;
  outline: none;
  width: 250px;
  height: 40px;
  padding: 1em;
  &::placeholder {
    font-size: 0.75rem;
  }
`;
const Button = styled.button`
  ${(props) => props.theme.whiteBox};
  background-color: ${(props) => props.theme.blueColor};
  margin-top: 1.5em;
  margin-bottom: 2em;
  outline: none;
  width: 250px;
  height: 35px;
  color: white;
  font-weight: 700;
`;

function LoginForm({ loginState }) {
  const email = useInput("");
  const name = useInput("");
  const lastName = useInput("");
  const firstName = useInput("");
  const [requestSecret] = useMutation(LOG_IN, {
    variables: { email: email.value },
  });
  const onLogin = (ev) => {
    ev.preventDefault();
    if (loginState === true) {
      if (email.value !== "") {
        requestSecret();
      } else {
        toast.error("이메일 항목이 필요합니다.");
      }
    } else if (loginState === false) {
      if (
        email.value !== "" &&
        name.value !== "" &&
        firstName.value !== "" &&
        lastName.value
      ) {
        createAccount();
      } else {
        toast.error("모든 항목이 필요합니다.");
      }
    }
  };
  const createAccount = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      name: name.value,
      firstName: firstName.value,
      lastName: lastName.value,
    },
  });

  return (
    <>
      {loginState ? (
        <Form onSubmit={onLogin}>
          <Input
            type="email"
            placeholder="이메일"
            value={email.value}
            onChange={email.onChange}
          />
          <Button>로그인</Button>
        </Form>
      ) : (
        <Form onSubmit={onLogin}>
          <Input
            placeholder="성"
            value={firstName.value}
            onChange={firstName.onChange}
          />
          <Input
            placeholder="이름"
            value={lastName.value}
            onChange={lastName.onChange}
          />
          <Input
            placeholder="유저네임"
            value={name.value}
            onChange={name.onChange}
          />
          <Input
            type="email"
            placeholder="이메일"
            value={email.value}
            onChange={email.onChange}
          />
          <Button>가입</Button>
        </Form>
      )}
    </>
  );
}

export default LoginForm;

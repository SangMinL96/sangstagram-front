import React from "react";
import styled from "styled-components";
import { useInput } from "../../Hooks/useInput";
import { useMutation } from "@apollo/react-hooks";
import {
  LOG_IN,
  CREATE_ACCOUNT,
  CONFIRM_SECRET,
  LOCAL_LOG_IN,
} from "../../Query";
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

function LoginForm({ loginState, setLogin }) {
  const email = useInput("");
  const name = useInput("");
  const lastName = useInput("");
  const firstName = useInput("");
  const secret = useInput("");

  const [requestSecretMutation] = useMutation(LOG_IN, {
    variables: { email: email.value },
  });
  const [createAccountMutation] = useMutation(CREATE_ACCOUNT, {
    variables: {
      email: email.value,
      name: name.value,
      firstName: firstName.value,
      lastName: lastName.value,
    },
  });
  const [conFirmSecretMutation] = useMutation(CONFIRM_SECRET, {
    variables: {
      email: email.value,
      secret: secret.value,
    },
  });
  const [localLogInMutation] = useMutation(LOCAL_LOG_IN);

  const onLogin = async (ev) => {
    ev.preventDefault();
    if (loginState === true) {
      if (email.value !== "") {
        try {
          const {
            data: { requestSecret },
          } = await requestSecretMutation();
          if (!requestSecret) {
            toast.error("계정이 없습니다. 계정을 생성하세요.");
          } else {
            toast.success("받은 편지함에 로그인 비밀이 있는지 확인합니다.");
            setLogin("secret");
          }
        } catch {
          toast.error("암호를 요청할 수 없습니다. 다시 시도하십시오.");
        }
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
        try {
          const {
            data: { createAccount },
          } = await createAccountMutation();
          if (!createAccount) {
            toast.error("계정을 만들 수 없습니다.");
          } else {
            toast.success("계정을 만들었습니다. 지금 로그인하세요.");
          }
        } catch (e) {
          toast.error(e.message);
        }
      } else {
        toast.error("모든 항목이 필요합니다.");
      }
    } else if (loginState === "secret") {
      if (secret.value !== "") {
        try {
          const {
            data: { confirmSecret: token },
          } = await conFirmSecretMutation();
          if (token !== "" && token !== undefined) {
            localLogInMutation({ variables: { token } });
          }
        } catch {
          toast.error("시크릿 암호가 없습니다.");
        }
      }
    }
  };

  return (
    <>
      {loginState === true && (
        <Form onSubmit={onLogin}>
          <Input
            type="email"
            placeholder="이메일"
            value={email.value}
            onChange={email.onChange}
          />
          <Button>로그인</Button>
        </Form>
      )}
      {loginState === false && (
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
      {loginState === "secret" && (
        <Form onSubmit={onLogin}>
          <Input
            placeholder="시크릿 암호를 입력하세요"
            value={secret.value}
            onChange={secret.onChange}
          />
          <Button>인증완료</Button>
        </Form>
      )}
    </>
  );
}

export default LoginForm;

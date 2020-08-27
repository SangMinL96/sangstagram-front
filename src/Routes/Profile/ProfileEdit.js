import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { EDIT_USER } from "../../Query";
import { useInput } from "../../Hooks/useInput";
import editLogo from "../../Image/logo.png";
import { Link, withRouter } from "react-router-dom";
const EditBtn = styled.span`
  margin-left: 1.5em;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 5px 10px;
  border-radius: 5px;
  border: 1px solid #dcdcdc;
  cursor: pointer;
  &:hover {
    background-color: #d1d1d1;
  }
`;

const EditPopUpArticle = styled.article`
  position: absolute;
  top: -10%;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 400px;
  height: 600px;
  background-color: #dff9fb;
  display: flex;
  border: 1px solid #dcdcdc;
  border-radius: 5px;

  align-items: center;
  flex-direction: column;

  ul {
    width: 85%;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 2em;

      h5 {
        font-size: 1rem;
        margin-right: 2em;
        width: 120px;
        text-align: end;
      }
    }
  }
`;
const EditImg = styled.img`
  margin-top: 2em;
`;
const Input = styled.input`
  width: 150px;
  height: 30px;

  outline: none;
  border-radius: 3px;
  padding: 5px;
  border: 1px solid #dcdcdc;
`;
const EditSubmit = styled.button`
  width: 100%;
  height: 35px;
  background-color: aqua;
  border: none;
  border-radius: 5px;
  margin-top: 5em;
  outline: none;
  cursor: pointer;
  box-shadow: 0px 4px 5px 0px rgba(101, 161, 221, 0.68);
  &:active {
    transform: translateY(2px);
    box-shadow: 0px 2px 5px 0px rgba(101, 161, 221, 0.68);
  }
`;

function ProfileEdit({ history }) {
  const [edit, setEdit] = useState(false);

  const name = useInput("");
  const email = useInput("");
  const firstName = useInput("");
  const lastName = useInput("");
  const [editMutation] = useMutation(EDIT_USER, {
    variables: {
      name: name.value,
      firstName: firstName.value,
      lastname: lastName.value,
      email: email.value,
    },
  });
  const path = () => {
    return history.push("/");
  };
  const onSubmit = async (ev) => {
    setEdit(false);
    try {
      await editMutation();
      path();
    } catch (e) {
      console.log(e.error);
    }
  };
  return (
    <>
      <EditBtn onClick={() => setEdit(true)}>프로필 편집</EditBtn>
      {edit ? (
        <EditPopUpArticle>
          <EditImg src={editLogo} />

          <ul>
            <form onSubmit={onSubmit}>
              <li>
                <h5>이름 (닉네임) :</h5>
                <Input onChange={name.onChange} value={name.value} />
              </li>
              <li>
                <h5>성 : </h5>
                <Input onChange={firstName.onChange} value={firstName.value} />
              </li>
              <li>
                <h5>이름 : </h5>
                <Input onChange={lastName.onChange} value={lastName.value} />
              </li>
              <li>
                <h5> 이메일 : </h5>
                <Input onChange={email.onChange} value={email.value} />
              </li>

              <EditSubmit>수정하기</EditSubmit>
            </form>
          </ul>
        </EditPopUpArticle>
      ) : null}
    </>
  );
}

export default withRouter(ProfileEdit);

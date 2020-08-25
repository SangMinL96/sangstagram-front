import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import logoImg from "../Image/logo.png";
import { IoMdCompass, IoIosHeartEmpty, IoMdPerson } from "react-icons/io";
import { useInput } from "../Hooks/useInput";
import { useQuery } from "@apollo/react-hooks";
import { ME } from "../Query";
const HeaderContainer = styled.section`
  width: 100%;
  height: 60px;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid wheat;
  box-shadow: 0px 2px 4px 0px rgba(64, 50, 50, 0.41);
  z-index: 2;
`;
const Column = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LogoLink = styled(Link)`
  width: 20%;
`;
const Logo = styled.img`
  width: 100%;
`;
const Search = styled.input`
  ${(props) => props.theme.whiteBox}
  height:30px;
  width: 200px;
  outline: none;
  padding: 10px;
`;
const NavIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icons = styled(Link)`
  font-size: 1.5rem;
  margin-left: 1em;
  cursor: pointer;
`;

function Header({ history }) {
  const searcing = useInput("");
  const meQuery = useQuery(ME);

  const onSearch = (ev) => {
    ev.preventDefault();
    history.push(`/Search/${searcing.value}`);
  };
  return (
    <HeaderContainer>
      <Column>
        <LogoLink to="/">
          <Logo src={logoImg} />
        </LogoLink>
        <form onSubmit={onSearch}>
          <Search
            placeholder="검색"
            onChange={searcing.onChange}
            value={searcing.value}
          />
        </form>
        <NavIcon>
          <Icons to="/Profile">
            <IoMdCompass />
          </Icons>
          <Icons to="/Profile">
            <IoIosHeartEmpty />
          </Icons>
          {!meQuery.data?.me ? (
            <Icons to="/">
              <IoMdPerson />
            </Icons>
          ) : (
            <Icons to={meQuery.data?.me.name}>
              <IoMdPerson />
            </Icons>
          )}
        </NavIcon>
      </Column>
    </HeaderContainer>
  );
}

export default withRouter(Header);

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <Container>
      <Nav>
        <Ul>
          <Li>
            <StyledLink to="/">Home</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/cart">Cart</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/search">Search</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/account">Account</StyledLink>
          </Li>
        </Ul>
      </Nav>
    </Container>
  );
};

const Nav = styled.nav`
  height: 100%;
`;

const Container = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  height: 50px;
`;

const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333;
  height: 100%;
`;

const Li = styled.li`
  float: left;
  height: 100%;
`;

const StyledLink = styled(Link)`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  height: 100%;
  &:hover {
    background-color: black;
  }
`;

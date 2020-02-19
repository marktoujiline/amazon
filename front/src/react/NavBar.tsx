import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { RootState } from "..";
import { Page } from "../redux/page";
import pageSlice from "../redux/page";
import { pageTitle } from "../util/pageTitle";
import match from "../util/match";

interface ReadProps {
  page: Page;
}

interface WriteProps {
  setPage: (page: Page) => void;
}

type Props = ReadProps & WriteProps;

const NavBar: React.FC<Props> = ({ page, setPage }) => {
  const tabs: Page[] = [
    "home",
    "cart",
    "search",
    "account",
    "about",
    "messages"
  ];

  return (
    <Container>
      <Nav>
        <Ul>
          {tabs.map(tab => {
            return (
              <Li>
                <StyledLink highlight={page === tab} to={`/${tab}`}>
                  {pageTitle(tab)}
                </StyledLink>
              </Li>
            );
          })}
        </Ul>
      </Nav>
    </Container>
  );
};

export default connect<ReadProps, WriteProps, {}, RootState>(
  state => ({
    page: state.page
  }),
  dispatch => ({
    setPage: page => dispatch(pageSlice.actions.changePage(page))
  })
)(NavBar);

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

const StyledLink = styled(Link)<{ highlight: boolean }>`
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  height: 100%;
  &:hover {
    background-color: black;
  }

  background-color: ${props => (!props.highlight ? "#333" : "black")};
`;

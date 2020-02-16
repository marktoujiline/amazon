import React from "react";
import { Page } from "../redux/page";
import pageSlice from "../redux/page";
import { connect } from "react-redux";
import { RootState } from "..";

interface ReadProps {
  page: Page;
}

interface WriteProps {
  setPage: (page: Page) => void;
}

type Props = ReadProps & WriteProps;

const Search: React.FC<Props> = ({ page, setPage }) => {
  setPage("search");
  return <h2>Search</h2>;
};

export default connect<ReadProps, WriteProps, {}, RootState>(
  state => ({
    page: state.page
  }),
  dispatch => ({
    setPage: page => dispatch(pageSlice.actions.changePage(page))
  })
)(Search);

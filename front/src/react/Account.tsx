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

const Account: React.FC<Props> = ({ page, setPage }) => {
  setPage("account");
  return <h2>Account</h2>;
};

export default connect<ReadProps, WriteProps, {}, RootState>(
  state => ({
    page: state.page
  }),
  dispatch => ({
    setPage: page => dispatch(pageSlice.actions.changePage(page))
  })
)(Account);

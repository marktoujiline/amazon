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

const Cart: React.FC<Props> = ({ page, setPage }) => {
  setPage("cart");
  return <h2>Cart</h2>;
};

export default connect<ReadProps, WriteProps, {}, RootState>(
  state => ({
    page: state.page
  }),
  dispatch => ({
    setPage: page => dispatch(pageSlice.actions.changePage(page))
  })
)(Cart);

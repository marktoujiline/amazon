import React from "react";
import { Page } from "../redux/page";
import pageSlice from "../redux/page";
import { connect } from "react-redux";
import { RootState } from "..";

interface WriteProps {
  setPage: (page: Page) => void;
}

const page = (Comp: React.ComponentType, p: Page) => {
  const Wrapper: React.FC<WriteProps> = ({ setPage }) => {
    setPage(p);
    return <Comp></Comp>;
  };

  return connect<{}, WriteProps, {}, RootState>(null, dispatch => ({
    setPage: page => dispatch(pageSlice.actions.changePage(page))
  }))(Wrapper);
};

export default page;

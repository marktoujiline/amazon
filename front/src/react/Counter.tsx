import React from "react";
import { connect } from "react-redux";
import { RootState } from "..";
import counter from "../redux/counter";

interface ReadProps {
  count: number;
}

interface WriteProps {
  inc: () => void;
  dec: () => void;
}

type Props = ReadProps & WriteProps;

export const Counter: React.FC<Props> = ({ count, inc, dec }) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={inc}>INC</button>
      <button onClick={dec}>DEC</button>
    </div>
  );
};

export default connect<ReadProps, WriteProps, {}, RootState>(
  state => ({
    count: state.counter
  }),
  dispatch => ({
    inc: () => dispatch(counter.actions.inc()),
    dec: () => dispatch(counter.actions.dec())
  })
)(Counter);

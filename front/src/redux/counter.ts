import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    inc: state => state + 1,
    dec: state => state - 1
  }
});

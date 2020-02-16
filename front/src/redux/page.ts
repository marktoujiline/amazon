import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Page = "home" | "cart" | "search" | "account";

export default createSlice({
  name: "page",
  initialState: "home" as Page,
  reducers: {
    changePage: (state, action: PayloadAction<Page>) => {
      return action.payload;
    }
  }
});

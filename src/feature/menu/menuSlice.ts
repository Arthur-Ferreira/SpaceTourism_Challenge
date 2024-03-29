import { createSlice } from "@reduxjs/toolkit";

type TInitialState = {
  isOpen: boolean;
}

const initialState: TInitialState = {
  isOpen: false,
}

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
  }
});

export const { open, close } = menuSlice.actions;

export default menuSlice.reducer;
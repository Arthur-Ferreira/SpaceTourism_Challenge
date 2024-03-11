import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { technology } from "./technology.data";

interface TechnologyState {
  gear: ITechnology
}

const initialState: TechnologyState = {
  gear: technology[0],
};

const technologySlice = createSlice({
  name: 'technology',
  initialState,
  reducers: {
    selectTechnology(state, action: PayloadAction<string>) {
      state.gear = technology.find(char => char.name === action.payload) || initialState.gear;
    },
  },
});

export const { selectTechnology } = technologySlice.actions;
export default technologySlice.reducer;
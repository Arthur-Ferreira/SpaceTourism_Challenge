import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { crew } from "./crew.data";

interface CrewState {
  character: ICrew
}

const initialState: CrewState = {
  character: crew[0],
};

const crewSlice = createSlice({
  name: 'crew',
  initialState,
  reducers: {
    selectCrew(state, action: PayloadAction<string>) {
      state.character = crew.find(char => char.name === action.payload) || initialState.character;
    },
  },
});

export const { selectCrew } = crewSlice.actions;
export default crewSlice.reducer;
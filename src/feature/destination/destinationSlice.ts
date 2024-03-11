import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { destinations } from "./destinations.data";

interface DestinationsState {
  selected: string;
  destination: IDestination
}

const initialState: DestinationsState = {
  selected: destinations[0].name,
  destination: destinations[0],
};

const destinationSlice = createSlice({
  name: 'destination',
  initialState,
  reducers: {
    selectDestination(state, action: PayloadAction<string>) {
      state.selected = action.payload;
      state.destination = destinations.find(dest => dest.name.toLowerCase() === action.payload) || initialState.destination;
    },
  },
});

export const { selectDestination } = destinationSlice.actions;
export default destinationSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { destinations } from "./destinations.data";

interface DestinationsState {
  destination: IDestination
}

const initialState: DestinationsState = {
  destination: destinations[0],
};

const destinationSlice = createSlice({
  name: 'destination',
  initialState,
  reducers: {
    selectDestination(state, action: PayloadAction<string>) {
      state.destination = destinations.find(dest => dest.name === action.payload) || initialState.destination;
    },
  },
});

export const { selectDestination } = destinationSlice.actions;
export default destinationSlice.reducer;
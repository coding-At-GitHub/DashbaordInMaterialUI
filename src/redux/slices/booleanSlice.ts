// slices/booleanSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BooleanState {
  value: boolean;
}

const initialState: BooleanState = {
  value: true, // Initial value
};

const booleanSlice = createSlice({
  name: 'boolean',
  initialState,
  reducers: {
    toggleBoolean: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggleBoolean } = booleanSlice.actions;

export default booleanSlice.reducer;

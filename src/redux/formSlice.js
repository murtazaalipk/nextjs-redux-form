import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    dataList: [],
  },
  reducers: {
    addData: (state, action) => {
      state.dataList.push(action.payload);
    },
  },
});

export const { addData } = formSlice.actions;
export default formSlice.reducer;

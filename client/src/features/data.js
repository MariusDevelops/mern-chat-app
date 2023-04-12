import { createSlice } from '@reduxjs/toolkit';

export const dataSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
      myUser: null,
      allUsers: [],
    },
  },
  reducers: {
    setAllUsers: ({ value }, { payload }) => {
      value.allUsers = payload;
    },
    setUser: ({ value }, { payload }) => {
      value.myUser = payload;
    },
  },
});

export const { setAllUsers, setUser } = dataSlice.actions;

export default dataSlice.reducer;

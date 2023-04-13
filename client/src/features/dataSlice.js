import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    myUser: null,
    allUsers: [],
    isLoggedIn: false,
    currentUser: null,
  },
  reducers: {
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setUser: (state, action) => {
      state.myUser = action.payload;
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.myUser = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setAllUsers, setUser, clearUser } = dataSlice.actions;

export default dataSlice.reducer;

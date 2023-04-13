// import { createSlice } from '@reduxjs/toolkit';

// export const dataSlice = createSlice({
//   name: 'user',
//   initialState: {
//     value: {
//       myUser: null,
//       allUsers: [],
//     },
//   },
//   reducers: {
//     setAllUsers: ({ value }, { payload }) => {
//       value.allUsers = payload;
//     },
//     setUser: ({ value }, { payload }) => {
//       value.myUser = payload;
//     },
//   },
// });

// export const { setAllUsers, setUser } = dataSlice.actions;

// export default dataSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    myUser: null,
    allUsers: [],
    isLoggedIn: false,
  },
  reducers: {
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    setUser: (state, action) => {
      state.myUser = action.payload;
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

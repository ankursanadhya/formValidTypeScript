
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type RootState from "../store"
import { RootState } from './index';
interface User {
  name: string;
  email: string;
  dob: string;
  city: string;
  pincode: string;
}

interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.users.push(action.payload);
    },
  },
});

export const { addUser } = userSlice.actions;

export const selectUsers = (state: RootState) => state.user.users;

export default userSlice.reducer;

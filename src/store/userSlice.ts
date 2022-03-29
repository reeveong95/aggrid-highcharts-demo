import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  id: number | null;
  firstName: string;
  lastName: string;
}

interface userState {
  user: User;
  userLoading: boolean;
  userError: string | null;
}

const initialState: userState = {
  user: { id: null, firstName: "firstName", lastName: "lastName" },
  userLoading: false,
  userError: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    fetchUser(state) {
      state.userLoading = true;
    },
    fetchUserSuccess(state, action: PayloadAction<User>) {
      const { id, firstName, lastName } = action.payload;
      state.user.firstName = firstName;
      state.user.id = id;
      state.user.lastName = lastName;
      state.userLoading = false;
    },
    fetchUserFail(state, action) {
      state.userError = action.payload.error.message;
      state.userLoading = false;
    },
  },
});

export const { fetchUser, fetchUserSuccess, fetchUserFail } = userSlice.actions;

export default userSlice.reducer;

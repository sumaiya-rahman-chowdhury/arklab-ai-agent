import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string | null;
  email: string | null;
  image: string | null;
  isAuthenticated: boolean;
}

const initialState: UserState = {
  name: null,
  email: null,
  image: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (
      state,
      action: PayloadAction<{ name: string; email: string; image: string }>
    ) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.image = action.payload.image;
      state.isAuthenticated = true;
    },
    clearUser: (state) => {
      state.name = null;
      state.email = null;
      state.image = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;

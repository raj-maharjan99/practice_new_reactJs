import { clearLocal, getFromLocal, setToLocal } from "@/constants/api-link";
import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "users",
  initialState: { user: getFromLocal() },
  reducers: {
    setUserToLocal: (state, action) => {
      state.user = action.payload;
      setToLocal(state.user);
    },

    clearFromLocal: (state, action) => {
      state.user = null;
      clearLocal();
    },

    addUserToSignUp: (state, action) => {},
  },
});

export const { setUserToLocal, clearFromLocal } = userSlice.actions;

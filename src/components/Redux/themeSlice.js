import { createSlice } from "@reduxjs/toolkit";

const useTheme = createSlice({
  name: "theme",
  initialState: {
    darkTheme: true,
  },
  reducers: {
    toggleTheme: (state) => {
      state.darkTheme = !state.darkTheme;
    },
  },
});

export const { toggleTheme } = useTheme.actions;
export default useTheme.reducer;

import { createSlice } from "@reduxjs/toolkit";

interface FilterState {
  search: string;
  statuses: string[];
  categories: string[];
  pricing: string;
}
const initialState: FilterState = {
  search: "",
  statuses: [],
  categories: [],
  pricing: "",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
});
export const {} = filterSlice.actions;
export default filterSlice.reducer;

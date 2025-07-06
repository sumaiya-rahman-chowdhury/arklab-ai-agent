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
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    toggleStatus: (state, action) => {
      const status = action.payload;
      state.statuses.includes(status)
        ? (state.statuses = state.statuses.filter((s) => s !== status))
        : state.statuses.push(status);
    },
    toggleCategory: (state, action) => {
      const cat = action.payload;
      state.categories.includes(cat)
        ? (state.categories = state.categories.filter((c) => c !== cat))
        : state.categories.push(cat);
    },
    setPricing: (state, action) => {
      state.pricing = action.payload;
    },
    clearAll: (state) => {
      state.search = "";
      state.statuses = [];
      state.categories = [];
      state.pricing = "";
    },
  },
});
export const { setSearch, toggleStatus, toggleCategory, setPricing, clearAll } =
  filterSlice.actions;
export default filterSlice.reducer;

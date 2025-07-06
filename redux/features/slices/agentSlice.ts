import { Agent } from "@/app/page";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AgentState {
  allAgents: Agent[];
  filteredAgents: Agent[];
}

const initialState: AgentState = {
  allAgents: [],
  filteredAgents: [],
};

const agentSlice = createSlice({
  name: "agent",
  initialState,
  reducers: {
    setAgents: (state, action: PayloadAction<Agent[]>) => {
      state.allAgents = action.payload;
      state.filteredAgents = action.payload;
    },
    filterAgents: (
      state,
      action: PayloadAction<{
        search: string;
        statuses: string[];
        categories: string[];
        pricing: string;
      }>
    ) => {
      const { search, statuses, categories, pricing } = action.payload;
      state.filteredAgents = state.allAgents.filter((agent) => {
        const lowerSearch = search.toLowerCase();
        const matchedSearch = [agent.name, agent.description].some((element) =>
          element.toLowerCase().includes(lowerSearch)
        );
        const matchesStatus =
          !statuses.length || statuses.includes(agent.status);
        const matchesCategory =
          !categories.length || categories.includes(agent.category);
        const matchesPricing = !pricing || agent.pricingModel === pricing;

        return (
          matchedSearch && matchesStatus && matchesCategory && matchesPricing
        );
      });
    },
    clearFilters: (state) => {
      state.filteredAgents = state.allAgents;
    },
  },
});
export const { setAgents, filterAgents, clearFilters } = agentSlice.actions;
export default agentSlice.reducer;

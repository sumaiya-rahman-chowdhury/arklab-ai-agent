"use client";
import { Agent } from "@/app/page";
import { setAgents, filterAgents } from "@/redux/features/slices/agentSlice";
import { RootState } from "@/redux/features/store/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AgentCard from "./AgentCard";
import FilterPanel from "./FilterPanel";
import { Badge } from "./ui/badge";
import Filters from "./Filters";

function AgentsPage({ agents }: { agents: Agent[] }) {
  const dispatch = useDispatch();
  const filteredAgents = useSelector(
    (state: RootState) => state.agent.filteredAgents
  );
  const filters = useSelector((state: RootState) => state.filter);
  useEffect(() => {
    dispatch(setAgents(agents));
  }, [agents]);

  useEffect(() => {
    dispatch(filterAgents(filters));
  }, [filters]);

  return (
    <div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-12 gap-5 ">
        <div className="col-span-12 md:col-span-3 shadow p-5 md:h-screen rounded-lg ">
          <FilterPanel />
        </div>
        <div className="col-span-12 md:col-span-9">
          <Filters />
          <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredAgents.map((agent) => (
              <AgentCard key={agent.id} agent={agent} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentsPage;

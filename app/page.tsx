import path from "path";
import fs from "fs";
import AgentCard from "@/components/AgentCard";

export interface Agent {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
}
const fetchDataOnServer = async () => {
  const filePath = path.join(process.cwd(), "lib", "mock-agents.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const agents: Agent[] = JSON.parse(fileContents);
  return agents;
};

const Home = async () => {
  const agents = await fetchDataOnServer();
  console.log(agents);
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {agents.map((agent) => (
        <AgentCard key={agent.id} agent={agent} />
      ))}
    </div>
  );
};

export default Home;

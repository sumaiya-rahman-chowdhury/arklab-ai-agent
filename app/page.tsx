import path from "path";
import fs from "fs";
import AgentsPage from "@/components/AgentsPage";

export const metadata = {
  title: "ArkLab AI Agents Catalog",
};
export interface Agent {
  id: string;
  name: string;
  description: string;
  status: string;
  category: string;
  pricingModel: string;
}
const fetchDataOnServer = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const filePath = path.join(process.cwd(), "lib", "mock-agents.json");
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const agents: Agent[] = JSON.parse(fileContents);
  return agents;
};

const Home = async () => {
  const agents = await fetchDataOnServer();
  console.log(agents);
  return (
    <div className="p-4">
      <AgentsPage agents={agents} />
    </div>
  );
};

export default Home;

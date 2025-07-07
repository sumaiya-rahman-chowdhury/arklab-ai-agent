import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { motion } from "framer-motion";

type Props = {
  agent: {
    id: string;
    name: string;
    description: string;
    status: string;
    category: string;
    pricingModel: string;
  };
};

export default function AgentCard({ agent }: Props) {
  // console.log("This is from agent card")
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {" "}
      <Card className="hover:shadow-lg transition-all">
        <CardContent className="">
          <div className="relative">
            <div className=" w-full h-[150px] rounded-lg bg-primary text-white flex items-center justify-center text-lg font-bold mb-4">
              {agent.name
                .split(" ")
                .map((word) => word[0])
                .slice(0, 2)
                .join("")
                .toUpperCase()}
            </div>
            <Badge
              variant="outline"
              className="mb-1 absolute top-2 right-2 bg-red-500 border-0 text-white"
            >
              {agent.status}
            </Badge>
          </div>

          <h3 className="text-lg font-semibold">{agent.name}</h3>
          <p className="text-sm text-muted-foreground">{agent.description}</p>
          <div className="flex flex-wrap gap-2 mt-2 text-sm">
            <Badge variant="outline" className="capitalize">
              Category: {agent.category}
            </Badge>
            <Badge variant="outline" className="capitalize">
              Pricing: {agent.pricingModel}
            </Badge>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

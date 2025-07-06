import { Card, CardContent } from "@/components/ui/card";

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
    <Card className="hover:shadow-lg transition-all">
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{agent.name}</h3>
        <p className="text-sm text-muted-foreground">{agent.description}</p>
        <div className="mt-2 text-sm">
          <p>
            <strong>Status:</strong> {agent.status}
          </p>
          <p>
            <strong>Category:</strong> {agent.category}
          </p>
          <p>
            <strong>Pricing:</strong> {agent.pricingModel}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

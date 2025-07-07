"use client";

import { RootState } from "@/redux/features/store/store";
import { useSelector } from "react-redux";
import { Badge } from "./ui/badge";

function Filters() {
  const filters = useSelector((state: RootState) => state.filter);

  return (
    <div>
      {filters && (
        <div className="flex flex-wrap gap-2 mb-4">
          {filters.categories?.map((category: string) => (
            <Badge key={category} variant="outline" className="capitalize">
              {category}
            </Badge>
          ))}

          {filters.pricing && (
            <Badge variant="outline" className="capitalize">
              {filters.pricing}
            </Badge>
          )}

          {filters.search && (
            <Badge variant="outline" className="capitalize">
              {filters.search}
            </Badge>
          )}

          {filters.statuses?.map((status: string) => (
            <Badge key={status} variant="outline" className="capitalize">
              {status}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}

export default Filters;

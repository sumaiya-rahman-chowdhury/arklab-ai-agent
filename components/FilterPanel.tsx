"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  setSearch,
  toggleStatus,
  toggleCategory,
  setPricing,
  clearAll,
} from "@/redux/features/slices/filterSlice";
import { RootState } from "@/redux/features/store/store";
import { Input } from "./ui/input";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";

const statusOptions = ["Active", "Beta", "Archived"];
const categoryOptions = [
  "Customer Service",
  "Marketing",
  "Development",
  "Data Analysis",
  "Operations",
  "Human Resources",
  "Finance",
  "Legal",
];
const pricingOptions = ["Free Tier", "Subscription", "Per-Use"];

export default function FilterPanel() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter);

  return (
    <div className="space-y-4">
      <Input
        type="text"
        placeholder="Search by name or description"
        value={filter.search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
        className="border p-2 w-full"
      />

      <div>
        <p className="font-semibold mb-2">Status:</p>
        {statusOptions.map((status) => (
          <div key={status} className="flex items-center space-x-2 mb-2">
            <Checkbox
              id={status}
              checked={filter.statuses.includes(status)}
              onCheckedChange={() => dispatch(toggleStatus(status))}
            />
            <label
              htmlFor={status}
              className="text-sm font-medium leading-none"
            >
              {status}
            </label>
          </div>
        ))}
      </div>
      <div>
        <p className="font-semibold mb-2">Category:</p>
        {categoryOptions.map((cat) => (
          <div key={cat} className="flex items-center space-x-2 mb-2">
            <Checkbox
              id={cat}
              checked={filter.categories.includes(cat)}
              onCheckedChange={() => dispatch(toggleCategory(cat))}
            />
            <label htmlFor={cat} className="text-sm font-medium leading-none">
              {cat}
            </label>
          </div>
        ))}
      </div>

      <div>
        <p className="font-semibold">Pricing:</p>
        {pricingOptions.map((price) => (
          <label key={price} className="mr-2">
            <Checkbox
              id={price}
              name="pricing"
              checked={filter.pricing === price}
              onCheckedChange={() => dispatch(setPricing(price))}
            />
            {price}
          </label>
        ))}
      </div>

      <Button
        onClick={() => dispatch(clearAll())}
        className="bg-red-500 text-white px-4 py-1 rounded"
      >
        Clear All Filters
      </Button>
    </div>
  );
}

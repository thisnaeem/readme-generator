import * as React from "react";
import { cn } from "@/lib/utils";
import { SelectProps } from "@/lib/types";
import { ChevronDown } from "lucide-react";

export function Select({ className, children, ...props }: SelectProps) {
  return (
    <div className="relative">
      <select
        className={cn(
          "h-10 w-full appearance-none rounded-md border border-gray-600",
          "bg-gray-700/50 px-3 py-2 text-sm text-white",
          "focus:outline-none focus:ring-2 focus:ring-purple-500",
          className
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="absolute right-3 top-3 h-4 w-4 text-gray-400" />
    </div>
  );
}

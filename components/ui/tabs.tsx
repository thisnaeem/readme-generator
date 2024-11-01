import * as React from "react";
import { cn } from "@/lib/utils";
import { TabsProps, TabProps } from "@/lib/types";

export function Tabs({ value, onChange, children, className }: TabsProps) {
  return (
    <div className={cn("flex border-b border-gray-700", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<TabProps>, {
            isSelected: child.props.value === value,
            onClick: () => onChange(child.props.value),
          });
        }
        return child;
      })}
    </div>
  );
}

export function Tab({ label, isSelected, onClick }: TabProps) {
  return (
    <button
      className={cn(
        "px-6 py-3 text-sm font-medium",
        "transition-colors focus:outline-none",
        isSelected
          ? "border-b-2 border-purple-500 text-purple-500"
          : "text-gray-400 hover:text-white"
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

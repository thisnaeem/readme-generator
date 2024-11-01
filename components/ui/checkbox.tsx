import * as React from "react";
import { cn } from "@/lib/utils";
import { CheckboxProps } from "@/lib/types";
import { Check } from "lucide-react";

export function Checkbox({
  className,
  checked,
  onChange,
  ...props
}: CheckboxProps) {
  return (
    <div
      className={cn(
        "h-4 w-4 rounded border border-gray-600",
        "flex items-center justify-center",
        "data-[state=checked]:bg-purple-600",
        "transition-colors",
        className
      )}
      data-state={checked ? "checked" : "unchecked"}
      onClick={() => onChange?.(!checked)}
      {...props}
    >
      {checked && <Check className="h-3 w-3 text-white" />}
    </div>
  );
}

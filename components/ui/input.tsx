import { cn } from "@/lib/utils";
import { InputProps } from "@/lib/types";

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-600",
        "bg-gray-700/50 px-3 py-2 text-sm text-white",
        "focus:outline-none focus:ring-2 focus:ring-purple-500",
        "disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

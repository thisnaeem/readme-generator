import { cn } from "@/lib/utils";
import { ButtonProps } from "@/lib/types";

export function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors",
        "disabled:opacity-50 disabled:pointer-events-none",
        {
          "bg-purple-600 text-white hover:bg-purple-700": variant === "default",
          "bg-gray-700 text-white hover:bg-gray-600": variant === "secondary",
          "bg-transparent hover:bg-gray-700": variant === "ghost",
        },
        {
          "h-10 px-4 py-2": size === "default",
          "h-8 px-3 text-sm": size === "sm",
          "h-12 px-8": size === "lg",
        },
        className
      )}
      {...props}
    />
  );
}

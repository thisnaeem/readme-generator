import * as React from "react";
import { cn } from "@/lib/utils";
import { ToastProps } from "@/lib/types";
import { X } from "lucide-react";

export function Toast({
  message,
  type = "default",
  onClose,
  className,
}: ToastProps) {
  return (
    <div
      className={cn(
        "fixed bottom-4 right-4 z-50",
        "flex items-center gap-2 rounded-lg px-4 py-2",
        "animate-in slide-in-from-bottom-2",
        {
          "bg-purple-600 text-white": type === "default",
          "bg-green-600 text-white": type === "success",
          "bg-red-600 text-white": type === "error",
        },
        className
      )}
    >
      <span>{message}</span>
      <button onClick={onClose} className="text-white/80 hover:text-white">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

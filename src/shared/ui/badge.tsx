import React from "react";
import { cn } from "@/shared/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "blue" | "red" | "muted" | "success";
  pulse?: boolean;
}

export function Badge({
  className,
  variant = "blue",
  pulse = false,
  children,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full border transition-colors",
        variant === "blue" &&
          "border-white/10 text-[#C2D1D0] bg-[#10181C]",
        variant === "red" &&
          "border-white/10 text-[#E6F1F0] bg-[#161214]",
        variant === "muted" &&
          "border-white/10 text-[#8B9C9B] bg-[#0E1417]",
        variant === "success" &&
          "border-white/10 text-emerald-400 bg-[#0C1714]",
        className
      )}
      {...props}
    >
      {pulse && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full inline-block",
            variant === "blue" && "bg-[#0C6791]",
            variant === "red" && "bg-[#B62C2C]",
            variant === "muted" && "bg-[#8B9C9B]",
            variant === "success" && "bg-emerald-400"
          )}
        />
      )}
      <span>{children}</span>
    </div>
  );
}

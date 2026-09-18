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
          "border-[#0C6791]/40 text-[#7ec6ea] bg-[#0C6791]/15",
        variant === "red" &&
          "border-[#B62C2C]/40 text-[#fca5a5] bg-[#B62C2C]/15",
        variant === "muted" &&
          "border-white/10 text-[#8B9C9B] bg-white/[0.03]",
        variant === "success" &&
          "border-emerald-500/30 text-emerald-400 bg-emerald-500/10",
        className
      )}
      {...props}
    >
      {pulse && (
        <span
          className={cn(
            "w-1.5 h-1.5 rounded-full inline-block animate-pulse-dot",
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

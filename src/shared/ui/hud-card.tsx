import React from "react";
import { cn } from "@/shared/lib/utils";

interface HudCardProps extends React.HTMLAttributes<HTMLDivElement> {
  cornerColor?: "red" | "blue" | "none";
  interactive?: boolean;
}

export const HudCard = React.forwardRef<HTMLDivElement, HudCardProps>(
  (
    {
      className,
      children,
      cornerColor = "none",
      interactive = false,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative bg-[#0D1316] border border-white/[0.08] rounded-xl transition-all duration-200",
          interactive && "hover:border-white/20 hover:bg-[#11181B] hover:shadow-xl hover:shadow-black/40",
          cornerColor === "red" && "border-t-[#B62C2C]/50",
          cornerColor === "blue" && "border-t-[#0C6791]/60",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

HudCard.displayName = "HudCard";

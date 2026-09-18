import React from "react";
import { cn } from "@/shared/lib/utils";
import { Badge } from "@/shared/ui/badge";

interface SectionHeaderProps {
  badge?: string;
  badgeVariant?: "blue" | "red" | "muted";
  command?: string; // fallback
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  badge,
  badgeVariant = "muted",
  command,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  const displayBadge = badge || (command ? command.replace(/[()_.]/g, " ") : undefined);

  return (
    <div
      className={cn(
        "mb-10 sm:mb-14",
        align === "center" && "text-center mx-auto max-w-3xl",
        className
      )}
    >
      {displayBadge && (
        <div className={cn("mb-3.5", align === "center" ? "flex justify-center" : "")}>
          <Badge variant={badgeVariant}>
            {displayBadge}
          </Badge>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[#E6F1F0] leading-tight max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3.5 text-sm sm:text-base text-[#8B9C9B] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

import React from "react";
import { cn } from "@/shared/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "w-full bg-[#06090A] border border-white/15 px-3.5 py-3 text-sm font-mono text-[#E6F1F0] placeholder:text-[#8B9C9B]/60 transition-colors focus:border-[#B62C2C] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 min-h-[96px] resize-y",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";


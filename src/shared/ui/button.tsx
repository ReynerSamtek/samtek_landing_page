import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B62C2C] disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer rounded-lg",
  {
    variants: {
      variant: {
        primary:
          "bg-[#B62C2C] text-white hover:bg-[#a02626] active:bg-[#8c2121] shadow-lg shadow-[#B62C2C]/20",
        secondary:
          "bg-[#0C6791] text-white hover:bg-[#095375] shadow-lg shadow-[#0C6791]/20",
        outline:
          "border border-white/15 text-[#E6F1F0] hover:bg-white/[0.06] hover:border-white/30",
        outlineRed:
          "border border-[#B62C2C]/60 text-[#E6F1F0] hover:bg-[#B62C2C]/10 hover:border-[#B62C2C]",
        ghost:
          "text-[#8B9C9B] hover:text-[#E6F1F0] hover:bg-white/[0.05]",
      },
      size: {
        sm: "text-xs px-3 py-1.5 gap-1.5",
        md: "text-sm px-4 py-2.5 gap-2",
        lg: "text-base px-6 py-3 gap-2.5 font-semibold",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(buttonVariants({ variant, size, className }), child.props.className),
        ...props,
      });
    }

    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

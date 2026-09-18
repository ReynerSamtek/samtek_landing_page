import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/shared/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium whitespace-nowrap transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer rounded-lg shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[#B62C2C] text-white hover:bg-[#A02424] active:bg-[#8A1E1E] border border-white/15 shadow-[0_1px_2px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.15)] active:scale-[0.99]",
        secondary:
          "bg-[#1A2327] text-[#E6F1F0] hover:bg-[#222E34] hover:text-white border border-white/15 hover:border-white/25 active:bg-[#141C20] shadow-[0_1px_2px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.06)] active:scale-[0.99]",
        outline:
          "bg-[#131B1F] text-[#E6F1F0] hover:bg-[#1B262B] hover:text-white border border-white/20 hover:border-white/30 shadow-sm active:scale-[0.99]",
        ghost:
          "bg-[#101619] text-[#C2D1D0] hover:text-white hover:bg-[#172126] border border-white/10 hover:border-white/20 active:scale-[0.99]",
      },
      size: {
        sm: "text-xs px-3.5 py-2 gap-1.5 h-8",
        md: "text-sm px-4 py-2 gap-2 h-9",
        lg: "text-sm sm:text-base px-5 py-2.5 sm:py-3 gap-2 h-11",
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

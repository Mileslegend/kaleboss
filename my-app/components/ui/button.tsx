import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex upper-case items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-white border-slate-200 border-2 border-b-4 active:border-b-2 hover:bg-slate-100 text-slate-500 text-black uppercase",
        primary:
          "bg-sky-400 text-primary-foreground hover:bg-sky-400/90 border-sky-500 border-b-4 active:border-b-0 text-white font-bold uppercase",
        primaryOutline: "bg-white text-sky-500 hover:bg-slate-100 border-slate-200 border-b-4 uppercase",
        secondary:
          "bg-green-400 text-primary-foreground hover:bg-green-500/90 border-green-600 border-b-4 active:border-b-0 text-white font-bold uppercase",
        secondaryOutline: "bg-white text-green-500 hover:bg-slate-100 border-slate-200 border-b-4 uppercase",
        danger:
          "bg-rose-400 text-primary-foreground hover:bg-rose-500/90 border-rose-600 border-b-4 active:border-b-0 text-white font-bold uppercase",
        dangerOutline: "bg-white text-rose-500 hover:bg-slate-100 border-slate-200 border-b-4 uppercase",
        super:
          "bg-purple-400 text-primary-foreground hover:bg-purple-500/90 border-purple-600 border-b-4 active:border-b-0 text-white font-bold uppercase",
        superOutline: "bg-white text-purple-500 hover:bg-slate-100 border-slate-200 border-b-4 uppercase",
        ghost: "bg-transparent text-slate-500 border-slate-100 border-1 hover:bg-slate-200 uppercase",
        sidebar: "bg-transparent text-sky-500 border-2 border-transparent hover:bg-slate-100 transition-none uppercase",
        sidebarOutline: "bg-sky-500/15 text-sky-500 border-sky-300 border-2 hover:bg-sky-500/20 transition-none uppercase"
      },
      size: {
        default: "h-11 px-4 py-2 ",
        xs: "h-6 gap-1  px-2 text-xs ",
        sm: "h-8 gap-1.5 px-3 ",
        lg: "h-12  px-8 ",
        rounded: "rounded-full",
        icon: "size-9",
        "icon-xs": "size-6 rounded-md [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

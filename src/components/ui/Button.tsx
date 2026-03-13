import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      size = "md",
      children,
      icon,
      ...props
    },
    ref,
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 active:scale-95";

    const variants = {
      primary:
        "bg-gradient-to-r from-sky-600 to-violet-600 hover:from-sky-500 hover:to-violet-500 text-white shadow-lg shadow-sky-500/25",
      secondary: "glass-card hover:bg-white/10 text-white",
      outline:
        "border-2 border-sky-500/50 hover:border-sky-500 text-sky-100 bg-transparent",
      ghost: "hover:bg-white/5 text-slate-300 hover:text-white",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </motion.button>
    );
  },
);

Button.displayName = "Button";

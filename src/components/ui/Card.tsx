import { forwardRef } from "react";
import { motion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";

interface CardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  glow?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", children, glow = false, ...props }, ref) => {
    return (
      <div className="relative group">
        {glow && (
          <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 to-violet-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500" />
        )}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`glass-card p-6 md:p-8 relative ${className}`}
          {...props}
        >
          {children}
        </motion.div>
      </div>
    );
  },
);

Card.displayName = "Card";

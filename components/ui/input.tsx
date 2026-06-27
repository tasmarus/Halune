import * as React from "react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", type = "text", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        className={`w-full rounded-full bg-white/5 text-white placeholder:text-neutral-500 px-4 py-2 outline-none border border-white/10 focus:border-white/20 transition ${className}`}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
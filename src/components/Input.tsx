import { Fragment } from "react";
import ErrorMessage from "./ErrorMessage";
import { cn } from "@/utils/cn";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  helperText?: string;
}

export default function Input({
  className,
  helperText,
  type = "text",
  error = false,
  ...props
}: InputProps) {
  return (
    <Fragment>
      <input
        type={type}
        className={cn(
          "w-full px-4 py-3 border border-neutral-200 rounded-xl text-[#64748B] focus:outline-none placeholder:text-[#64748B] focus:ring-1 focus:ring-neutral-200",
          className,
          { "border-[#DB0416] focus:ring-[#DB0416]": error }
        )}
        {...props}
      />

      {helperText && <ErrorMessage>{helperText}</ErrorMessage>}
    </Fragment>
  );
}

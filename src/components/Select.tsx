import { Fragment } from "react";
import { cn } from "@/utils/cn";

interface Option {
  id: number;
  title: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  helperText?: string;
  options: Option[];
}

export default function Select({ error, className, helperText, options, ...props }: SelectProps) {
  return (
    <Fragment>
      <div className="relative">
        <select
          id="jobTitle"
          className={cn(
            "w-full px-4 py-3 border text-[#64748B] border-neutral-200 rounded-xl focus:outline-none focus:ring-1 focus:ring-neutral-200 appearance-none",
            className,
            { "border-[#DB0416] focus:ring-[#DB0416]": error }
          )}
          {...props}>
          <option value="">Select a job title</option>

          {options.map((option) => (
            <option key={option.id} value={option.value}>
              {option.title}
            </option>
          ))}
        </select>

        <svg
          width="17"
          height="11"
          viewBox="0 0 17 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-500">
          <path
            d="M16.068 1.39844L9.62723 8.91264C9.22813 9.37825 8.50781 9.37825 8.10871 8.91264L1.66797 1.39844"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {helperText && <p className="text-sm mt-2 text-[#DB0416]">{helperText}</p>}
    </Fragment>
  );
}

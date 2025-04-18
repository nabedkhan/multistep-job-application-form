import { cn } from "@/utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  loading?: boolean;
}

export default function Button({ children, disabled, className, loading, ...props }: ButtonProps) {
  const loadingSpinner = (
    <div className="flex items-center gap-2">
      <span className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
      <span className="text-xs">Loading...</span>
    </div>
  );

  return (
    <button
      disabled={loading || disabled}
      className={cn(
        "relative flex font-medium items-center gap-3 px-5 py-3 bg-primary text-white rounded-[10px] hover:bg-primary/80 transition-colors",
        className
      )}
      {...props}>
      {loading ? loadingSpinner : children}
    </button>
  );
}

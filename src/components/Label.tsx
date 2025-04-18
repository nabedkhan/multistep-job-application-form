import { cn } from "@/utils/cn";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Label({ children, className, ...props }: LabelProps) {
  return (
    <label className={cn("block text-sm font-semibold mb-2", className)} {...props}>
      {children}
    </label>
  );
}

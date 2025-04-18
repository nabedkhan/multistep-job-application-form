import { cn } from "@/utils/cn";

interface TabProps {
  name: string;
  title: string;
  activeTab: string;
  className?: string;
  handleChangeTab: (tab: string) => void;
}

export default function Tab({ handleChangeTab, activeTab, title, name, className }: TabProps) {
  return (
    <button
      type="button"
      className={cn("font-medium pb-3 relative", className, {
        "text-primary": activeTab === name
      })}
      onClick={() => handleChangeTab(name)}>
      <span>{title}</span>
      {activeTab === name && (
        <div className="absolute -bottom-[2px] rounded-full left-0 w-full h-1 bg-primary" />
      )}
    </button>
  );
}

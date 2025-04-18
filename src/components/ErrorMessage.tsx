import { PropsWithChildren } from "react";

export default function ErrorMessage({ children }: PropsWithChildren) {
  return <p className="text-sm mt-2 text-[#DB0416]">{children}</p>;
}

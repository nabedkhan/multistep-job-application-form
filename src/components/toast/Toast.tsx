"use client";

import { toast as sonnerToast } from "sonner";
import { SuccessToast } from "./SuccessToast";
import { ToastProps } from "./types";

export default function toast({ title, description, onClose }: ToastProps) {
  return sonnerToast.custom(
    (t) => (
      <SuccessToast
        title={title}
        description={description}
        onDismiss={() => {
          sonnerToast.dismiss(t);
          onClose?.();
        }}
      />
    ),
    {
      onAutoClose() {
        onClose?.();
      }
    }
  );
}

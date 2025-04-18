export interface ToastProps {
  title: string;
  description: string;
  onClose?: () => void;
}

export interface SuccessToastProps extends ToastProps {
  onDismiss: () => void;
}

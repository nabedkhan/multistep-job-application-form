import { SuccessToastProps } from "./types";

export function SuccessToast({ title, description, onDismiss }: SuccessToastProps) {
  return (
    <div className="bg-white rounded-2xl shadow-[0_8px_24px_0_rgba(0,0,0,0.1)] p-4 max-w-sm flex items-start gap-3 border border-neutral-200">
      <div className="bg-[#14a273] text-white rounded-[5px] p-1 w-6 h-6 flex items-center justify-center">
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M9.41752 2.35914C8.6576 1.91956 7.77534 1.66797 6.83434 1.66797C3.98103 1.66797 1.66797 3.98103 1.66797 6.83434C1.66797 9.68762 3.98103 12.0007 6.83434 12.0007C9.68762 12.0007 12.0007 9.68762 12.0007 6.83434C12.0007 6.48049 11.9651 6.13491 11.8974 5.80106"
            stroke="white"
            strokeLinecap="round"
          />
          <path
            d="M4.76953 7.09353C4.76953 7.09353 5.54449 7.09353 6.57776 8.90175C6.57776 8.90175 9.44964 4.16592 12.0024 3.21875"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="flex-1">
        <h4 className="text-sm font-semibold leading-none">{title}</h4>
        <p className="text-sm font-normal text-neutral-500 mt-1">{description}</p>
      </div>

      <button type="button" className="text-[#64748b] hover:text-[#334155]" onClick={onDismiss}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.67096 0.610293C1.37806 0.317403 0.90319 0.317403 0.610293 0.610293C0.317402 0.90319 0.317402 1.37806 0.610293 1.67096L4.94133 6.00198L0.610338 10.333C0.317448 10.6259 0.317448 11.1008 0.610338 11.3937C0.903235 11.6865 1.3781 11.6865 1.67099 11.3937L6.00198 7.06263L10.333 11.3937C10.6259 11.6865 11.1008 11.6865 11.3937 11.3937C11.6865 11.1008 11.6865 10.6259 11.3937 10.333L7.06263 6.00198L11.3937 1.67096C11.6866 1.37806 11.6866 0.90319 11.3937 0.610293C11.1009 0.317403 10.626 0.317403 10.3331 0.610293L6.00198 4.94133L1.67096 0.610293Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  );
}

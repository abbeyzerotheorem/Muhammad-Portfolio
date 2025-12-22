import { cn } from "@/lib/utils";

export const KnightHelmetIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("w-6 h-6", className)}
  >
    <path d="M12 2a5 5 0 0 0-5 5v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a5 5 0 0 0-5-5z" />
    <path d="M12 13h.01" />
    <path d="M12 13v8" />
    <path d="M18 13a6 6 0 0 1-6 6" />
    <path d="M6 13a6 6 0 0 0 6 6" />
  </svg>
);

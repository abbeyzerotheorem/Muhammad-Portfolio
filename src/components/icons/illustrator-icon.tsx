import { cn } from "@/lib/utils";

export const IllustratorIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-6 h-6", className)}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5h-1.5V9h1.5v7.5zm3.5-5.25L13.1 9H11.5v7.5h1.5v-4.2l1.4 2.3h1.6V9h-1.5v2.25z" />
  </svg>
);

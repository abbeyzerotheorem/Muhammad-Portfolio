import { cn } from "@/lib/utils";

export const PhotoshopIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-6 h-6", className)}
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.32 14.71h-1.64l-.53-1.61h-2.26l-.53 1.61H8.68l2.67-7.42h1.31l2.66 7.42zM11.63 12.2l-.84-2.52-.84 2.52h1.68z" />
  </svg>
);

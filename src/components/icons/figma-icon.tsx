import { cn } from "@/lib/utils";

export const FigmaIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("w-6 h-6", className)}
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.03 5.43h2.06v2.06h-2.06V7.43zm0 4.12h2.06v2.06h-2.06v-2.06zm-2.06 0h2.06v2.06H8.91v-2.06zm0-4.12h2.06v2.06H8.91V7.43zm4.12 6.18h2.06v2.06h-2.06v-2.06zm0-4.12h2.06v2.06h-2.06v-2.06z" />
  </svg>
);

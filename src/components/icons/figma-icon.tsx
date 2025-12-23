import Image from 'next/image';

export const FigmaIcon = ({ className }: { className?: string }) => (
  <Image 
    width="48" 
    height="48" 
    src="https://img.icons8.com/material-outlined/48/00FF88/figma--v1.png" 
    alt="adobe-photoshop"
    className={className}
    unoptimized
  />
);

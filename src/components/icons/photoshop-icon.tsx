import Image from 'next/image';

export const PhotoshopIcon = ({ className }: { className?: string }) => (
  <Image 
    width="48" 
    height="48" 
    src="https://img.icons8.com/material-outlined/48/00FF88/adobe-photoshop.png" 
    alt="adobe-photoshop"
    className={className}
    unoptimized
  />
);

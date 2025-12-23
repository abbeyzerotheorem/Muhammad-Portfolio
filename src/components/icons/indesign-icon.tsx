import Image from 'next/image';

export const IndesignIcon = ({ className }: { className?: string }) => (
  <Image 
    width="48" 
    height="48" 
    src="https://img.icons8.com/48/00FF88/adobe-indesign--v1.png" 
    alt="adobe-photoshop"
    className={className}
    unoptimized
  />
);

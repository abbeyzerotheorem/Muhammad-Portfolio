import Image from 'next/image';

export const IllustratorIcon = ({ className }: { className?: string }) => (
  <Image 
    width="48" 
    height="48" 
    src="https://img.icons8.com/00FF88/48/adobe-illustrator--v1.png" alt="adobe-illustrator--v1" 
    className={className}
    unoptimized
  />
);

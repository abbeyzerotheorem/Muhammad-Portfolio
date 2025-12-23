import Image from 'next/image';

export const BlenderIcon = ({ className }: { className?: string }) => (
  <Image 
    width="48" 
    height="48" 
    src="https://img.icons8.com/ios-filled/48/00FF88/blender-3d.png" 
    alt="adobe-photoshop"
    className={className}
    unoptimized
  />
);

export const setupResizeListener = (setIsDesktop: React.Dispatch<React.SetStateAction<boolean>>) => {
  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
};

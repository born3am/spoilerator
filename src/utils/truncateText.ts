export const truncateText = (text: string, maxChars: number = 150): string => {
  if (text.length <= maxChars) {
    return text;
  }
  return text.slice(0, maxChars) + '...';
};
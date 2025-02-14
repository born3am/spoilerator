export const truncateText = (text: string, maxChars: number = 200): string => {
  if (text.length <= maxChars) {
    return text;
  }
  return text.slice(0, maxChars) + '...';
};
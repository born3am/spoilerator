export const extractYearFromDate = (releaseDate: string): number | null => {
  const date = new Date(releaseDate);
  if (isNaN(date.getTime())) {
    return null;
  }
  return date.getFullYear();
};

export default function calculateYearDifference(date: Date): number {
  const currentDate = new Date();

  const yearDiff = currentDate.getFullYear() - date.getFullYear();
  const monthDiff = currentDate.getMonth() - date.getMonth();
  const dayDiff = currentDate.getDate() - date.getDate(); 

  // Check if the second date is earlier in the year than the first date
  if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
    return yearDiff - 1;
  }
  
  return yearDiff;
}
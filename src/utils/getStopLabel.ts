export const getStopLabel = (stop: number): string => {
  if (stop === 0) return "Без пересадок";
  const lastDigit = stop % 10;
  const lastTwoDigits = stop % 100;
  if (lastTwoDigits >= 11 && lastTwoDigits <= 14) {
    return `${stop} пересадок`;
  }
  if (lastDigit === 1) {
    return `${stop} пересадка`;
  }
  if (lastDigit >= 2 && lastDigit <= 4) {
    return `${stop} пересадки`;
  }
  return `${stop} пересадок`;
};
export function resolveNextAmount(amount: string, key: string) {
  const parts = amount.split('.');

  const isTypingNumber = key !== '.' && key !== 'DELETE';
  const exceededDigitsWithDecimals = parts.length === 2 && amount.length === 12;
  const exceededDigitsWithoutDecimals = parts.length === 1 && amount.length === 9;
  const exceededDigits = exceededDigitsWithDecimals || exceededDigitsWithoutDecimals;

  if (isTypingNumber && exceededDigits) {
    return amount;
  }

  if (key === 'DELETE') {
    return amount.slice(0, -1);
  }

  const canTypeBeforeDecimals = parts.length === 1;
  const canTypeAfterDecimals = parts.length > 1 && parts[1].length < 2 && key !== '0';

  if (canTypeAfterDecimals || canTypeBeforeDecimals) {
    return `${amount}${key}`;
  }

  return amount;
}

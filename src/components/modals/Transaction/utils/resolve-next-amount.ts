export default function resolveNextAmount(amount: string, key: string) {
  if (key === 'DELETE') {
    return amount.slice(0, -1);
  }

  const parts = amount.split('.');
  const canTypeBeforeDecimals = parts.length === 1;
  const canTypeAfterDecimals = parts.length > 1 && parts[1].length < 2 && key !== '0';

  if (canTypeAfterDecimals || canTypeBeforeDecimals) {
    return `${amount}${key}`;
  }

  return amount;
}

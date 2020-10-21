export function formatCurrency(number: number | string) {
  const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  return currencyFormatter.format(parseFloat(number as any) || 0);
}

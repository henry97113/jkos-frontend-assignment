export function formatCurrency(num: number) {
  return `$${num.toLocaleString('en-US')}`;
}

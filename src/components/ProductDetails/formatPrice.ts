import { formatCurrency } from '@/helpers/currency';

export function formatPrice(min: number, max: number) {
  let res = formatCurrency(min);

  if (min < max) {
    res += ` - ${formatCurrency(max)}`;
  }

  return res;
}

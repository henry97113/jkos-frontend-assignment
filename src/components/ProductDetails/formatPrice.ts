function formatNumber(num: number) {
  return `$${num.toLocaleString('en-US')}`;
}
function formatPrice(min: number, max: number) {
  let res = formatNumber(min);

  if (min < max) {
    res += ` - ${formatNumber(max)}`;
  }

  return res;
}

export { formatPrice };

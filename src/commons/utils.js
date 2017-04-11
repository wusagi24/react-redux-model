function baseComparator(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

export function strComparator(a, b) {
  const strA = (typeof a === 'number') ? a.toString() : a;
  const strB = (typeof b === 'number') ? b.toString() : b;
  return baseComparator(strA, strB);
}

export function intComparator(a, b) {
  const intA = (typeof a === 'string') ? parseInt(a, 10) : a;
  const intB = (typeof b === 'string') ? parseInt(b, 10) : b;
  return baseComparator(intA, intB);
}

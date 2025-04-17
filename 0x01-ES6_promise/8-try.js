export default function divideFunction(numerator, denominator) {
  if (denominator === 0) throw Error('cannot divide by zero');
  return numerator / denominator;
}

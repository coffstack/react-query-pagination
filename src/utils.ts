export function getArrayOfNumbers(start: number, end: number) {
  const array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

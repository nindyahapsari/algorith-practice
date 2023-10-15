export function binarySearch(arr: number[], target: number): number {
  if (arr.length === 0) return -1;

  let low: number = 0;
  let high: number = arr.length - 1;

  while (low <= high) {
    let middle = Math.floor((high + low) / 2);

    if (arr[middle] < target) {
      low = middle + 1;
    } else if (arr[middle] > target) {
      high = middle - 1;
    } else {
      return middle;
    }
  }

  return -1;
}

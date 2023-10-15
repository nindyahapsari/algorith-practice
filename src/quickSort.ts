function partition(arr: number[], low: number, high: number): number {
  let pivot: number = arr[low];
  let leftwall: number = low + 1;

  for (let i: number = low + 1; i <= high; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[leftwall]] = [arr[leftwall], arr[i]];
      leftwall++;
    }
  }

  [arr[low], arr[leftwall - 1]] = [arr[leftwall - 1], arr[low]];

  return leftwall - 1;
}

export function quickSort(arr: number[], low: number, high: number): number[] {
  if (low < high) {
    let pivotLocation: number = partition(arr, low, high);

    quickSort(arr, low, pivotLocation - 1);
    quickSort(arr, pivotLocation + 1, high);
  }

  return arr;
}

function merge(left: number[], right: number[]): number[] {
  let result: number[] = [];
  let leftIdx: number = 0;
  let rightIdx: number = 0;

  while (leftIdx < left.length && rightIdx < right.length) {
    if (left[leftIdx] < right[rightIdx]) {
      result.push(left[leftIdx]);
      leftIdx++;
    } else {
      result.push(right[rightIdx]);
      rightIdx++;
    }
  }

  return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}

function mergeSort(arr: number[]): number[] {
  if (arr.length === 1) return arr;

  let halves: number = Math.floor(arr.length / 2);
  const left: number[] = arr.slice(0, halves);
  const right: number[] = arr.slice(halves);

  return merge(mergeSort(left), mergeSort(right));
}

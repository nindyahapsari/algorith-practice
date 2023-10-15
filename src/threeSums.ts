export function threeSum(arr: number[]): number[][] {
  const sortedArr = arr.sort((a, b) => a - b);

  const result: number[][] = [];

  for (let firstPointer = 0; firstPointer < sortedArr.length; firstPointer++) {
    if (sortedArr[firstPointer] > 0) break;
    if (
      firstPointer > 0 &&
      sortedArr[firstPointer] === sortedArr[firstPointer - 1]
    )
      continue;

    let secondPointer: number = firstPointer + 1;
    let thirdPointer: number = sortedArr.length - 1;

    while (secondPointer < thirdPointer) {
      let sum: number =
        sortedArr[firstPointer] +
        sortedArr[secondPointer] +
        sortedArr[thirdPointer];

      if (sum === 0) {
        result.push([
          sortedArr[firstPointer],
          sortedArr[secondPointer],
          sortedArr[thirdPointer]
        ]);
        while (
          secondPointer < thirdPointer &&
          sortedArr[secondPointer] === sortedArr[secondPointer + 1]
        ) {
          secondPointer++;
        }
        while (
          secondPointer < thirdPointer &&
          sortedArr[thirdPointer] === sortedArr[thirdPointer - 1]
        ) {
          thirdPointer--;
        }

        secondPointer++;
        thirdPointer--;
      } else if (sum < 0) {
        secondPointer++;
      } else {
        thirdPointer--;
      }
    }
  }

  return result;
}

export function mergeIntevals(arr: number[][]): number[][] {
  if (arr.length === 0) return [];

  const sortedIntervals = arr.sort((a, b) => a[0] - b[0]);

  const merged: number[][] = [sortedIntervals[0]];

  for (let i: number = 0; i <= sortedIntervals.length - 1; i++) {
    const currentIntevals = sortedIntervals[i];
    const lastMergedInterval = merged[merged.length - 1];

    if (currentIntevals[0] > lastMergedInterval[1]) {
      merged.push(currentIntevals);
    } else {
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentIntevals[1]
      );
    }
  }
}

export function peakElement(nums: number[]): number {
  // using binary search approach but with modification

  if (nums.length === 0) return 0;

  let left: number = 0;
  let right: number = nums.length - 1;

  while (left < right) {
    let mid: number = Math.floor((left + right) / 2);

    if (nums[mid] < nums[mid + 1]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  // return index
  return left;
}

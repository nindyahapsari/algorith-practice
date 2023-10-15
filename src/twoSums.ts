export function twoSums(nums: number[], target: number): number[] {
  console.log("TwoSums");
  let firstPointer: number;
  let secondPointer: number;

  for (let i: number = 0; i < nums.length; i++) {
    firstPointer = i;
    secondPointer = i + 1;

    if (nums[firstPointer] + nums[secondPointer] === target) {
      return [firstPointer, secondPointer];
    }
  }

  return [];
}

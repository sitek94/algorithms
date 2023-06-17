function majorityElement(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let first = nums[0];
  let middle = nums[Math.floor(nums.length / 2)];
  let last = nums[nums.length - 1];

  if (first === middle) return first;
  if (last === middle) return last;
  return middle;
};
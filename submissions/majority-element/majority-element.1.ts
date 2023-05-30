function majorityElement(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let middle = nums[Math.floor(nums.length / 2)];

  return middle;
};
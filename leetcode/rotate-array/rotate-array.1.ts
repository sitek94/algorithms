/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  if (nums.length < k) {
    k = k % nums.length  
  }

  nums.unshift(...nums.splice(nums.length - k, k))
};
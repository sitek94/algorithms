function removeElement(nums: number[], val: number): number {
  let k = 0
  let length = nums.length
  for (let i = 0; i < length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1)
      i--
    } else {
      k++
    }
  }
  return k
}
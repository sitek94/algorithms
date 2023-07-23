function removeDuplicates(nums: number[]): number {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            delete nums[i];
        } else {
            k++;
        }
    }
    nums.sort((a,b) => a - b);
    return k;
};
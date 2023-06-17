/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(output: number[], m: number, right: number[], n: number): void {
    const left = output.slice(0, m);
    
    let leftIndex = 0;
    let rightIndex = 0;
    
    for (let i = 0; i < m + n; i++) {
        const leftValue = left[leftIndex];
        const rightValue = right[rightIndex];

        if (leftValue === undefined) {
            output[i] = rightValue;
            rightIndex++;
        } else if (rightValue === undefined) {
            output[i] = leftValue;
            leftIndex++;
        } else if (leftValue === rightValue) {
            output[i] = leftValue;
            output[++i] = leftValue;
            leftIndex++
            rightIndex++
        } else if (leftValue < rightValue) {
            output[i] = leftValue;
            leftIndex++;
        } else if (rightValue < leftValue) {
            output[i] = rightValue;
            rightIndex++;
        }
    }
};
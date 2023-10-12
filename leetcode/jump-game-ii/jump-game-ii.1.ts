function jump(nums: number[]): number {
  let jumps = 0
  let position = 0
  let lastPosition = nums.length - 1

  while (position < lastPosition) {
    let currentJumpValue = nums[position]

    if (position + currentJumpValue >= lastPosition) {
      return ++jumps
    }

    let currentPossibleJumpPosition = position + 1 + currentJumpValue
    let newPosition = null

    for (let i = position + 1; i < position + 1 + currentJumpValue; i++) {
      let newJumpValue = nums[i]
      let newPossibleJumpPosition = i + newJumpValue

      if (newPossibleJumpPosition >= currentPossibleJumpPosition) {
        newPosition = i
        currentPossibleJumpPosition = newPossibleJumpPosition
      }
    }

    if (newPosition) {
      position = newPosition
    } else {
      position += currentJumpValue
    }

    jumps++
  }

  return jumps
}
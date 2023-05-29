function isPalindrome(s: string): boolean {
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '')

  if (s === "") {
    return true
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left++] !== s[right--]) {
      return false;
    }
  }

  return true;
};
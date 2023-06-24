"""
Questions:
- Is permuation case sensitive, e.g. is "God" permuation of "dog"
- Is whitespace significant?
"""

import _utils
from collections import Counter


# Time: O(n log n + m log m)
def check_permutations(s1, s2):
    return sorted(s1) == sorted(s2)


# Time: O(n + m)
def check_permutations2(s1, s2):
    chars_1 = {}
    chars_2 = {}

    for char in s1:
        chars_1[char] = chars_1.get(char, 0) + 1

    for char in s2:
        chars_2[char] = chars_2.get(char, 0) + 1

    return chars_1 == chars_2


# Time: O(n + m) - same as above but using built-in `Counter`
def check_permutations22(s1, s2):
    return Counter(s1) == Counter(s2)


# Adapted example from the book
# Assumption: ASCII
def check_permutations222(s1, s2):
    if len(s1) != len(s2):
        return False

    letters = [0] * 128

    for char in s1:
        letters[ord(char)] += 1

    for char in s2:
        letters[ord(char)] -= 1
        if letters[ord(char)] < 0:
            return False

    return True


_utils.test(
    [
        check_permutations,
        check_permutations2,
        check_permutations22,
        check_permutations222,
    ],
    [
        ("abc", "cba", True),
        ("abc", "def", False),
        ("abc", "abcd", False),
        ("", "", True),
        ("a", "a", True),
        ("a", "b", False),
        ("ab", "ba", True),
        ("abcd", "dcba", True),
    ],
)

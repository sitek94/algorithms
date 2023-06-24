import _utils
from collections import Counter


# Time: O(n log n + m log m)
def check_permuations(s1, s2):
    return sorted(s1) == sorted(s2)


# Time: O(n + m)
def check_permuations2(s1, s2):
    chars_1 = {}
    chars_2 = {}

    for char in s1:
        chars_1[char] = chars_1.get(char, 0) + 1

    for char in s2:
        chars_2[char] = chars_2.get(char, 0) + 1

    return chars_1 == chars_2


# Time: O(n + m) - same as above but using built-in `Counter`
def check_permuations22(s1, s2):
    return Counter(s1) == Counter(s2)


_utils.test(
    [check_permuations, check_permuations2, check_permuations22],
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

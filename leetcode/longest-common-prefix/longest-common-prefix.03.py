class Solution(object):
    def longestCommonPrefix(self, strs):
        """
        :type strs: List[str]
        :rtype: str
        """
        prefix = ""
        current = ""

        for letter_index in range(200):
            for j, string in enumerate(strs):
                is_first_string = j == 0

                if letter_index > len(string) - 1:
                    return prefix

                elif is_first_string:
                    current = string[letter_index]

                elif current != string[letter_index]:
                    return prefix

            prefix += current
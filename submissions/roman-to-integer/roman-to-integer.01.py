class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """

        roman_to_int = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}

        result = 0
        i = 0

        while i < len(s):
            current_val = roman_to_int[s[i]]
            
            # Check if there's a next character and get its value if it exists
            if i < len(s) - 1:
                next_val = roman_to_int[s[i+1]]
            else:
                next_val = 0  # No next character

            if current_val < next_val:
                result += next_val - current_val
                i += 1  # Skip the next character
            else:
                result += current_val

            i += 1  # Move to the next character

        return result
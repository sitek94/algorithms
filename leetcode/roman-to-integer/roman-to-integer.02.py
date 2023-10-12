class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """

        DICT = {
            "I": 1,
            "IV": 4,
            "V": 5,
            "IX": 9,
            "X": 10,
            "XL": 40,
            "L": 50,
            "XC": 90,
            "C": 100,
            "CD": 400,
            "D": 500,
            "CM": 900,
            "M": 1000
        }

        result = 0
        current = ""

        for letter in s:
            if current + letter in DICT:
                current += letter
            else:
                result += DICT[current]
                current = letter

        result += DICT[current]

        return result
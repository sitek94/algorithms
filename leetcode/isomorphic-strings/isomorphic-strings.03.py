class Solution(object):
    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """

        """
        "title" -> "01034"
        "paper" -> "01034"
        
        "foo" -> "011"
        "bar" -> "012"
        """
        def parse(s):
            ids = {}
            result = ""

            for i, char in enumerate(s):
                value = ids.setdefault(char, str(i))
                result += " " + value

            return result

        return parse(s) == parse(t)
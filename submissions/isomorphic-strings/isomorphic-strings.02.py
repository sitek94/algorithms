class Solution(object):
    def isIsomorphic(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """

        """
        "title" -> "0 1 0 3 4"
        "paper" -> "0 1 0 3 4"
        
        "foo" -> "0 1 1"
        "bar" -> "0 1 2"
        """
        def parse(s):
            ids = {}
            result = ""

            for i, char in enumerate(s):
                value = ids.setdefault(char, str(i))
                result += " " + value

            return result

        return parse(s) == parse(t)
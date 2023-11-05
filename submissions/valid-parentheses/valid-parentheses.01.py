class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """
        MAP = {"(": ")", "[": "]", "{": "}"}
        stack = []
        
        for p in s:
            if p in "([{":
                stack.append(p)
            else:
                if stack and p == MAP.get(stack[-1]):
                    stack.pop()
                else:
                    return False

        return not stack
class Solution(object):
    def isValid(self, s):
        """
        :type s: str
        :rtype: bool
        """

        MAP = {"(": ")", "[": "]", "{": "}"}

        memory = ""

        for p in s:
            if memory == "":
                memory = p

            # Is opening
            elif p in "([{":
                memory = memory + p

            # Is closing
            else:
                # Is matching
                if MAP.get(memory[-1]) == p:
                    memory = memory[:-1]

                else:
                    return False

        return memory == ""
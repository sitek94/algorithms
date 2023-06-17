class Solution(object):
    def isSubsequence(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        """

        left = right = 0

        if s == "":
          return True

        while right < len(t):

          if s[left] == t[right]:
            left = left + 1

            if left == len(s):
              return True
          
          right = right + 1

        return False
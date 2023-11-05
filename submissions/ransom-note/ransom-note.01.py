class Solution(object):
    def canConstruct(self, ransomNote, magazine):
        """
        :type ransomNote: str
        :type magazine: str
        :rtype: bool
        """
        for char in magazine:
            if char in ransomNote:
                ransomNote = ransomNote.replace(char, "", 1)

            if not ransomNote:
                return True

        return False
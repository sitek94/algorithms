class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        haystack_index = 0
        needle_index = 0
        
        # Iterate through the haystack until the end minus the length of the needle
        while haystack_index < len(haystack):

            # If the characters at the current indices of haystack and needle match
            if haystack[haystack_index] == needle[needle_index]:
                
                # We reached the end of the needle so we found it!
                # W can return its start position.
                if needle_index == len(needle) - 1:
                    return haystack_index - needle_index
                
                # Otherwise, move to the next character in the needle.
                needle_index += 1

            else:
                # If the characters do not match, reset the haystack index to where we started matching 
                # the current needle and reset the needle index to 0.
                haystack_index -= needle_index
                needle_index = 0

            # Move to the next character in the haystack            
            haystack_index += 1

        # Not found
        return -1
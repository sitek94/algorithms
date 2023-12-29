import re

"""
# Task:
Given a string, write a function to check if it is a permutation of a palindrome.

is_palindrome_permutation(string)

# Things to consider / ask interviewer
    - Examples when string is a permutation of palindrome
        TRUE: "Tact Coa" —> "atco cta"
        FALSE: "Taco Bello"
    - ignore casing? Yes
    - ignore non-letter characters (numbers as well)? Yes

# Idea
Observation: If more than one letter is odd (doesn't have a pair) it means that 
the string can't be a palindrome.

    1. Remove whitespace and make it lowercase
    2. Count occurrence of each letter
    3. Check if more than one occurrence is odd - if yes it can't be a palindrome
"""


def is_palindrome_permutation(string):
    normalized_string = re.sub(r"[^a-zA-Z]", "", string).lower()

    occurrences = {}

    for char in normalized_string:
        occurrences[char] = occurrences.get(char, 0) + 1

    has_odd = False

    for value in occurrences.values():
        if value % 2 == 1:
            if has_odd:
                return False

            has_odd = True

    return True


# Optimized space complexity from O(n) to O(1)
def is_palindrome_permutation2(string: str):
    occurrences = {}

    for char in string:
        if char.isalpha():
            lower_char = char.lower()

            occurrences[lower_char] = occurrences.get(lower_char, 0) + 1

    has_odd = False

    for value in occurrences.values():
        if value % 2 == 1:
            if has_odd:
                return False

            has_odd = True

    return True


"""
# Big O

Time: O(n) = O(n) + O(n) + O(number of letters)
Space: O(n) = O(n) + O(number of letters) 
"""

assert is_palindrome_permutation("Tact Coa") == True
assert is_palindrome_permutation("Taco Bello") == False
assert is_palindrome_permutation("A man a plan a canal Panama") == True
assert is_palindrome_permutation("Was it a car or a cat I saw?") == True
assert is_palindrome_permutation("No 'x' in Nixon") == True
assert is_palindrome_permutation("Not a palindrome permutation") == False


"""
Analysis with AI

1. AI: You've chosen to build the code around an interesting observation that "If more than one letter is odd, it doesn't have a pair". Could you please explain your thought process behind this?
   Me: Palindrome is a word that is the same forwards and backwards. In other words it's first half is a mirror of second half. Therefore there can be only one odd letter (or none). If there is such letter it would be in the middle of palindrome.

2. AI: In the part of the code where you normalize the string by removing special characters and converting it to lower case -- is there a specific reason you chose to do so?
   Me: I'm doing that because it's specified in the task that I non-letter characters and casing can be ignored

3. AI: You've used a dictionary (occurrences) to store the count of each character in the string. Could you explain why you chose a dictionary? Was there any specific benefits that came with it?
   Me: I think the main benefit is that the size of the dictionary is going to be maximum number of letters, so O(1)

4. AI: In the part where you check for odd counts, there are conditional branches. Could you explain their purpose and how they help ascertain whether the string can be a palindrome or not?
   Me: We can allow only one letter with odd count. So the second one we see we return immediately because it can't be a palindrome

5. Related to space and time complexity:
   AI: (Space) You've mentioned the space complexity to be O(n) because of the input string and the dictionary. Are there any ways you can think of for optimizing the space complexity or is this the most optimal in your opinion?
   Me: Actually I can optimize it. I don't need to create normalized string. I can add char to occurrences only if it's alpha(), and then make it lowercase. This way space complexity will be O(1), because there is finite number of alphabetical characters. See optimized version : is_palindrome_permutation2

   AI: (Time) You've observed the time complexity.
   Me: Yeah, I don't think there is a way to make it faster.
"""

# Time: O(n)
# Space: O(n)
def has_all_unique_chars(string):
    chars_so_far = []

    for char in string:
        if char in chars_so_far:
            return False
        else:
            chars_so_far.append(char)

    return True


assert has_all_unique_chars("abcdefghijk") == True
assert has_all_unique_chars("abcdefghijka") == False


# What if you can't use additional data structure?


# Time: O(n^2)
# Space: O(1)
def has_all_unique_chars2(string):
    i = 0
    while i < len(string):
        j = i + 1

        while j < len(string):
            if string[i] == string[j]:
                return False

            j += 1

        i += 1

    return True


assert has_all_unique_chars2("abcdefghijk") == True
assert has_all_unique_chars2("abcdefghijka") == False

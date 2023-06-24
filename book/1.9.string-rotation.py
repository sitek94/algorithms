def is_substring(a, b):
    """
    "waterbottle" is a rotation of "erbottlewat"
    """
    return a in b + b


assert is_substring("waterbottle", "erbottlewat") == True
assert is_substring("hello", "lohel") == True
assert is_substring("world", "rldwo") == True
assert is_substring("python", "onpyth") == True
assert is_substring("algorithm", "ithmalgor") == True
assert is_substring("programming", "mingprogra") == False
assert is_substring("developer", "loperdev") == False

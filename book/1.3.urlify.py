def replace_spaces(s, true_length):
    number_of_spaces = count_chars(s, " ", 0, true_length)

    old_index = true_length - 1
    new_index = old_index + number_of_spaces * 2

    while old_index > 0:
        if s[old_index] != " ":
            s[new_index] = s[old_index]
            new_index -= 1
        else:
            s[new_index] = "0"
            s[new_index - 1] = "2"
            s[new_index - 2] = "%"
            new_index -= 3

        old_index -= 1

    return "".join(s)


def count_chars(s, char, start, end):
    count = 0
    for i, c in enumerate(s):
        if i >= start and i < end and c == char:
            count += 1
    return count


assert replace_spaces(list("Mr John Smith    "), 13) == "Mr%20John%20Smith"

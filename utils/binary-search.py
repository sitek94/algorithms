def binary_search(numbers, target):
    if not numbers:
        return None

    left = 0
    right = len(numbers) - 1

    while left != right:
        index = (left + right) // 2
        middle = numbers[index]

        if middle == target:
            return index

        elif middle > target:
            right = middle - 1

        else:
            left = middle

    return left if numbers[left] == target else None


def test_binary_search():
    # Test case 1: Search for value in list
    assert binary_search([1, 2, 3, 4, 5], 3) == 2

    # Test case 2: Search for value not in list
    assert binary_search([1, 2, 3, 4, 5], 6) == None

    # Test case 3: Search for value in empty list
    assert binary_search([], 1) == None

    # Test case 4: Search for value in list of length 1
    assert binary_search([1], 1) == 0

    # Test case 5: Search for value in list of length 2
    assert binary_search([1, 2], 2) == 1

    # Test case 6: Search for value in list of length 3
    assert binary_search([1, 2, 3], 3) == 2

    # Test case 7: Search for value in list of length 4
    assert binary_search([1, 2, 3, 4], 4) == 3

    # Test case 8: Search for value in list of length 5
    assert binary_search([1, 2, 3, 4, 5], 5) == 4

    # Test case 9: Search for value in list of length 6
    assert binary_search([1, 2, 3, 4, 5, 6], 6) == 5

    # Test case 10: Search for value in list of length 7
    assert binary_search([1, 2, 3, 4, 5, 6, 7], 7) == 6

    print("All test cases pass")


test_binary_search()

# Print all powers of 2 from 1 to n
def powersOf2(n):
    if n < 1:
        print(0)
        return 0

    if n == 1:
        print(1)
        return 1

    previous = powersOf2(n // 2)
    current = previous * 2
    print(current)
    return current


powersOf2(50)

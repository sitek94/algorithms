def fib(n):
    if n == 0:
        return 0

    if n == 1:
        return 1

    return fib(n - 1) + fib(n - 2)


# Print all Fibonacci numbers
def allFib(n):
    for i in range(n):
        print(fib(i))


# Cached
def memoizedAllFib(n):
    memo = {}

    def fib(n):
        if n in memo:
            return memo[n]

        memo[n] = 0 if n == 0 else 1 if n == 1 else fib(n - 1) + fib(n - 2)

        return memo[n]

    for i in range(n):
        print(fib(i))


def benchmark(fn, args):
    import time

    start_time = time.time()

    fn(args)

    end_time = time.time()

    print(f"Time taken: {end_time - start_time} seconds")


n = 15

benchmark(memoizedAllFib, n)
benchmark(allFib, n)

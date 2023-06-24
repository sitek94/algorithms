def test(functions_to_test, test_cases):
    for fn in functions_to_test:
        for s1, s2, expected_output in test_cases:
            assert fn(s1, s2) == expected_output

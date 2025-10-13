"""
Tests for Problem 07: Segmented Sieve
"""

import pytest
from segmented_sieve import segmented_sieve


class TestEdgeCases:
    """Test edge cases"""

    def test_returns_empty_when_L_greater_than_R(self):
        assert segmented_sieve(10, 5) == []

    def test_returns_empty_when_R_less_than_2(self):
        assert segmented_sieve(0, 1) == []
        assert segmented_sieve(1, 1) == []

    def test_handles_L_equals_R_for_a_prime(self):
        assert segmented_sieve(7, 7) == [7]
        assert segmented_sieve(11, 11) == [11]

    def test_handles_L_equals_R_for_a_composite(self):
        assert segmented_sieve(4, 4) == []
        assert segmented_sieve(9, 9) == []

    def test_handles_L_equals_2(self):
        assert segmented_sieve(2, 10) == [2, 3, 5, 7]


class TestReadmeTestCases:
    """Test README test cases"""

    def test_finds_primes_from_10_to_30(self):
        assert segmented_sieve(10, 30) == [11, 13, 17, 19, 23, 29]

    def test_finds_primes_from_100_to_150(self):
        assert segmented_sieve(100, 150) == [
            101, 103, 107, 109, 113, 127, 131, 137, 139, 149
        ]

    def test_finds_primes_from_1_to_20(self):
        assert segmented_sieve(1, 20) == [2, 3, 5, 7, 11, 13, 17, 19]


class TestSmallRanges:
    """Test small ranges"""

    def test_finds_primes_from_20_to_40(self):
        assert segmented_sieve(20, 40) == [23, 29, 31, 37]

    def test_finds_primes_from_50_to_70(self):
        assert segmented_sieve(50, 70) == [53, 59, 61, 67]

    def test_finds_primes_from_1_to_10(self):
        assert segmented_sieve(1, 10) == [2, 3, 5, 7]

    def test_handles_range_with_no_primes(self):
        assert segmented_sieve(24, 28) == []


class TestMediumRanges:
    """Test medium ranges"""

    def test_finds_correct_number_of_primes_from_1_to_100(self):
        result = segmented_sieve(1, 100)
        assert len(result) == 25

    def test_finds_primes_from_200_to_300(self):
        result = segmented_sieve(200, 300)
        assert len(result) == 16

    def test_finds_primes_from_500_to_600(self):
        result = segmented_sieve(500, 600)
        assert len(result) == 14


class TestLargeRanges:
    """Test large ranges"""

    def test_finds_primes_from_1000000_to_1000100(self):
        result = segmented_sieve(1000000, 1000100)
        assert len(result) == 6
        assert result == [1000003, 1000033, 1000037, 1000039, 1000081, 1000099]

    def test_finds_primes_from_10000_to_10100(self):
        result = segmented_sieve(10000, 10100)
        assert len(result) == 11

    def test_finds_correct_number_of_primes_from_1_to_10000(self):
        result = segmented_sieve(1, 10000)
        assert len(result) == 1229


class TestPrimeProperties:
    """Test prime properties"""

    def test_all_returned_numbers_are_prime(self):
        def is_prime_helper(n):
            if n < 2:
                return False
            if n == 2:
                return True
            if n % 2 == 0:
                return False
            for i in range(3, int(n ** 0.5) + 1, 2):
                if n % i == 0:
                    return False
            return True

        result = segmented_sieve(50, 150)
        for n in result:
            assert is_prime_helper(n)

    def test_results_are_in_ascending_order(self):
        result = segmented_sieve(1, 100)
        for i in range(1, len(result)):
            assert result[i] > result[i - 1]

    def test_all_results_are_within_specified_range(self):
        L, R = 100, 200
        result = segmented_sieve(L, R)
        for n in result:
            assert n >= L
            assert n <= R

    def test_does_not_miss_any_primes_in_range(self):
        L, R = 1, 50
        result = segmented_sieve(L, R)
        expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]
        assert result == expected


class TestComparisonWithFullSieve:
    """Test comparison with full sieve"""

    def test_matches_standard_sieve_for_small_ranges(self):
        def standard_sieve_reference(limit):
            if limit < 2:
                return []
            is_prime = [True] * (limit + 1)
            is_prime[0] = is_prime[1] = False

            for i in range(2, int(limit ** 0.5) + 1):
                if is_prime[i]:
                    for j in range(i * i, limit + 1, i):
                        is_prime[j] = False

            return [i for i in range(2, limit + 1) if is_prime[i]]

        result = segmented_sieve(1, 100)
        expected = standard_sieve_reference(100)
        assert result == expected

    def test_matches_expected_primes_for_range_30_to_60(self):
        def standard_sieve_reference(limit):
            if limit < 2:
                return []
            is_prime = [True] * (limit + 1)
            is_prime[0] = is_prime[1] = False

            for i in range(2, int(limit ** 0.5) + 1):
                if is_prime[i]:
                    for j in range(i * i, limit + 1, i):
                        is_prime[j] = False

            return [i for i in range(2, limit + 1) if is_prime[i]]

        result = segmented_sieve(30, 60)
        all_primes = standard_sieve_reference(60)
        expected = [p for p in all_primes if p >= 30]
        assert result == expected


class TestSpecialRanges:
    """Test special ranges"""

    def test_handles_range_starting_with_a_prime(self):
        assert segmented_sieve(11, 20) == [11, 13, 17, 19]

    def test_handles_range_starting_with_composite(self):
        assert segmented_sieve(12, 20) == [13, 17, 19]

    def test_handles_very_small_ranges(self):
        assert segmented_sieve(2, 2) == [2]
        assert segmented_sieve(3, 3) == [3]
        assert segmented_sieve(2, 3) == [2, 3]

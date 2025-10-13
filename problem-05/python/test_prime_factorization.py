"""
Tests for Problem 05: Prime Factorization
"""

import pytest
from prime_factorization import prime_factorization


class TestPrimeFactorizationEdgeCases:
    """Test edge cases"""

    def test_returns_empty_for_n_equals_1(self):
        assert prime_factorization(1) == []

    def test_returns_empty_for_n_equals_0(self):
        assert prime_factorization(0) == []

    def test_returns_empty_for_negative_numbers(self):
        assert prime_factorization(-5) == []
        assert prime_factorization(-100) == []


class TestPrimeNumbers:
    """Test prime numbers"""

    def test_returns_number_itself_for_small_primes(self):
        assert prime_factorization(2) == [2]
        assert prime_factorization(3) == [3]
        assert prime_factorization(5) == [5]
        assert prime_factorization(7) == [7]
        assert prime_factorization(11) == [11]

    def test_returns_number_itself_for_larger_primes(self):
        assert prime_factorization(17) == [17]
        assert prime_factorization(97) == [97]
        assert prime_factorization(541) == [541]


class TestPowersOfTwo:
    """Test powers of 2"""

    def test_returns_multiple_2s_for_powers_of_2(self):
        assert prime_factorization(2) == [2]
        assert prime_factorization(4) == [2, 2]
        assert prime_factorization(8) == [2, 2, 2]
        assert prime_factorization(16) == [2, 2, 2, 2]
        assert prime_factorization(32) == [2, 2, 2, 2, 2]


class TestPowersOfOtherPrimes:
    """Test powers of other primes"""

    def test_returns_multiple_copies_of_the_prime(self):
        assert prime_factorization(9) == [3, 3]
        assert prime_factorization(27) == [3, 3, 3]
        assert prime_factorization(25) == [5, 5]
        assert prime_factorization(49) == [7, 7]


class TestCompositeNumbers:
    """Test composite numbers"""

    def test_factorizes_small_composites_correctly(self):
        assert prime_factorization(6) == [2, 3]
        assert prime_factorization(10) == [2, 5]
        assert prime_factorization(12) == [2, 2, 3]
        assert prime_factorization(15) == [3, 5]
        assert prime_factorization(20) == [2, 2, 5]

    def test_factorizes_medium_composites_correctly(self):
        assert prime_factorization(100) == [2, 2, 5, 5]
        assert prime_factorization(315) == [3, 3, 5, 7]
        assert prime_factorization(360) == [2, 2, 2, 3, 3, 5]


class TestProvidedTestCasesFromReadme:
    """Test provided test cases from README"""

    def test_prime_factorization_12(self):
        assert prime_factorization(12) == [2, 2, 3]

    def test_prime_factorization_17(self):
        assert prime_factorization(17) == [17]

    def test_prime_factorization_100(self):
        assert prime_factorization(100) == [2, 2, 5, 5]

    def test_prime_factorization_315(self):
        assert prime_factorization(315) == [3, 3, 5, 7]

    def test_prime_factorization_1(self):
        assert prime_factorization(1) == []


class TestFactorProperties:
    """Test factor properties"""

    def test_returns_factors_in_ascending_order(self):
        factors = prime_factorization(360)
        for i in range(1, len(factors)):
            assert factors[i] >= factors[i - 1]

    def test_product_of_factors_equals_original_number(self):
        test_numbers = [12, 100, 315, 360, 1001, 2310]
        for n in test_numbers:
            factors = prime_factorization(n)
            product = 1
            for f in factors:
                product *= f
            assert product == n

    def test_all_returned_factors_are_prime(self):
        def is_prime_helper(num):
            if num <= 1:
                return False
            if num <= 3:
                return True
            if num % 2 == 0 or num % 3 == 0:
                return False
            i = 5
            while i * i <= num:
                if num % i == 0 or num % (i + 2) == 0:
                    return False
                i += 6
            return True

        factors = prime_factorization(1001)
        for factor in factors:
            assert is_prime_helper(factor)


class TestLargerNumbers:
    """Test larger numbers"""

    def test_handles_numbers_with_large_prime_factors(self):
        assert prime_factorization(221) == [13, 17]
        assert prime_factorization(1001) == [7, 11, 13]

    def test_handles_semi_primes(self):
        assert prime_factorization(35) == [5, 7]
        assert prime_factorization(77) == [7, 11]
        assert prime_factorization(143) == [11, 13]

    def test_efficiently_factorizes_numbers_up_to_10000(self):
        result = prime_factorization(9999)
        assert result == [3, 3, 11, 101]


class TestSpecialPatterns:
    """Test special patterns"""

    def test_handles_numbers_with_many_small_factors(self):
        assert prime_factorization(210) == [2, 3, 5, 7]
        assert prime_factorization(2310) == [2, 3, 5, 7, 11]

    def test_handles_perfect_squares(self):
        assert prime_factorization(36) == [2, 2, 3, 3]
        assert prime_factorization(144) == [2, 2, 2, 2, 3, 3]

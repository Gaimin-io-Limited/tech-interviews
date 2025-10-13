"""
Test suite for Problem 04: Sieve of Sundaram
"""

import pytest
from sieve_of_sundaram import sieve_of_sundaram


class TestEdgeCases:
    """Test edge cases and boundary conditions"""

    def test_limit_less_than_two(self):
        """Should return empty array for limit < 2"""
        assert sieve_of_sundaram(0) == []
        assert sieve_of_sundaram(1) == []
        assert sieve_of_sundaram(-5) == []

    def test_limit_equals_two(self):
        """Should return [2] for limit = 2"""
        assert sieve_of_sundaram(2) == [2]

    def test_limit_equals_three(self):
        """Should return [2, 3] for limit = 3"""
        assert sieve_of_sundaram(3) == [2, 3]


class TestSmallLimits:
    """Test small limit values"""

    def test_primes_up_to_ten(self):
        """Should find primes up to 10"""
        assert sieve_of_sundaram(10) == [2, 3, 5, 7]

    def test_primes_up_to_twenty(self):
        """Should find primes up to 20"""
        assert sieve_of_sundaram(20) == [2, 3, 5, 7, 11, 13, 17, 19]

    def test_primes_up_to_thirty(self):
        """Should find primes up to 30"""
        assert sieve_of_sundaram(30) == [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]


class TestMediumLimits:
    """Test medium-sized limits"""

    def test_primes_up_to_fifty(self):
        """Should find primes up to 50"""
        result = sieve_of_sundaram(50)
        assert len(result) == 15
        assert result[0] == 2
        assert result[14] == 47

    def test_primes_up_to_hundred(self):
        """Should find primes up to 100"""
        result = sieve_of_sundaram(100)
        assert len(result) == 25
        assert result[0] == 2
        assert result[24] == 97


class TestSpecificBoundaries:
    """Test behavior at specific boundary values"""

    def test_include_limit_if_prime(self):
        """Should include limit if it is prime"""
        assert sieve_of_sundaram(7) == [2, 3, 5, 7]
        assert sieve_of_sundaram(13) == [2, 3, 5, 7, 11, 13]
        assert sieve_of_sundaram(97)[-1] == 97

    def test_not_include_limit_if_composite(self):
        """Should not include limit if it is composite"""
        assert sieve_of_sundaram(8) == [2, 3, 5, 7]
        assert sieve_of_sundaram(9) == [2, 3, 5, 7]
        assert sieve_of_sundaram(100)[-1] == 97


class TestArrayProperties:
    """Test properties of the returned array"""

    def test_ascending_order(self):
        """Should return primes in ascending order"""
        primes = sieve_of_sundaram(100)
        for i in range(1, len(primes)):
            assert primes[i] > primes[i - 1]

    def test_unique_values(self):
        """Should return unique values"""
        primes = sieve_of_sundaram(100)
        unique_primes = set(primes)
        assert len(unique_primes) == len(primes)

    def test_always_starts_with_two(self):
        """Should always start with 2"""
        assert sieve_of_sundaram(2)[0] == 2
        assert sieve_of_sundaram(10)[0] == 2
        assert sieve_of_sundaram(100)[0] == 2


class TestLargerLimits:
    """Test with larger limit values"""

    def test_limit_thousand(self):
        """Should efficiently handle limit of 1000"""
        result = sieve_of_sundaram(1000)
        assert len(result) == 168
        assert result[0] == 2
        assert result[167] == 997

    def test_limit_ten_thousand(self):
        """Should efficiently handle limit of 10000"""
        result = sieve_of_sundaram(10000)
        assert len(result) == 1229
        assert result[0] == 2
        assert result[1228] == 9973


class TestCorrectnessVerification:
    """Verify correctness of the sieve algorithm"""

    def test_no_composite_numbers(self):
        """Should not include any composite numbers"""
        primes = sieve_of_sundaram(50)
        composites = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30]

        for composite in composites:
            assert composite not in primes

    def test_all_known_primes_included(self):
        """Should include all known primes in range"""
        primes = sieve_of_sundaram(50)
        known_primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]

        assert primes == known_primes

    def test_only_odd_primes_except_two(self):
        """Should include only odd primes except for 2"""
        primes = sieve_of_sundaram(100)

        assert primes[0] == 2

        for i in range(1, len(primes)):
            assert primes[i] % 2 == 1


class TestComparisonWithKnownResults:
    """Compare with known prime counts and values"""

    def test_match_expected_primes_up_to_thirty(self):
        """Should match expected primes up to 30"""
        assert sieve_of_sundaram(30) == [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

    def test_correct_number_of_primes_up_to_two_hundred(self):
        """Should find correct number of primes up to 200"""
        result = sieve_of_sundaram(200)
        assert len(result) == 46

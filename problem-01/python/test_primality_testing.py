"""
Test suite for Problem 01: Basic Primality Testing
"""

import pytest
from primality_testing import is_prime


class TestEdgeCases:
    """Test edge cases and boundary conditions"""

    def test_negative_numbers(self):
        """Negative numbers are not prime"""
        assert is_prime(-1) == False
        assert is_prime(-2) == False
        assert is_prime(-17) == False

    def test_zero(self):
        """Zero is not prime"""
        assert is_prime(0) == False

    def test_one(self):
        """One is not prime"""
        assert is_prime(1) == False

    def test_two(self):
        """Two is the smallest prime"""
        assert is_prime(2) == True


class TestSmallPrimes:
    """Test small prime numbers"""

    def test_small_primes(self):
        """First 10 primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29"""
        small_primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
        for p in small_primes:
            assert is_prime(p) == True, f"{p} should be prime"


class TestSmallComposites:
    """Test small composite numbers"""

    def test_even_composites(self):
        """Even numbers (except 2) are not prime"""
        even_composites = [4, 6, 8, 10, 12, 14, 16, 18, 20]
        for c in even_composites:
            assert is_prime(c) == False, f"{c} should not be prime"

    def test_odd_composites(self):
        """Test odd composite numbers"""
        odd_composites = [9, 15, 21, 25, 27, 33, 35, 39, 45, 49]
        for c in odd_composites:
            assert is_prime(c) == False, f"{c} should not be prime"


class TestMediumPrimes:
    """Test medium-sized prime numbers"""

    def test_two_digit_primes(self):
        """Test some two-digit primes"""
        primes = [31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
        for p in primes:
            assert is_prime(p) == True, f"{p} should be prime"

    def test_three_digit_primes(self):
        """Test some three-digit primes"""
        primes = [101, 103, 107, 109, 113, 127, 131, 137, 139, 149]
        for p in primes:
            assert is_prime(p) == True, f"{p} should be prime"


class TestMediumComposites:
    """Test medium-sized composite numbers"""

    def test_perfect_squares(self):
        """Perfect squares are composite"""
        squares = [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144]
        for s in squares:
            assert is_prime(s) == False, f"{s} should not be prime"

    def test_products_of_small_primes(self):
        """Test products of small primes"""
        composites = [6, 10, 14, 15, 21, 22, 26, 33, 34, 35, 38, 39]
        for c in composites:
            assert is_prime(c) == False, f"{c} should not be prime"


class TestLargePrimes:
    """Test large prime numbers"""

    def test_four_digit_primes(self):
        """Test some four-digit primes"""
        primes = [1009, 1013, 1019, 1021, 1031, 1033, 1039, 1049, 1051, 1061]
        for p in primes:
            assert is_prime(p) == True, f"{p} should be prime"

    def test_five_digit_primes(self):
        """Test some five-digit primes"""
        primes = [10007, 10009, 10037, 10039, 10061, 10067, 10069, 10079, 10091, 10093]
        for p in primes:
            assert is_prime(p) == True, f"{p} should be prime"


class TestLargeComposites:
    """Test large composite numbers"""

    def test_large_even_numbers(self):
        """Large even numbers are not prime"""
        composites = [1000, 1002, 1004, 1006, 1008, 1010]
        for c in composites:
            assert is_prime(c) == False, f"{c} should not be prime"

    def test_large_odd_composites(self):
        """Large odd composites"""
        composites = [1001, 1003, 1005, 1007, 1011, 1015]
        for c in composites:
            assert is_prime(c) == False, f"{c} should not be prime"

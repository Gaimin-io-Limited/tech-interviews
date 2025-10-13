"""
Test suite for Problem 02: Generating Prime Sequences
"""

import pytest
from generate_n_primes import generate_n_primes


class TestEdgeCases:
    """Test edge cases and boundary conditions"""

    def test_zero(self):
        """Should return empty array for n = 0"""
        assert generate_n_primes(0) == []

    def test_negative(self):
        """Should return empty array for negative n"""
        assert generate_n_primes(-1) == []
        assert generate_n_primes(-10) == []

    def test_single_prime(self):
        """Should return single prime for n = 1"""
        assert generate_n_primes(1) == [2]

    def test_two_primes(self):
        """Should return two primes for n = 2"""
        assert generate_n_primes(2) == [2, 3]


class TestSmallSequences:
    """Test small prime sequences"""

    def test_first_five_primes(self):
        """Should generate first 5 primes"""
        assert generate_n_primes(5) == [2, 3, 5, 7, 11]

    def test_first_ten_primes(self):
        """Should generate first 10 primes"""
        assert generate_n_primes(10) == [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

    def test_first_three_primes(self):
        """Should generate first 3 primes"""
        assert generate_n_primes(3) == [2, 3, 5]


class TestMediumSequences:
    """Test medium-sized prime sequences"""

    def test_first_twenty_primes(self):
        """Should generate first 20 primes"""
        expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]
        assert generate_n_primes(20) == expected

    def test_first_twenty_five_primes(self):
        """Should generate first 25 primes"""
        result = generate_n_primes(25)
        assert len(result) == 25
        assert result[0] == 2
        assert result[24] == 97


class TestSequenceProperties:
    """Test properties of the generated sequences"""

    def test_exact_length(self):
        """Should return exactly n primes"""
        assert len(generate_n_primes(7)) == 7
        assert len(generate_n_primes(15)) == 15
        assert len(generate_n_primes(50)) == 50

    def test_starts_with_two(self):
        """Should start with 2"""
        assert generate_n_primes(1)[0] == 2
        assert generate_n_primes(5)[0] == 2
        assert generate_n_primes(100)[0] == 2

    def test_ascending_order(self):
        """Should return primes in ascending order"""
        primes = generate_n_primes(30)
        for i in range(1, len(primes)):
            assert primes[i] > primes[i - 1]

    def test_unique_values(self):
        """Should contain only unique values"""
        primes = generate_n_primes(50)
        unique_primes = set(primes)
        assert len(unique_primes) == len(primes)


class TestSpecificPrimeValues:
    """Test specific prime values at known positions"""

    def test_known_primes_at_positions(self):
        """Should include known primes in correct positions"""
        primes = generate_n_primes(100)
        assert primes[0] == 2
        assert primes[1] == 3
        assert primes[2] == 5
        assert primes[9] == 29
        assert primes[24] == 97

    def test_fiftieth_prime(self):
        """Should correctly generate primes up to position 50"""
        primes = generate_n_primes(50)
        assert primes[49] == 229


class TestProvidedExamples:
    """Test the provided examples from README"""

    def test_five_primes(self):
        """generateNPrimes(5) should return [2, 3, 5, 7, 11]"""
        assert generate_n_primes(5) == [2, 3, 5, 7, 11]

    def test_ten_primes(self):
        """generateNPrimes(10) should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]"""
        assert generate_n_primes(10) == [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

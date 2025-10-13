"""
Test suite for Problem 08: Nth Prime Number
"""

import pytest
from nth_prime import nth_prime


class TestEdgeCases:
    """Test edge cases and boundary conditions"""

    def test_should_raise_error_for_n_less_than_1(self):
        """n must be at least 1"""
        with pytest.raises(ValueError, match="n must be at least 1"):
            nth_prime(0)
        with pytest.raises(ValueError, match="n must be at least 1"):
            nth_prime(-1)

    def test_should_return_2_for_n_equals_1(self):
        """First prime is 2"""
        assert nth_prime(1) == 2

    def test_should_return_3_for_n_equals_2(self):
        """Second prime is 3"""
        assert nth_prime(2) == 3

    def test_should_return_5_for_n_equals_3(self):
        """Third prime is 5"""
        assert nth_prime(3) == 5


class TestREADMECases:
    """Test cases from README"""

    def test_should_find_1st_prime(self):
        """Find the 1st prime"""
        assert nth_prime(1) == 2

    def test_should_find_10th_prime(self):
        """Find the 10th prime"""
        assert nth_prime(10) == 29

    def test_should_find_100th_prime(self):
        """Find the 100th prime"""
        assert nth_prime(100) == 541

    def test_should_find_1000th_prime(self):
        """Find the 1000th prime"""
        assert nth_prime(1000) == 7919

    def test_should_find_10000th_prime(self):
        """Find the 10000th prime"""
        assert nth_prime(10000) == 104729

    def test_should_find_100000th_prime(self):
        """Find the 100000th prime"""
        assert nth_prime(100000) == 1299709

    @pytest.mark.slow
    def test_should_find_1000000th_prime(self):
        """Find the 1000000th prime"""
        assert nth_prime(1000000) == 15485863


class TestSmallValues:
    """Test small values"""

    def test_should_find_first_10_primes_correctly(self):
        """First 10 primes are correct"""
        expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
        for i in range(1, 11):
            assert nth_prime(i) == expected[i - 1]

    def test_should_find_primes_11_to_20(self):
        """Find primes 11-20"""
        assert nth_prime(11) == 31
        assert nth_prime(15) == 47
        assert nth_prime(20) == 71

    def test_should_find_25th_prime(self):
        """Find the 25th prime"""
        assert nth_prime(25) == 97

    def test_should_find_50th_prime(self):
        """Find the 50th prime"""
        assert nth_prime(50) == 229


class TestMediumValues:
    """Test medium values"""

    def test_should_find_500th_prime(self):
        """Find the 500th prime"""
        assert nth_prime(500) == 3571

    def test_should_find_5000th_prime(self):
        """Find the 5000th prime"""
        assert nth_prime(5000) == 48611

    def test_should_find_200th_prime(self):
        """Find the 200th prime"""
        assert nth_prime(200) == 1223


class TestLargeValues:
    """Test large values"""

    def test_should_find_50000th_prime(self):
        """Find the 50000th prime"""
        assert nth_prime(50000) == 611953

    @pytest.mark.slow
    def test_should_find_500000th_prime(self):
        """Find the 500000th prime"""
        assert nth_prime(500000) == 7368787


class TestPrimeProperties:
    """Test properties of returned primes"""

    def test_returned_values_should_be_prime(self):
        """All returned values should be prime"""
        test_cases = [1, 10, 50, 100, 500]
        for n in test_cases:
            prime = nth_prime(n)
            assert is_prime_helper(prime)

    def test_should_return_increasing_values_for_increasing_n(self):
        """Values should increase as n increases"""
        values = [1, 10, 20, 30, 40, 50]
        for i in range(1, len(values)):
            assert nth_prime(values[i]) > nth_prime(values[i - 1])

    def test_consecutive_nth_primes_should_have_no_primes_between_them(self):
        """No primes between consecutive nth primes"""
        n = 20
        prime1 = nth_prime(n)
        prime2 = nth_prime(n + 1)

        has_intermediate_prime = False
        for i in range(prime1 + 1, prime2):
            if is_prime_helper(i):
                has_intermediate_prime = True
                break
        assert not has_intermediate_prime


class TestConsistencyChecks:
    """Test consistency"""

    def test_should_return_same_result_on_repeated_calls(self):
        """Repeated calls should return same result"""
        n = 100
        result1 = nth_prime(n)
        result2 = nth_prime(n)
        assert result1 == result2

    def test_should_handle_boundary_cases_around_powers_of_10(self):
        """Handle boundaries around powers of 10"""
        assert nth_prime(99) == 523
        assert nth_prime(101) == 547
        assert nth_prime(999) == 7907
        assert nth_prime(1001) == 7927


def is_prime_helper(n: int) -> bool:
    """Helper function to check if a number is prime"""
    if n < 2:
        return False
    if n == 2:
        return True
    if n % 2 == 0:
        return False
    i = 3
    while i * i <= n:
        if n % i == 0:
            return False
        i += 2
    return True

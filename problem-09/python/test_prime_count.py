"""
Test suite for Problem 09: Prime Counting Function π(x)
"""

import pytest
from prime_count import prime_count


class TestEdgeCases:
    """Test edge cases and boundary conditions"""

    def test_should_return_0_for_x_less_than_2(self):
        """x < 2 should return 0"""
        assert prime_count(0) == 0
        assert prime_count(1) == 0
        assert prime_count(-5) == 0

    def test_should_return_1_for_x_equals_2(self):
        """x = 2 should return 1"""
        assert prime_count(2) == 1

    def test_should_return_2_for_x_equals_3(self):
        """x = 3 should return 2"""
        assert prime_count(3) == 2

    def test_should_handle_x_equals_4_first_composite(self):
        """x = 4 (first composite) should return 2"""
        assert prime_count(4) == 2


class TestREADMECases:
    """Test cases from README"""

    def test_should_count_primes_up_to_10(self):
        """Count primes up to 10"""
        assert prime_count(10) == 4

    def test_should_count_primes_up_to_100(self):
        """Count primes up to 100"""
        assert prime_count(100) == 25

    def test_should_count_primes_up_to_1000(self):
        """Count primes up to 1000"""
        assert prime_count(1000) == 168

    def test_should_count_primes_up_to_10000(self):
        """Count primes up to 10000"""
        assert prime_count(10000) == 1229

    def test_should_count_primes_up_to_100000(self):
        """Count primes up to 100000"""
        assert prime_count(100000) == 9592

    @pytest.mark.slow
    def test_should_count_primes_up_to_1000000(self):
        """Count primes up to 1000000"""
        assert prime_count(1000000) == 78498


class TestSmallValues:
    """Test small values"""

    def test_should_count_primes_up_to_20(self):
        """Count primes up to 20"""
        assert prime_count(20) == 8

    def test_should_count_primes_up_to_30(self):
        """Count primes up to 30"""
        assert prime_count(30) == 10

    def test_should_count_primes_up_to_50(self):
        """Count primes up to 50"""
        assert prime_count(50) == 15

    def test_should_handle_prime_boundaries(self):
        """Handle prime boundaries"""
        assert prime_count(5) == 3
        assert prime_count(7) == 4
        assert prime_count(11) == 5

    def test_should_handle_composite_boundaries(self):
        """Handle composite boundaries"""
        assert prime_count(6) == 3
        assert prime_count(8) == 4
        assert prime_count(9) == 4


class TestMediumValues:
    """Test medium values"""

    def test_should_count_primes_up_to_500(self):
        """Count primes up to 500"""
        assert prime_count(500) == 95

    def test_should_count_primes_up_to_5000(self):
        """Count primes up to 5000"""
        assert prime_count(5000) == 669

    def test_should_count_primes_up_to_50000(self):
        """Count primes up to 50000"""
        assert prime_count(50000) == 5133


class TestProperties:
    """Test properties of the prime counting function"""

    def test_should_be_monotonically_increasing(self):
        """Prime count should be monotonically increasing"""
        values = [10, 20, 30, 50, 100, 200, 500]
        for i in range(1, len(values)):
            assert prime_count(values[i]) > prime_count(values[i - 1])

    def test_should_not_increase_for_consecutive_composites(self):
        """Prime count should not increase for consecutive composites"""
        assert prime_count(8) == prime_count(9)
        assert prime_count(14) == prime_count(15)
        assert prime_count(24) == prime_count(25)

    def test_should_increase_by_exactly_1_at_each_prime(self):
        """Prime count should increase by exactly 1 at each prime"""
        primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
        for prime in primes:
            assert prime_count(prime) == prime_count(prime - 1) + 1

    def test_should_match_actual_prime_list_count_for_small_x(self):
        """Prime count should match actual prime list count for small x"""
        x = 30
        actual_primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
        expected_count = len([p for p in actual_primes if p <= x])
        assert prime_count(x) == expected_count


class TestConsistencyChecks:
    """Test consistency"""

    def test_should_return_same_result_on_repeated_calls(self):
        """Repeated calls should return same result"""
        x = 1000
        result1 = prime_count(x)
        result2 = prime_count(x)
        assert result1 == result2

    def test_should_handle_powers_of_10_correctly(self):
        """Handle powers of 10 correctly"""
        assert prime_count(10) == 4
        assert prime_count(100) == 25
        assert prime_count(1000) == 168

    def test_should_handle_boundaries_around_powers_of_2(self):
        """Handle boundaries around powers of 2"""
        assert prime_count(16) == 6
        assert prime_count(32) == 11
        assert prime_count(64) == 18
        assert prime_count(128) == 31


class TestRangeDifferences:
    """Test range differences"""

    def test_should_correctly_compute_range_differences(self):
        """Range differences should be correct"""
        count_0_to_100 = prime_count(100)
        count_0_to_50 = prime_count(50)
        count_51_to_100 = count_0_to_100 - count_0_to_50
        assert count_51_to_100 == 10

    def test_should_handle_decade_ranges(self):
        """Handle decade ranges"""
        assert prime_count(20) - prime_count(10) == 4
        assert prime_count(30) - prime_count(20) == 2

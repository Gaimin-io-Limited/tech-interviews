"""
Tests for Problem 06: Twin Primes and Prime Gaps
"""

import pytest
from prime_patterns import find_twin_primes, find_largest_prime_gap, prime_gaps


class TestFindTwinPrimes:
    """Tests for find_twin_primes"""

    class TestEdgeCases:
        """Test edge cases"""

        def test_returns_empty_for_limit_less_than_3(self):
            assert find_twin_primes(0) == []
            assert find_twin_primes(1) == []
            assert find_twin_primes(2) == []

        def test_finds_twin_primes_up_to_4(self):
            assert find_twin_primes(4) == [(3, 5)]

    class TestSmallLimits:
        """Test small limits"""

        def test_finds_twin_primes_up_to_20(self):
            assert find_twin_primes(20) == [(3, 5), (5, 7), (11, 13), (17, 19)]

        def test_finds_twin_primes_up_to_30(self):
            assert find_twin_primes(30) == [(3, 5), (5, 7), (11, 13), (17, 19), (29, 31)]

    class TestMediumLimits:
        """Test medium limits"""

        def test_finds_twin_primes_up_to_100(self):
            assert find_twin_primes(100) == [
                (3, 5), (5, 7), (11, 13), (17, 19), (29, 31), (41, 43), (59, 61), (71, 73)
            ]

        def test_finds_correct_number_of_twin_primes_up_to_200(self):
            result = find_twin_primes(200)
            assert len(result) == 15

    class TestTwinPrimeProperties:
        """Test twin prime properties"""

        def test_all_pairs_differ_by_exactly_2(self):
            twins = find_twin_primes(100)
            for p1, p2 in twins:
                assert p2 - p1 == 2

        def test_pairs_are_in_ascending_order(self):
            twins = find_twin_primes(100)
            for i in range(1, len(twins)):
                assert twins[i][0] > twins[i - 1][0]

        def test_does_not_include_overlapping_pairs_except_3_5_and_5_7(self):
            twins = find_twin_primes(100)
            first_pair = twins[0]
            second_pair = twins[1]

            assert first_pair == (3, 5)
            assert second_pair == (5, 7)


class TestFindLargestPrimeGap:
    """Tests for find_largest_prime_gap"""

    class TestEdgeCases:
        """Test edge cases"""

        def test_handles_limit_with_fewer_than_2_primes(self):
            result = find_largest_prime_gap(1)
            assert result['gap'] == 0

        def test_handles_limit_equals_2(self):
            result = find_largest_prime_gap(2)
            assert result['gap'] == 0

        def test_handles_limit_equals_3(self):
            result = find_largest_prime_gap(3)
            assert result['gap'] == 1
            assert result['primes'] == (2, 3)

    class TestSmallLimits:
        """Test small limits"""

        def test_finds_largest_gap_up_to_20(self):
            result = find_largest_prime_gap(20)
            assert result['gap'] == 4
            assert result['primes'] == (7, 11)

        def test_finds_largest_gap_up_to_50(self):
            result = find_largest_prime_gap(50)
            assert result['gap'] == 6
            assert result['primes'] == (23, 29)

    class TestMediumLimits:
        """Test medium limits"""

        def test_finds_largest_gap_up_to_100(self):
            result = find_largest_prime_gap(100)
            assert result['gap'] == 8
            assert result['primes'] == (89, 97)

        def test_finds_largest_gap_up_to_1000(self):
            result = find_largest_prime_gap(1000)
            assert result['gap'] == 20
            assert result['primes'] == (887, 907)

    class TestGapProperties:
        """Test gap properties"""

        def test_returned_primes_are_consecutive_primes(self):
            result = find_largest_prime_gap(100)
            p1, p2 = result['primes']
            assert p2 - p1 == result['gap']

        def test_gap_is_positive(self):
            result = find_largest_prime_gap(100)
            assert result['gap'] > 0


class TestPrimeGaps:
    """Tests for prime_gaps"""

    class TestEdgeCases:
        """Test edge cases"""

        def test_returns_empty_array_for_limit_less_than_2(self):
            assert prime_gaps(0) == []
            assert prime_gaps(1) == []

        def test_returns_single_gap_for_limit_equals_2(self):
            assert prime_gaps(2) == [1]

        def test_returns_two_gaps_for_limit_equals_3(self):
            assert prime_gaps(3) == [1, 2]

    class TestSmallLimits:
        """Test small limits"""

        def test_computes_gaps_up_to_20(self):
            assert prime_gaps(20) == [1, 2, 2, 4, 2, 4, 2, 4]

        def test_computes_gaps_up_to_30(self):
            assert prime_gaps(30) == [1, 2, 2, 4, 2, 4, 2, 4, 6, 2]

    class TestMediumLimits:
        """Test medium limits"""

        def test_computes_correct_number_of_gaps_up_to_100(self):
            gaps = prime_gaps(100)
            assert len(gaps) == 25

        def test_computes_correct_number_of_gaps_up_to_1000(self):
            gaps = prime_gaps(1000)
            assert len(gaps) == 168

    class TestGapProperties:
        """Test gap properties"""

        def test_all_gaps_are_positive(self):
            gaps = prime_gaps(100)
            for gap in gaps:
                assert gap > 0

        def test_all_gaps_are_even_except_the_first(self):
            gaps = prime_gaps(100)
            assert gaps[0] == 1

            for i in range(1, len(gaps)):
                assert gaps[i] % 2 == 0

        def test_smallest_gap_after_first_is_2(self):
            gaps = prime_gaps(100)
            gaps_after_first = gaps[1:]
            min_gap = min(gaps_after_first)
            assert min_gap == 2

        def test_contains_the_largest_gap_found_by_find_largest_prime_gap(self):
            gaps = prime_gaps(100)
            largest_gap_result = find_largest_prime_gap(100)
            assert largest_gap_result['gap'] in gaps

    class TestProvidedTestCaseFromReadme:
        """Test provided test case from README"""

        def test_prime_gaps_30_matches_expected_output(self):
            assert prime_gaps(30) == [1, 2, 2, 4, 2, 4, 2, 4, 6, 2]


class TestIntegrationTests:
    """Integration tests"""

    def test_twin_primes_correspond_to_gaps_of_2(self):
        limit = 100
        twins = find_twin_primes(limit)
        gaps = prime_gaps(limit)

        twin_count = len(twins)
        gap_2_count = gaps.count(2)

        assert gap_2_count >= twin_count

    def test_largest_gap_appears_in_gaps_array(self):
        limit = 100
        largest_gap = find_largest_prime_gap(limit)
        gaps = prime_gaps(limit)

        assert max(gaps) == largest_gap['gap']

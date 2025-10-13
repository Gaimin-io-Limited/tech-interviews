"""
Test suite for Problem 10: Miller-Rabin Primality Test
"""

import pytest
from miller_rabin import miller_rabin


class TestBaseCases:
    """Test base cases"""

    def test_should_return_false_for_n_less_than_or_equal_to_1(self):
        """n <= 1 should return False"""
        assert miller_rabin(0) == False
        assert miller_rabin(1) == False
        assert miller_rabin(-5) == False

    def test_should_return_true_for_2(self):
        """2 is prime"""
        assert miller_rabin(2) == True

    def test_should_return_true_for_3(self):
        """3 is prime"""
        assert miller_rabin(3) == True

    def test_should_return_false_for_even_numbers_greater_than_2(self):
        """Even numbers > 2 are not prime"""
        assert miller_rabin(4) == False
        assert miller_rabin(10) == False
        assert miller_rabin(100) == False
        assert miller_rabin(1000) == False


class TestREADMECasesKnownPrimes:
    """Test cases from README - known primes"""

    def test_should_return_true_for_17(self):
        """17 is prime"""
        assert miller_rabin(17, 5) == True

    def test_should_return_true_for_97(self):
        """97 is prime"""
        assert miller_rabin(97, 5) == True

    def test_should_return_true_for_1009(self):
        """1009 is prime"""
        assert miller_rabin(1009, 5) == True

    def test_should_return_true_for_15485863_millionth_prime(self):
        """15485863 (millionth prime) is prime"""
        assert miller_rabin(15485863, 5) == True


class TestREADMECasesKnownComposites:
    """Test cases from README - known composites"""

    def test_should_return_false_for_15(self):
        """15 is composite"""
        assert miller_rabin(15, 5) == False

    def test_should_return_false_for_221(self):
        """221 (13 × 17) is composite"""
        assert miller_rabin(221, 5) == False

    def test_should_return_false_for_561_carmichael_number(self):
        """561 (Carmichael number) is composite"""
        assert miller_rabin(561, 5) == False


class TestSmallPrimes:
    """Test small primes"""

    def test_should_correctly_identify_first_20_primes(self):
        """First 20 primes should be identified correctly"""
        primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71]
        for p in primes:
            assert miller_rabin(p, 5) == True

    def test_should_correctly_identify_small_composites(self):
        """Small composites should be identified correctly"""
        composites = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28]
        for c in composites:
            assert miller_rabin(c, 5) == False


class TestMediumPrimes:
    """Test medium primes"""

    def test_should_correctly_identify_primes_up_to_1000(self):
        """Primes up to 1000 should be identified correctly"""
        primes = [101, 211, 307, 401, 503, 607, 701, 809, 907]
        for p in primes:
            assert miller_rabin(p, 5) == True

    def test_should_correctly_identify_composites_up_to_1000(self):
        """Composites up to 1000 should be identified correctly"""
        composites = [102, 210, 306, 400, 502, 606, 700, 808, 906]
        for c in composites:
            assert miller_rabin(c, 5) == False


class TestLargePrimes:
    """Test large primes"""

    def test_should_correctly_identify_large_primes(self):
        """Large primes should be identified correctly"""
        large_primes = [10007, 100003, 1000003, 10000019]
        for p in large_primes:
            assert miller_rabin(p, 5) == True

    def test_should_handle_mersenne_prime_2_pow_31_minus_1(self):
        """Mersenne prime 2^31 - 1 should be identified correctly"""
        mersenne_prime = 2147483647  # 2^31 - 1
        assert miller_rabin(mersenne_prime, 5) == True


class TestCarmichaelNumbers:
    """Test Carmichael numbers"""

    def test_should_correctly_identify_carmichael_numbers_as_composite(self):
        """Carmichael numbers should be identified as composite"""
        carmichael_numbers = [561, 1105, 1729, 2465, 2821, 6601]
        for c in carmichael_numbers:
            assert miller_rabin(c, 5) == False


class TestPseudoprimes:
    """Test pseudoprimes"""

    def test_should_correctly_identify_fermat_pseudoprimes_as_composite(self):
        """Fermat pseudoprimes should be identified as composite"""
        pseudoprimes = [341, 645, 1387, 1905, 2047]
        for p in pseudoprimes:
            assert miller_rabin(p, 5) == False


class TestConsistencyWithDifferentK:
    """Test consistency with different k values"""

    def test_should_give_consistent_results_for_primes_with_different_k(self):
        """Primes should be identified consistently with different k"""
        prime = 97
        assert miller_rabin(prime, 1) == True
        assert miller_rabin(prime, 5) == True
        assert miller_rabin(prime, 10) == True

    def test_should_give_consistent_results_for_composites_with_different_k(self):
        """Composites should be identified consistently with different k"""
        composite = 221
        assert miller_rabin(composite, 1) == False
        assert miller_rabin(composite, 5) == False
        assert miller_rabin(composite, 10) == False


class TestBigIntSupport:
    """Test support for large integers"""

    def test_should_work_with_large_integer_input(self):
        """Should work with large integer input"""
        assert miller_rabin(17, 5) == True
        assert miller_rabin(97, 5) == True
        assert miller_rabin(15, 5) == False
        assert miller_rabin(221, 5) == False

    def test_should_handle_large_primes(self):
        """Should handle large primes"""
        large_prime = 1000000007
        assert miller_rabin(large_prime, 5) == True


class TestSquaresOfPrimes:
    """Test squares of primes"""

    def test_should_correctly_identify_squares_of_primes_as_composite(self):
        """Squares of primes should be identified as composite"""
        assert miller_rabin(4, 5) == False
        assert miller_rabin(9, 5) == False
        assert miller_rabin(25, 5) == False
        assert miller_rabin(49, 5) == False
        assert miller_rabin(121, 5) == False
        assert miller_rabin(169, 5) == False


class TestProductsOfTwoPrimes:
    """Test products of two primes"""

    def test_should_correctly_identify_semiprimes_as_composite(self):
        """Semiprimes should be identified as composite"""
        assert miller_rabin(6, 5) == False
        assert miller_rabin(10, 5) == False
        assert miller_rabin(15, 5) == False
        assert miller_rabin(21, 5) == False
        assert miller_rabin(35, 5) == False
        assert miller_rabin(77, 5) == False


class TestPowersOfTwo:
    """Test powers of 2"""

    def test_should_correctly_identify_powers_of_2_as_composite_except_2(self):
        """Powers of 2 should be composite except 2"""
        assert miller_rabin(2, 5) == True
        assert miller_rabin(4, 5) == False
        assert miller_rabin(8, 5) == False
        assert miller_rabin(16, 5) == False
        assert miller_rabin(32, 5) == False
        assert miller_rabin(64, 5) == False
        assert miller_rabin(128, 5) == False

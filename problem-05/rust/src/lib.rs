#![allow(unused_variables)]
/// Finds the prime factorization of a given number using trial division.
///
/// # Arguments
/// * `n` - The number to factorize
///
/// # Returns
/// An array of prime factors in ascending order (with repetition)
pub fn prime_factorization(n: i64) -> Vec<i64> {
    vec![]
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_edge_case_n_1() {
        assert_eq!(prime_factorization(1), vec![]);
    }

    #[test]
    fn test_edge_case_n_0() {
        assert_eq!(prime_factorization(0), vec![]);
    }

    #[test]
    fn test_edge_case_negative() {
        assert_eq!(prime_factorization(-5), vec![]);
        assert_eq!(prime_factorization(-100), vec![]);
    }

    #[test]
    fn test_small_primes() {
        assert_eq!(prime_factorization(2), vec![2]);
        assert_eq!(prime_factorization(3), vec![3]);
        assert_eq!(prime_factorization(5), vec![5]);
        assert_eq!(prime_factorization(7), vec![7]);
        assert_eq!(prime_factorization(11), vec![11]);
    }

    #[test]
    fn test_larger_primes() {
        assert_eq!(prime_factorization(17), vec![17]);
        assert_eq!(prime_factorization(97), vec![97]);
        assert_eq!(prime_factorization(541), vec![541]);
    }

    #[test]
    fn test_powers_of_2() {
        assert_eq!(prime_factorization(2), vec![2]);
        assert_eq!(prime_factorization(4), vec![2, 2]);
        assert_eq!(prime_factorization(8), vec![2, 2, 2]);
        assert_eq!(prime_factorization(16), vec![2, 2, 2, 2]);
        assert_eq!(prime_factorization(32), vec![2, 2, 2, 2, 2]);
    }

    #[test]
    fn test_powers_of_other_primes() {
        assert_eq!(prime_factorization(9), vec![3, 3]);
        assert_eq!(prime_factorization(27), vec![3, 3, 3]);
        assert_eq!(prime_factorization(25), vec![5, 5]);
        assert_eq!(prime_factorization(49), vec![7, 7]);
    }

    #[test]
    fn test_small_composites() {
        assert_eq!(prime_factorization(6), vec![2, 3]);
        assert_eq!(prime_factorization(10), vec![2, 5]);
        assert_eq!(prime_factorization(12), vec![2, 2, 3]);
        assert_eq!(prime_factorization(15), vec![3, 5]);
        assert_eq!(prime_factorization(20), vec![2, 2, 5]);
    }

    #[test]
    fn test_medium_composites() {
        assert_eq!(prime_factorization(100), vec![2, 2, 5, 5]);
        assert_eq!(prime_factorization(315), vec![3, 3, 5, 7]);
        assert_eq!(prime_factorization(360), vec![2, 2, 2, 3, 3, 5]);
    }

    #[test]
    fn test_readme_example_12() {
        assert_eq!(prime_factorization(12), vec![2, 2, 3]);
    }

    #[test]
    fn test_readme_example_17() {
        assert_eq!(prime_factorization(17), vec![17]);
    }

    #[test]
    fn test_readme_example_100() {
        assert_eq!(prime_factorization(100), vec![2, 2, 5, 5]);
    }

    #[test]
    fn test_readme_example_315() {
        assert_eq!(prime_factorization(315), vec![3, 3, 5, 7]);
    }

    #[test]
    fn test_readme_example_1() {
        assert_eq!(prime_factorization(1), vec![]);
    }

    #[test]
    fn test_factors_ascending_order() {
        let factors = prime_factorization(360);
        for i in 1..factors.len() {
            assert!(factors[i] >= factors[i - 1]);
        }
    }

    #[test]
    fn test_product_equals_original() {
        let test_numbers = vec![12, 100, 315, 360, 1001, 2310];
        for n in test_numbers {
            let factors = prime_factorization(n);
            let product: i64 = factors.iter().product();
            assert_eq!(product, n);
        }
    }

    #[test]
    fn test_all_factors_are_prime() {
        let factors = prime_factorization(1001);
        for factor in factors {
            assert!(is_prime_check(factor), "{} should be prime", factor);
        }
    }

    #[test]
    fn test_numbers_with_large_prime_factors() {
        assert_eq!(prime_factorization(221), vec![13, 17]);
        assert_eq!(prime_factorization(1001), vec![7, 11, 13]);
    }

    #[test]
    fn test_semiprimes() {
        assert_eq!(prime_factorization(35), vec![5, 7]);
        assert_eq!(prime_factorization(77), vec![7, 11]);
        assert_eq!(prime_factorization(143), vec![11, 13]);
    }

    #[test]
    fn test_factorize_9999() {
        let result = prime_factorization(9999);
        assert_eq!(result, vec![3, 3, 11, 101]);
    }

    #[test]
    fn test_many_small_factors() {
        assert_eq!(prime_factorization(210), vec![2, 3, 5, 7]);
        assert_eq!(prime_factorization(2310), vec![2, 3, 5, 7, 11]);
    }

    #[test]
    fn test_perfect_squares() {
        assert_eq!(prime_factorization(36), vec![2, 2, 3, 3]);
        assert_eq!(prime_factorization(144), vec![2, 2, 2, 2, 3, 3]);
    }

    fn is_prime_check(n: i64) -> bool {
        if n <= 1 {
            return false;
        }
        if n <= 3 {
            return true;
        }
        if n % 2 == 0 || n % 3 == 0 {
            return false;
        }
        let mut i = 5;
        while i * i <= n {
            if n % i == 0 || n % (i + 2) == 0 {
                return false;
            }
            i += 6;
        }
        true
    }
}

#![allow(unused_variables)]
/// Finds all prime numbers in the range [L, R] using segmented sieve.
/// This is more memory-efficient than standard sieve for large ranges.
///
/// # Arguments
/// * `l` - The lower bound of the range (inclusive)
/// * `r` - The upper bound of the range (inclusive)
///
/// # Returns
/// An array of all prime numbers in [L, R]
pub fn segmented_sieve(l: i64, r: i64) -> Vec<i64> {
    vec![]
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_edge_case_l_greater_than_r() {
        assert_eq!(segmented_sieve(10, 5), vec![]);
    }

    #[test]
    fn test_edge_case_r_less_than_2() {
        assert_eq!(segmented_sieve(0, 1), vec![]);
        assert_eq!(segmented_sieve(1, 1), vec![]);
    }

    #[test]
    fn test_edge_case_l_equals_r_prime() {
        assert_eq!(segmented_sieve(7, 7), vec![7]);
        assert_eq!(segmented_sieve(11, 11), vec![11]);
    }

    #[test]
    fn test_edge_case_l_equals_r_composite() {
        assert_eq!(segmented_sieve(4, 4), vec![]);
        assert_eq!(segmented_sieve(9, 9), vec![]);
    }

    #[test]
    fn test_edge_case_l_equals_2() {
        assert_eq!(segmented_sieve(2, 10), vec![2, 3, 5, 7]);
    }

    #[test]
    fn test_readme_10_to_30() {
        assert_eq!(segmented_sieve(10, 30), vec![11, 13, 17, 19, 23, 29]);
    }

    #[test]
    fn test_readme_100_to_150() {
        assert_eq!(
            segmented_sieve(100, 150),
            vec![101, 103, 107, 109, 113, 127, 131, 137, 139, 149]
        );
    }

    #[test]
    fn test_readme_1_to_20() {
        assert_eq!(segmented_sieve(1, 20), vec![2, 3, 5, 7, 11, 13, 17, 19]);
    }

    #[test]
    fn test_small_range_20_to_40() {
        assert_eq!(segmented_sieve(20, 40), vec![23, 29, 31, 37]);
    }

    #[test]
    fn test_small_range_50_to_70() {
        assert_eq!(segmented_sieve(50, 70), vec![53, 59, 61, 67]);
    }

    #[test]
    fn test_small_range_1_to_10() {
        assert_eq!(segmented_sieve(1, 10), vec![2, 3, 5, 7]);
    }

    #[test]
    fn test_small_range_no_primes() {
        assert_eq!(segmented_sieve(24, 28), vec![]);
    }

    #[test]
    fn test_medium_range_1_to_100() {
        let result = segmented_sieve(1, 100);
        assert_eq!(result.len(), 25);
    }

    #[test]
    fn test_medium_range_200_to_300() {
        let result = segmented_sieve(200, 300);
        assert_eq!(result.len(), 16);
    }

    #[test]
    fn test_medium_range_500_to_600() {
        let result = segmented_sieve(500, 600);
        assert_eq!(result.len(), 14);
    }

    #[test]
    fn test_large_range_1000000_to_1000100() {
        let result = segmented_sieve(1000000, 1000100);
        assert_eq!(result.len(), 6);
        assert_eq!(result, vec![1000003, 1000033, 1000037, 1000039, 1000081, 1000099]);
    }

    #[test]
    fn test_large_range_10000_to_10100() {
        let result = segmented_sieve(10000, 10100);
        assert_eq!(result.len(), 11);
    }

    #[test]
    fn test_large_range_1_to_10000() {
        let result = segmented_sieve(1, 10000);
        assert_eq!(result.len(), 1229);
    }

    #[test]
    fn test_all_results_are_prime() {
        let result = segmented_sieve(50, 150);
        for n in result {
            assert!(is_prime_helper(n));
        }
    }

    #[test]
    fn test_results_ascending_order() {
        let result = segmented_sieve(1, 100);
        for i in 1..result.len() {
            assert!(result[i] > result[i - 1]);
        }
    }

    #[test]
    fn test_results_within_range() {
        let l = 100;
        let r = 200;
        let result = segmented_sieve(l, r);
        for n in result {
            assert!(n >= l);
            assert!(n <= r);
        }
    }

    #[test]
    fn test_no_missing_primes() {
        let l = 1;
        let r = 50;
        let result = segmented_sieve(l, r);
        let expected = vec![2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
        assert_eq!(result, expected);
    }

    #[test]
    fn test_comparison_with_standard_sieve_small() {
        let result = segmented_sieve(1, 100);
        let expected = standard_sieve_reference(100);
        assert_eq!(result, expected);
    }

    #[test]
    fn test_comparison_range_30_to_60() {
        let result = segmented_sieve(30, 60);
        let all_primes = standard_sieve_reference(60);
        let expected: Vec<i64> = all_primes.into_iter().filter(|&p| p >= 30).collect();
        assert_eq!(result, expected);
    }

    #[test]
    fn test_range_starting_with_prime() {
        assert_eq!(segmented_sieve(11, 20), vec![11, 13, 17, 19]);
    }

    #[test]
    fn test_range_starting_with_composite() {
        assert_eq!(segmented_sieve(12, 20), vec![13, 17, 19]);
    }

    #[test]
    fn test_very_small_range_2_to_2() {
        assert_eq!(segmented_sieve(2, 2), vec![2]);
    }

    #[test]
    fn test_very_small_range_3_to_3() {
        assert_eq!(segmented_sieve(3, 3), vec![3]);
    }

    #[test]
    fn test_very_small_range_2_to_3() {
        assert_eq!(segmented_sieve(2, 3), vec![2, 3]);
    }

    fn is_prime_helper(n: i64) -> bool {
        if n < 2 {
            return false;
        }
        if n == 2 {
            return true;
        }
        if n % 2 == 0 {
            return false;
        }
        let mut i = 3;
        while i * i <= n {
            if n % i == 0 {
                return false;
            }
            i += 2;
        }
        true
    }

    fn standard_sieve_reference(limit: i64) -> Vec<i64> {
        if limit < 2 {
            return vec![];
        }
        let mut is_prime = vec![true; (limit + 1) as usize];
        is_prime[0] = false;
        is_prime[1] = false;

        let mut i = 2;
        while i * i <= limit {
            if is_prime[i as usize] {
                let mut j = i * i;
                while j <= limit {
                    is_prime[j as usize] = false;
                    j += i;
                }
            }
            i += 1;
        }

        let mut primes = vec![];
        for i in 2..=limit {
            if is_prime[i as usize] {
                primes.push(i);
            }
        }
        primes
    }
}

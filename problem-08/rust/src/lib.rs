#![allow(unused_variables)]
/// Finds the nth prime number using the Prime Number Theorem for estimation.
///
/// # Arguments
/// * `n` - The position of the prime to find (1-indexed)
///
/// # Returns
/// The nth prime number
///
/// # Panics
/// Panics if n < 1
pub fn nth_prime(n: i64) -> i64 {
    if n < 1 {
        panic!("n must be at least 1");
    }
    0
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    #[should_panic(expected = "n must be at least 1")]
    fn test_edge_case_n_0_panics() {
        nth_prime(0);
    }

    #[test]
    #[should_panic(expected = "n must be at least 1")]
    fn test_edge_case_n_negative_panics() {
        nth_prime(-1);
    }

    #[test]
    fn test_edge_case_n_1() {
        assert_eq!(nth_prime(1), 2);
    }

    #[test]
    fn test_edge_case_n_2() {
        assert_eq!(nth_prime(2), 3);
    }

    #[test]
    fn test_edge_case_n_3() {
        assert_eq!(nth_prime(3), 5);
    }

    #[test]
    fn test_readme_1st_prime() {
        assert_eq!(nth_prime(1), 2);
    }

    #[test]
    fn test_readme_10th_prime() {
        assert_eq!(nth_prime(10), 29);
    }

    #[test]
    fn test_readme_100th_prime() {
        assert_eq!(nth_prime(100), 541);
    }

    #[test]
    fn test_readme_1000th_prime() {
        assert_eq!(nth_prime(1000), 7919);
    }

    #[test]
    fn test_readme_10000th_prime() {
        assert_eq!(nth_prime(10000), 104729);
    }

    #[test]
    fn test_readme_100000th_prime() {
        assert_eq!(nth_prime(100000), 1299709);
    }

    #[test]
    fn test_readme_1000000th_prime() {
        assert_eq!(nth_prime(1000000), 15485863);
    }

    #[test]
    fn test_first_10_primes() {
        let expected = vec![2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
        for i in 1..=10 {
            assert_eq!(nth_prime(i), expected[(i - 1) as usize]);
        }
    }

    #[test]
    fn test_primes_11_to_20() {
        assert_eq!(nth_prime(11), 31);
        assert_eq!(nth_prime(15), 47);
        assert_eq!(nth_prime(20), 71);
    }

    #[test]
    fn test_25th_prime() {
        assert_eq!(nth_prime(25), 97);
    }

    #[test]
    fn test_50th_prime() {
        assert_eq!(nth_prime(50), 229);
    }

    #[test]
    fn test_500th_prime() {
        assert_eq!(nth_prime(500), 3571);
    }

    #[test]
    fn test_5000th_prime() {
        assert_eq!(nth_prime(5000), 48611);
    }

    #[test]
    fn test_200th_prime() {
        assert_eq!(nth_prime(200), 1223);
    }

    #[test]
    fn test_50000th_prime() {
        assert_eq!(nth_prime(50000), 611953);
    }

    #[test]
    fn test_500000th_prime() {
        assert_eq!(nth_prime(500000), 7368787);
    }

    #[test]
    fn test_returned_values_are_prime() {
        let test_cases = vec![1, 10, 50, 100, 500];
        for n in test_cases {
            let prime = nth_prime(n);
            assert!(is_prime_helper(prime));
        }
    }

    #[test]
    fn test_increasing_values_for_increasing_n() {
        let values = vec![1, 10, 20, 30, 40, 50];
        for i in 1..values.len() {
            assert!(nth_prime(values[i]) > nth_prime(values[i - 1]));
        }
    }

    #[test]
    fn test_no_primes_between_consecutive() {
        let n = 20;
        let prime1 = nth_prime(n);
        let prime2 = nth_prime(n + 1);

        let mut has_intermediate = false;
        for i in prime1 + 1..prime2 {
            if is_prime_helper(i) {
                has_intermediate = true;
                break;
            }
        }
        assert!(!has_intermediate);
    }

    #[test]
    fn test_consistency_repeated_calls() {
        let n = 100;
        let result1 = nth_prime(n);
        let result2 = nth_prime(n);
        assert_eq!(result1, result2);
    }

    #[test]
    fn test_boundaries_around_powers_of_10() {
        assert_eq!(nth_prime(99), 523);
        assert_eq!(nth_prime(101), 547);
        assert_eq!(nth_prime(999), 7907);
        assert_eq!(nth_prime(1001), 7927);
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
}

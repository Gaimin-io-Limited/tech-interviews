/// Finds all prime numbers up to a given limit using the Sieve of Eratosthenes.
///
/// # Arguments
/// * `limit` - The upper bound (inclusive) to search for primes
///
/// # Returns
/// A vector containing all prime numbers up to and including `limit`
#[allow(unused_variables)]
pub fn sieve_of_eratosthenes(limit: u64) -> Vec<u64> {
    vec![]
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_limit_less_than_2() {
        assert_eq!(sieve_of_eratosthenes(0), vec![]);
        assert_eq!(sieve_of_eratosthenes(1), vec![]);
    }

    #[test]
    fn test_limit_2() {
        assert_eq!(sieve_of_eratosthenes(2), vec![2]);
    }

    #[test]
    fn test_limit_10() {
        assert_eq!(sieve_of_eratosthenes(10), vec![2, 3, 5, 7]);
    }

    #[test]
    fn test_limit_20() {
        assert_eq!(sieve_of_eratosthenes(20), vec![2, 3, 5, 7, 11, 13, 17, 19]);
    }

    #[test]
    fn test_limit_30() {
        let primes = sieve_of_eratosthenes(30);
        assert_eq!(primes, vec![2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    }

    #[test]
    fn test_limit_100() {
        let primes = sieve_of_eratosthenes(100);
        assert_eq!(primes.len(), 25);
        assert_eq!(primes[0], 2);
        assert_eq!(primes[24], 97);
    }

    #[test]
    fn test_limit_1000() {
        let primes = sieve_of_eratosthenes(1000);
        assert_eq!(primes.len(), 168);
    }

    #[test]
    fn test_all_results_are_prime() {
        let primes = sieve_of_eratosthenes(100);
        for &p in &primes {
            assert!(is_prime_check(p), "{} should be prime", p);
        }
    }

    #[test]
    fn test_ascending_order() {
        let primes = sieve_of_eratosthenes(100);
        for i in 1..primes.len() {
            assert!(primes[i] > primes[i - 1]);
        }
    }

    #[test]
    fn test_no_duplicates() {
        let primes = sieve_of_eratosthenes(100);
        for i in 0..primes.len() {
            for j in i+1..primes.len() {
                assert_ne!(primes[i], primes[j]);
            }
        }
    }

    #[test]
    fn test_contains_known_primes() {
        let primes = sieve_of_eratosthenes(50);
        assert!(primes.contains(&2));
        assert!(primes.contains(&13));
        assert!(primes.contains(&47));
    }

    #[test]
    fn test_does_not_contain_composites() {
        let primes = sieve_of_eratosthenes(50);
        assert!(!primes.contains(&4));
        assert!(!primes.contains(&15));
        assert!(!primes.contains(&49));
    }

    #[test]
    fn test_prime_at_limit() {
        let primes = sieve_of_eratosthenes(13);
        assert!(primes.contains(&13));
    }

    #[test]
    fn test_composite_at_limit() {
        let primes = sieve_of_eratosthenes(14);
        assert!(!primes.contains(&14));
        assert_eq!(primes.last(), Some(&13));
    }

    #[test]
    fn test_readme_example() {
        assert_eq!(sieve_of_eratosthenes(30), vec![2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    }

    #[test]
    fn test_large_limit() {
        let primes = sieve_of_eratosthenes(10000);
        assert_eq!(primes.len(), 1229);
    }

    fn is_prime_check(n: u64) -> bool {
        if n < 2 { return false; }
        if n == 2 { return true; }
        if n % 2 == 0 { return false; }
        let limit = (n as f64).sqrt() as u64;
        for i in (3..=limit).step_by(2) {
            if n % i == 0 { return false; }
        }
        true
    }
}

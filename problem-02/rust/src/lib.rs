/// Generates the first n prime numbers.
///
/// # Arguments
/// * `n` - The number of primes to generate
///
/// # Returns
/// A vector containing the first n prime numbers
#[allow(unused_variables)]
pub fn generate_n_primes(n: usize) -> Vec<u64> {
    vec![]
}

#[cfg(test)]
mod tests {
    use super::*;
    use primality_testing::is_prime;

    #[test]
    fn test_n_zero() {
        assert_eq!(generate_n_primes(0), vec![]);
    }

    #[test]
    fn test_n_one() {
        assert_eq!(generate_n_primes(1), vec![2]);
    }

    #[test]
    fn test_n_two() {
        assert_eq!(generate_n_primes(2), vec![2, 3]);
    }

    #[test]
    fn test_n_five() {
        assert_eq!(generate_n_primes(5), vec![2, 3, 5, 7, 11]);
    }

    #[test]
    fn test_n_ten() {
        assert_eq!(generate_n_primes(10), vec![2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    }

    #[test]
    fn test_n_twenty() {
        let primes = generate_n_primes(20);
        assert_eq!(primes.len(), 20);
        assert_eq!(primes[0], 2);
        assert_eq!(primes[19], 71);
    }

    #[test]
    fn test_n_fifty() {
        let primes = generate_n_primes(50);
        assert_eq!(primes.len(), 50);
        assert_eq!(primes[49], 229);
    }

    #[test]
    fn test_n_one_hundred() {
        let primes = generate_n_primes(100);
        assert_eq!(primes.len(), 100);
        assert_eq!(primes[99], 541);
    }

    #[test]
    fn test_all_returned_are_prime() {
        let primes = generate_n_primes(50);
        for &p in &primes {
            assert!(is_prime(p), "{} should be prime", p);
        }
    }

    #[test]
    fn test_ascending_order() {
        let primes = generate_n_primes(50);
        for i in 1..primes.len() {
            assert!(primes[i] > primes[i - 1], "Primes should be in ascending order");
        }
    }

    #[test]
    fn test_no_duplicates() {
        let primes = generate_n_primes(50);
        for i in 0..primes.len() {
            for j in i+1..primes.len() {
                assert_ne!(primes[i], primes[j], "Should not have duplicate primes");
            }
        }
    }

    #[test]
    fn test_starts_with_two() {
        let primes = generate_n_primes(10);
        assert_eq!(primes[0], 2, "First prime should be 2");
    }

    #[test]
    fn test_contains_small_primes() {
        let primes = generate_n_primes(10);
        assert!(primes.contains(&2));
        assert!(primes.contains(&3));
        assert!(primes.contains(&5));
        assert!(primes.contains(&7));
    }

    #[test]
    fn test_readme_example() {
        assert_eq!(generate_n_primes(5), vec![2, 3, 5, 7, 11]);
    }

    #[test]
    fn test_medium_n() {
        let primes = generate_n_primes(500);
        assert_eq!(primes.len(), 500);
        assert_eq!(primes[499], 3571);
    }

    #[test]
    fn test_consecutive_primes_have_no_gaps() {
        let primes = generate_n_primes(20);
        for i in 0..primes.len() - 1 {
            let between_count = (primes[i] + 1..primes[i + 1])
                .filter(|&x| is_prime(x))
                .count();
            assert_eq!(between_count, 0, "Should be no primes between consecutive returned primes");
        }
    }
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPrime = isPrime;
/**
 * Determines whether a given number is prime.
 *
 * A prime number is a natural number greater than 1 that has no positive divisors
 * other than 1 and itself.
 *
 * Time Complexity: O(√n)
 * - We only check divisors up to √n because if n has a divisor greater than √n,
 *   it must also have a corresponding divisor less than √n.
 *
 * Optimizations:
 * - Handle edge cases (n ≤ 1, n = 2, n = 3) immediately
 * - Check divisibility by 2 and 3 first
 * - Only check numbers of the form 6k ± 1, as all primes > 3 are of this form
 *
 * @param n - The number to test for primality
 * @returns true if n is prime, false otherwise
 */
function isPrime(n) {
    // Edge cases: numbers less than or equal to 1 are not prime
    if (n <= 1) {
        return false;
    }
    // 2 and 3 are prime
    if (n <= 3) {
        return true;
    }
    // Numbers divisible by 2 or 3 are not prime
    if (n % 2 === 0 || n % 3 === 0) {
        return false;
    }
    // Check for divisors of the form 6k ± 1 up to √n
    // All primes > 3 can be expressed as 6k ± 1
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=isPrime.js.map
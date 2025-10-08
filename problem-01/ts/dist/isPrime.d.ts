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
export declare function isPrime(n: number): boolean;
//# sourceMappingURL=isPrime.d.ts.map
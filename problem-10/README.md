# Problem 10: Miller-Rabin Primality Test

**Context:** For very large numbers (hundreds of digits), deterministic primality tests like trial division are too slow. The Miller-Rabin test is a probabilistic algorithm that can quickly determine if a number is composite or *probably* prime.

**Task:** Implement the Miller-Rabin primality test.

**Signature:**

```ts
function millerRabin(n: number, k: number): boolean
// n: number to test
// k: number of rounds (higher k = more confidence)
```

**Mathematical foundation:**

For an odd number n = 2^r × d + 1 (where d is odd):
- If n is prime, then for any "witness" a where 1 < a < n:
  - Either: a^d ≡ 1 (mod n)
  - Or: a^(2^i × d) ≡ -1 (mod n) for some i where 0 ≤ i < r

If neither condition holds, then a is a "witness" that n is composite.

**Algorithm outline:**

1. Handle base cases (n ≤ 3, even numbers)
2. Write n-1 as 2^r × d (find r and d)
3. Repeat k times:
   - Pick random witness a in range [2, n-2]
   - Compute x = a^d mod n
   - If x = 1 or x = n-1, continue to next round
   - Repeat r-1 times: x = x^2 mod n
     - If x = n-1, continue to next round
     - If x = 1, return composite
   - Return composite
4. If all rounds pass, return probably prime

**Questions to consider:**

1. What is modular exponentiation and why is it needed?
2. Why does the test need to be repeated k times?
3. What's the probability a composite number passes one round?
4. Are there deterministic witness sets for numbers below certain bounds?
5. How does this compare to trial division for large numbers?

**Test cases:**

```
// Known primes
millerRabin(17, 5)        → true
millerRabin(97, 5)        → true
millerRabin(1009, 5)      → true
millerRabin(15485863, 5)  → true (millionth prime)

// Known composites
millerRabin(15, 5)        → false
millerRabin(221, 5)       → false (13 × 17)
millerRabin(561, 5)       → false (Carmichael number)

// Large primes (if your language supports)
millerRabin(2^31-1, 5)    → true (Mersenne prime)
```

**Implementation tips:**

1. **Modular exponentiation**: Implement `modPow(base, exp, mod)` using fast exponentiation:
```ts
function modPow(base: bigint, exp: bigint, mod: bigint): bigint {
  let result = 1n
  base = base % mod
  while (exp > 0n) {
    if (exp % 2n === 1n) result = (result * base) % mod
    exp = exp >> 1n
    base = (base * base) % mod
  }
  return result
}
```

2. **Decompose n-1**: Find r and d such that n-1 = 2^r × d

3. **Use BigInt**: For large numbers, regular integers will overflow

**Extensions:**

* Implement deterministic Miller-Rabin (specific witnesses for ranges)
* Compare performance with trial division at various number sizes
* Test Carmichael numbers (composites that fool many primality tests)
* Implement Lucas-Lehmer test for Mersenne primes specifically
* Create a hybrid: Miller-Rabin for large numbers, deterministic for small

**Error rate:**

With k rounds, the probability of incorrectly identifying a composite as prime is at most 4^(-k):
- k = 5: error rate ≤ 1/1024
- k = 10: error rate ≤ 1/1,048,576

**Deterministic witnesses:**

For numbers below certain bounds, specific witness sets guarantee correctness:
- n < 2,047: witnesses [2]
- n < 1,373,653: witnesses [2, 3]
- n < 9,080,191: witnesses [31, 73]
- n < 4,759,123,141: witnesses [2, 7, 61]

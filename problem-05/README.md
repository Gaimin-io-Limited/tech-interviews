# Problem 5: Prime Factorization

**Task:** Given a number, find its prime factorization - express it as a product of prime numbers.

**Signature:**

```ts
function primeFactorization(n: number): number[]
// or
function primeFactorization(n: number): Map<number, number> // prime -> count
```

**Requirements:**

* Return the prime factors in ascending order
* Handle edge cases (n ≤ 1)
* Start with trial division, then optimize

**Questions to consider:**

1. What's the worst-case time complexity? When does it occur?
2. Can you use your previous primality test or sieve to optimize this?
3. How does checking up to √n help here?
4. What optimization can you apply after finding the first factor?
5. (Advanced) What is wheel factorization and how does it help?

**Test cases:**

```
primeFactorization(12)   → [2, 2, 3]
primeFactorization(17)   → [17]
primeFactorization(100)  → [2, 2, 5, 5]
primeFactorization(315)  → [3, 3, 5, 7]
primeFactorization(1)    → []
```

**Extensions:**

* Return factors with their multiplicities: `{2: 2, 5: 2}` for 100
* Handle very large numbers efficiently
* Implement Pollard's rho algorithm for large prime factors

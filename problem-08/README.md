# Problem 8: Finding the nth Prime Number

**Task:** Find the nth prime number without generating all primes from 1 to n.

**Signature:**

```ts
function nthPrime(n: number): number
```

**Context:** The millionth prime is 15,485,863. Generating all primes up to that number is inefficient. Can you find the nth prime more cleverly?

**Key insight:** The Prime Number Theorem gives us an approximation:
- The nth prime ≈ n × ln(n) for large n
- More accurate: n × (ln(n) + ln(ln(n)) - 1)

**Strategy:**

1. Use the Prime Number Theorem to estimate the upper bound
2. Generate primes up to that bound using an efficient sieve
3. Return the nth prime from the list
4. (Optional) Refine the bound if initial estimate is too low

**Questions to consider:**

1. How accurate is the Prime Number Theorem approximation?
2. What margin should you add to ensure you don't underestimate?
3. When does it make sense to use this vs simply generating all primes?
4. How can you handle edge cases (n = 1, 2, 3)?
5. Can you optimize for repeated queries (caching)?

**Test cases:**

```
nthPrime(1)        → 2
nthPrime(10)       → 29
nthPrime(100)      → 541
nthPrime(1000)     → 7919
nthPrime(10000)    → 104729
nthPrime(100000)   → 1299709
nthPrime(1000000)  → 15485863
```

**Extensions:**

* Implement bounds checking and retry if estimate is too low
* Add caching to handle multiple queries efficiently
* Compare performance with naive approach for various values of n
* Use binary search with prime counting to avoid generating too many primes
* Handle very large n (> 10^9) with advanced approximations

**Advanced optimization:**

Instead of generating all primes, you could:
1. Estimate upper bound U
2. Use prime counting function to count primes up to U
3. Binary search to find the exact nth prime

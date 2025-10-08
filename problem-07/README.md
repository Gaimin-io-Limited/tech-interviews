# Problem 7: Segmented Sieve of Eratosthenes

**Context:** The standard Sieve of Eratosthenes works well for finding all primes up to a limit, but what if you need primes in a specific range [L, R] where R is very large (like 10^12)? You can't allocate an array that large. The segmented sieve solves this by processing the range in segments.

**Task:** Implement a segmented sieve to find all primes in the range [L, R].

**Signature:**

```ts
function segmentedSieve(L: number, R: number): number[]
```

**Key insight:** To mark composites in range [L, R], you only need primes up to √R. These "base primes" can be found with a standard sieve.

**Algorithm outline:**

1. Use standard sieve to find all primes up to √R
2. Create a boolean array for the range [L, R] (size R - L + 1)
3. For each base prime p, mark its multiples in [L, R]
4. Collect unmarked numbers as primes

**Questions to consider:**

1. How do you find the first multiple of p that's ≥ L?
2. What's the space complexity compared to standard sieve?
3. Can you process [L, R] in even smaller chunks for better cache efficiency?
4. How do you handle the edge case when L = 1?
5. What's the time complexity in terms of L and R?

**Test cases:**

```
segmentedSieve(10, 30)      → [11, 13, 17, 19, 23, 29]
segmentedSieve(100, 150)    → [101, 103, 107, 109, 113, 127, 131, 137, 139, 149]
segmentedSieve(1, 20)       → [2, 3, 5, 7, 11, 13, 17, 19]

// Large range examples
segmentedSieve(1000000, 1000100)
segmentedSieve(10^12, 10^12 + 1000)  // If your language supports big integers
```

**Extensions:**

* Optimize memory by processing the range in smaller segments
* Handle very large numbers (beyond standard integer limits)
* Parallelize the sieving across segments
* Compare performance with standard sieve for various range sizes

# Problem 3: Sieve of Eratosthenes

**Context:** For finding all primes up to a limit, repeatedly testing individual numbers is inefficient. There's a better approach: instead of testing whether each number is prime, what if we systematically eliminate numbers we know are composite?

**Task:** Implement the Sieve of Eratosthenes to find all primes up to a given limit.

**Signature:**

```ts
function sieveOfEratosthenes(limit: number): number[]
```

**Key insight:** If a number p is prime, then all multiples of p (2p, 3p, 4p, ...) must be composite.

**Questions to guide your thinking:**

1. What data structure would help you track which numbers have been eliminated?
2. When marking multiples of a prime p, can you start somewhere other than 2p?
3. Do you need to check all numbers up to the limit, or can you stop earlier?
4. What's the time and space complexity of your approach?

**Example for limit=30:**

```
Start:    2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30
Mark 2x:  2  3  ✗  5  ✗  7  ✗  9  ✗  11 ✗  13 ✗  15 ✗  17 ✗  19 ✗  21 ✗  23 ✗  25 ✗  27 ✗  29 ✗
Mark 3x:  2  3  ✗  5  ✗  7  ✗  ✗  ✗  11 ✗  13 ✗  ✗  ✗  17 ✗  19 ✗  ✗  ✗  23 ✗  25 ✗  ✗  ✗  29 ✗
Mark 5x:  2  3  ✗  5  ✗  7  ✗  ✗  ✗  11 ✗  13 ✗  ✗  ✗  17 ✗  19 ✗  ✗  ✗  23 ✗  ✗  ✗  ✗  ✗  29 ✗
Result: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```

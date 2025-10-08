# Problem 6: Twin Primes and Prime Gaps

**Context:** Twin primes are pairs of primes that differ by 2 (like 3 and 5, or 11 and 13). The gaps between consecutive primes reveal interesting patterns about prime distribution.

**Task:** Analyze prime number patterns by finding twin primes and computing prime gaps.

**Signatures:**

```ts
function findTwinPrimes(limit: number): [number, number][]
function findLargestPrimeGap(limit: number): { gap: number, primes: [number, number] }
function primeGaps(limit: number): number[]
```

**Requirements:**

* Find all twin prime pairs up to a given limit
* Find the largest gap between consecutive primes up to the limit
* Return the gap sizes between consecutive primes

**Questions to consider:**

1. Can you reuse your sieve implementation from Problem 3?
2. What's the time complexity if you generate primes first vs checking as you go?
3. Are there other interesting prime patterns (cousin primes, sexy primes)?
4. How does the average prime gap grow as numbers get larger?

**Test cases:**

```
findTwinPrimes(20)     → [[3,5], [5,7], [11,13], [17,19]]
findTwinPrimes(100)    → [[3,5], [5,7], [11,13], [17,19], [29,31], [41,43], [59,61], [71,73]]

findLargestPrimeGap(100)  → { gap: 8, primes: [89, 97] }
findLargestPrimeGap(1000) → { gap: 20, primes: [887, 907] }

primeGaps(30)  → [1, 2, 2, 4, 2, 4, 2, 4, 6, 2]
```

**Extensions:**

* Find cousin primes (differ by 4): (3,7), (7,11), (13,17)...
* Find sexy primes (differ by 6): (5,11), (7,13), (11,17)...
* Analyze the distribution of gap sizes
* Implement Bertrand's postulate verification: there's always a prime between n and 2n

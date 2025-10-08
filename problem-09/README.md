# Problem 9: Prime Counting Function π(x)

**Context:** The prime counting function π(x) counts how many primes are ≤ x. While you could generate all primes and count them, there are more efficient algorithms that count without generating.

**Task:** Implement an efficient prime counting function.

**Signature:**

```ts
function primeCount(x: number): number
```

**Approaches:**

### **Level 1: Naive (Generate and Count)**
Use a sieve to generate all primes up to x, then return the count.

### **Level 2: Legendre's Formula**
Uses inclusion-exclusion principle:
```
π(x) = π(√x) + φ(x, π(√x)) - 1
```
where φ(x, a) counts numbers ≤ x not divisible by the first a primes.

### **Level 3: Meissel-Lehmer Algorithm (Advanced)**
A sophisticated dynamic programming approach that computes π(x) in O(x^(2/3)) time and O(x^(1/3)) space.

**Questions to consider:**

1. For what range of x is the sieve approach acceptable?
2. How does Legendre's formula avoid generating all primes?
3. What data structures help implement φ(x, a) efficiently?
4. Can you use memoization to speed up recursive counting?
5. What's the theoretical lower bound on time complexity for this problem?

**Test cases:**

```
primeCount(10)      → 4       // [2, 3, 5, 7]
primeCount(100)     → 25
primeCount(1000)    → 168
primeCount(10000)   → 1229
primeCount(100000)  → 9592
primeCount(1000000) → 78498
```

**Implementation guidance:**

Start with the sieve approach, then try Legendre's formula:

```
φ(x, a) = number of integers ≤ x not divisible by first a primes

Base cases:
- φ(x, 0) = x (no primes removed)
- φ(x, a) = 0 if x < 1

Recursive case:
- φ(x, a) = φ(x, a-1) - φ(x / p_a, a-1)
  where p_a is the ath prime
```

**Extensions:**

* Implement Meissel-Lehmer algorithm
* Add memoization to optimize recursive calls
* Handle very large x (> 10^12)
* Compare performance across different approaches
* Implement prime counting for ranges: π(a, b) = π(b) - π(a-1)

**Resources for understanding:**

* Legendre's formula uses the principle that φ(x, a) removes multiples of the first a primes
* Meissel improved this by combining multiple techniques
* Lehmer optimized further with clever combinatorics

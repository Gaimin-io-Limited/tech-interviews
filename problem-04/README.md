# Problem 4: Sieve of Sundaram

**Context:** The Sieve of Eratosthenes works well, but notice that except for 2, all primes are odd. What if we could design a sieve that only considers odd numbers?

**Task:** Implement the Sieve of Sundaram.

**Signature:**

```ts
function sieveOfSundaram(limit: number): number[]
```

**Mathematical foundation:**

Every odd composite number can be expressed as the product of two odd numbers. If we write those as (2i + 1) and (2j + 1), we get:

```
(2i + 1)(2j + 1) = 4ij + 2i + 2j + 1 = 2(2ij + i + j) + 1
```

This tells us that every odd composite has the form 2k + 1, where k = i + j + 2ij.

**Key insight:** If we can identify all values of k that represent odd composites, then the remaining values represent odd primes.

**Questions to guide your thinking:**

1. What range of i and j values do you need to consider?
2. How does the limit relate to the size of the array you need?
3. After identifying all k values, how do you convert back to prime numbers?
4. What are the time and space complexity compared to Eratosthenes?

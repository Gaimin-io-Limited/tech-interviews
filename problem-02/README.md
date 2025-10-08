# Problem 2: Generating Prime Sequences

**Task:** Using your primality test, generate the first N prime numbers.

**Signature:**

```ts
function generateNPrimes(n: number): number[]
```

**Requirements:**

* Return exactly N prime numbers
* Start from the first prime (2)

**Questions to consider:**

1. What's the time complexity of this approach?
2. If N = 100,000, would this be efficient?
3. What inefficiencies exist in this approach? What work is being repeated?

**Test cases:**

```
generateNPrimes(5)  → [2, 3, 5, 7, 11]
generateNPrimes(10) → [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
```

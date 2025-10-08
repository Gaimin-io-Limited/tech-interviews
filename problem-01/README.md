# Problem 1: Basic Primality Testing

**Task:** Implement a function that determines whether a given number is prime.

**Signature:**

```ts
function isPrime(n: number): boolean
```

**Requirements:**

* Handle edge cases appropriately (negative numbers, 0, 1, 2)
* Implement the most straightforward algorithm first
* Optimize for efficiency

**Questions to consider:**

1. What's the time complexity of your implementation?
2. Why is checking divisors up to √n sufficient?
3. Can you optimize to skip certain divisors?

**Test cases:**

```
isPrime(2)   → true
isPrime(17)  → true
isPrime(100) → false
isPrime(1)   → false
```

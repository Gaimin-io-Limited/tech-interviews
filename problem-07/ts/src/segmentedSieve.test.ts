import { segmentedSieve } from './segmentedSieve';

describe('segmentedSieve', () => {
  describe('edge cases', () => {
    test('should return empty array when L > R', () => {
      expect(segmentedSieve(10, 5)).toEqual([]);
    });

    test('should return empty array when R < 2', () => {
      expect(segmentedSieve(0, 1)).toEqual([]);
      expect(segmentedSieve(1, 1)).toEqual([]);
    });

    test('should handle L = R for a prime', () => {
      expect(segmentedSieve(7, 7)).toEqual([7]);
      expect(segmentedSieve(11, 11)).toEqual([11]);
    });

    test('should handle L = R for a composite', () => {
      expect(segmentedSieve(4, 4)).toEqual([]);
      expect(segmentedSieve(9, 9)).toEqual([]);
    });

    test('should handle L = 2', () => {
      expect(segmentedSieve(2, 10)).toEqual([2, 3, 5, 7]);
    });
  });

  describe('README test cases', () => {
    test('should find primes from 10 to 30', () => {
      expect(segmentedSieve(10, 30)).toEqual([11, 13, 17, 19, 23, 29]);
    });

    test('should find primes from 100 to 150', () => {
      expect(segmentedSieve(100, 150)).toEqual([
        101, 103, 107, 109, 113, 127, 131, 137, 139, 149
      ]);
    });

    test('should find primes from 1 to 20', () => {
      expect(segmentedSieve(1, 20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });
  });

  describe('small ranges', () => {
    test('should find primes from 20 to 40', () => {
      expect(segmentedSieve(20, 40)).toEqual([23, 29, 31, 37]);
    });

    test('should find primes from 50 to 70', () => {
      expect(segmentedSieve(50, 70)).toEqual([53, 59, 61, 67]);
    });

    test('should find primes from 1 to 10', () => {
      expect(segmentedSieve(1, 10)).toEqual([2, 3, 5, 7]);
    });

    test('should handle range with no primes', () => {
      expect(segmentedSieve(24, 28)).toEqual([]);
    });
  });

  describe('medium ranges', () => {
    test('should find correct number of primes from 1 to 100', () => {
      const result = segmentedSieve(1, 100);
      expect(result.length).toBe(25);
    });

    test('should find primes from 200 to 300', () => {
      const result = segmentedSieve(200, 300);
      expect(result.length).toBe(16);
    });

    test('should find primes from 500 to 600', () => {
      const result = segmentedSieve(500, 600);
      expect(result.length).toBe(14);
    });
  });

  describe('large ranges', () => {
    test('should find primes from 1000000 to 1000100', () => {
      const result = segmentedSieve(1000000, 1000100);
      expect(result.length).toBe(6);
      expect(result).toEqual([1000003, 1000033, 1000037, 1000039, 1000081, 1000099]);
    });

    test('should find primes from 10000 to 10100', () => {
      const result = segmentedSieve(10000, 10100);
      expect(result.length).toBe(11);
    });

    test('should find correct number of primes from 1 to 10000', () => {
      const result = segmentedSieve(1, 10000);
      expect(result.length).toBe(1229);
    });
  });

  describe('prime properties', () => {
    test('all returned numbers should be prime', () => {
      const result = segmentedSieve(50, 150);
      result.forEach(n => {
        expect(isPrimeHelper(n)).toBe(true);
      });
    });

    test('results should be in ascending order', () => {
      const result = segmentedSieve(1, 100);
      for (let i = 1; i < result.length; i++) {
        expect(result[i]).toBeGreaterThan(result[i - 1]);
      }
    });

    test('all results should be within the specified range', () => {
      const L = 100, R = 200;
      const result = segmentedSieve(L, R);
      result.forEach(n => {
        expect(n).toBeGreaterThanOrEqual(L);
        expect(n).toBeLessThanOrEqual(R);
      });
    });

    test('should not miss any primes in range', () => {
      const L = 1, R = 50;
      const result = segmentedSieve(L, R);
      const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
      expect(result).toEqual(expected);
    });
  });

  describe('comparison with full sieve', () => {
    test('should match standard sieve for small ranges', () => {
      const result = segmentedSieve(1, 100);
      const expected = standardSieveReference(100);
      expect(result).toEqual(expected);
    });

    test('should match expected primes for range [30, 60]', () => {
      const result = segmentedSieve(30, 60);
      const allPrimes = standardSieveReference(60);
      const expected = allPrimes.filter(p => p >= 30);
      expect(result).toEqual(expected);
    });
  });

  describe('special ranges', () => {
    test('should handle range starting with a prime', () => {
      expect(segmentedSieve(11, 20)).toEqual([11, 13, 17, 19]);
    });

    test('should handle range starting with composite', () => {
      expect(segmentedSieve(12, 20)).toEqual([13, 17, 19]);
    });

    test('should handle very small ranges', () => {
      expect(segmentedSieve(2, 2)).toEqual([2]);
      expect(segmentedSieve(3, 3)).toEqual([3]);
      expect(segmentedSieve(2, 3)).toEqual([2, 3]);
    });
  });
});

// Helper function to check if a number is prime (for validation)
function isPrimeHelper(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Reference implementation using standard sieve
function standardSieveReference(limit: number): number[] {
  if (limit < 2) return [];
  const isPrime = new Array(limit + 1).fill(true);
  isPrime[0] = isPrime[1] = false;

  for (let i = 2; i * i <= limit; i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= limit; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes: number[] = [];
  for (let i = 2; i <= limit; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }
  return primes;
}

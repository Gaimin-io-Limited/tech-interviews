import { nthPrime } from './nthPrime';

describe('nthPrime', () => {
  describe('edge cases', () => {
    test('should throw error for n < 1', () => {
      expect(() => nthPrime(0)).toThrow('n must be at least 1');
      expect(() => nthPrime(-1)).toThrow('n must be at least 1');
    });

    test('should return 2 for n = 1', () => {
      expect(nthPrime(1)).toBe(2);
    });

    test('should return 3 for n = 2', () => {
      expect(nthPrime(2)).toBe(3);
    });

    test('should return 5 for n = 3', () => {
      expect(nthPrime(3)).toBe(5);
    });
  });

  describe('README test cases', () => {
    test('should find the 1st prime', () => {
      expect(nthPrime(1)).toBe(2);
    });

    test('should find the 10th prime', () => {
      expect(nthPrime(10)).toBe(29);
    });

    test('should find the 100th prime', () => {
      expect(nthPrime(100)).toBe(541);
    });

    test('should find the 1000th prime', () => {
      expect(nthPrime(1000)).toBe(7919);
    });

    test('should find the 10000th prime', () => {
      expect(nthPrime(10000)).toBe(104729);
    });

    test('should find the 100000th prime', () => {
      expect(nthPrime(100000)).toBe(1299709);
    });

    test('should find the 1000000th prime', () => {
      expect(nthPrime(1000000)).toBe(15485863);
    }, 30000);
  });

  describe('small values', () => {
    test('should find first 10 primes correctly', () => {
      const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
      for (let i = 1; i <= 10; i++) {
        expect(nthPrime(i)).toBe(expected[i - 1]);
      }
    });

    test('should find primes 11-20', () => {
      expect(nthPrime(11)).toBe(31);
      expect(nthPrime(15)).toBe(47);
      expect(nthPrime(20)).toBe(71);
    });

    test('should find the 25th prime', () => {
      expect(nthPrime(25)).toBe(97);
    });

    test('should find the 50th prime', () => {
      expect(nthPrime(50)).toBe(229);
    });
  });

  describe('medium values', () => {
    test('should find the 500th prime', () => {
      expect(nthPrime(500)).toBe(3571);
    });

    test('should find the 5000th prime', () => {
      expect(nthPrime(5000)).toBe(48611);
    });

    test('should find the 200th prime', () => {
      expect(nthPrime(200)).toBe(1223);
    });
  });

  describe('large values', () => {
    test('should find the 50000th prime', () => {
      expect(nthPrime(50000)).toBe(611953);
    }, 10000);

    test('should find the 500000th prime', () => {
      expect(nthPrime(500000)).toBe(7368787);
    }, 20000);
  });

  describe('prime properties', () => {
    test('returned values should be prime', () => {
      const testCases = [1, 10, 50, 100, 500];
      testCases.forEach(n => {
        const prime = nthPrime(n);
        expect(isPrimeHelper(prime)).toBe(true);
      });
    });

    test('should return increasing values for increasing n', () => {
      const values = [1, 10, 20, 30, 40, 50];
      for (let i = 1; i < values.length; i++) {
        expect(nthPrime(values[i])).toBeGreaterThan(nthPrime(values[i - 1]));
      }
    });

    test('consecutive nth primes should have no primes between them', () => {
      const n = 20;
      const prime1 = nthPrime(n);
      const prime2 = nthPrime(n + 1);

      let hasIntermediatePrime = false;
      for (let i = prime1 + 1; i < prime2; i++) {
        if (isPrimeHelper(i)) {
          hasIntermediatePrime = true;
          break;
        }
      }
      expect(hasIntermediatePrime).toBe(false);
    });
  });

  describe('consistency checks', () => {
    test('should return same result on repeated calls', () => {
      const n = 100;
      const result1 = nthPrime(n);
      const result2 = nthPrime(n);
      expect(result1).toBe(result2);
    });

    test('should handle boundary cases around powers of 10', () => {
      expect(nthPrime(99)).toBe(523);
      expect(nthPrime(101)).toBe(547);
      expect(nthPrime(999)).toBe(7907);
      expect(nthPrime(1001)).toBe(7927);
    });
  });
});

// Helper function to check if a number is prime
function isPrimeHelper(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

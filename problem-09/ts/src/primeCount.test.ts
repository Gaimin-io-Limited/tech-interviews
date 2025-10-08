import { primeCount } from './primeCount';

describe('primeCount', () => {
  describe('edge cases', () => {
    test('should return 0 for x < 2', () => {
      expect(primeCount(0)).toBe(0);
      expect(primeCount(1)).toBe(0);
      expect(primeCount(-5)).toBe(0);
    });

    test('should return 1 for x = 2', () => {
      expect(primeCount(2)).toBe(1);
    });

    test('should return 2 for x = 3', () => {
      expect(primeCount(3)).toBe(2);
    });

    test('should handle x = 4 (first composite)', () => {
      expect(primeCount(4)).toBe(2);
    });
  });

  describe('README test cases', () => {
    test('should count primes up to 10', () => {
      expect(primeCount(10)).toBe(4);
    });

    test('should count primes up to 100', () => {
      expect(primeCount(100)).toBe(25);
    });

    test('should count primes up to 1000', () => {
      expect(primeCount(1000)).toBe(168);
    });

    test('should count primes up to 10000', () => {
      expect(primeCount(10000)).toBe(1229);
    });

    test('should count primes up to 100000', () => {
      expect(primeCount(100000)).toBe(9592);
    });

    test('should count primes up to 1000000', () => {
      expect(primeCount(1000000)).toBe(78498);
    }, 10000);
  });

  describe('small values', () => {
    test('should count primes up to 20', () => {
      expect(primeCount(20)).toBe(8);
    });

    test('should count primes up to 30', () => {
      expect(primeCount(30)).toBe(10);
    });

    test('should count primes up to 50', () => {
      expect(primeCount(50)).toBe(15);
    });

    test('should handle prime boundaries', () => {
      expect(primeCount(5)).toBe(3);
      expect(primeCount(7)).toBe(4);
      expect(primeCount(11)).toBe(5);
    });

    test('should handle composite boundaries', () => {
      expect(primeCount(6)).toBe(3);
      expect(primeCount(8)).toBe(4);
      expect(primeCount(9)).toBe(4);
    });
  });

  describe('medium values', () => {
    test('should count primes up to 500', () => {
      expect(primeCount(500)).toBe(95);
    });

    test('should count primes up to 5000', () => {
      expect(primeCount(5000)).toBe(669);
    });

    test('should count primes up to 50000', () => {
      expect(primeCount(50000)).toBe(5133);
    });
  });

  describe('properties', () => {
    test('should be monotonically increasing', () => {
      const values = [10, 20, 30, 50, 100, 200, 500];
      for (let i = 1; i < values.length; i++) {
        expect(primeCount(values[i])).toBeGreaterThan(primeCount(values[i - 1]));
      }
    });

    test('should not increase for consecutive composites', () => {
      expect(primeCount(8)).toBe(primeCount(9));
      expect(primeCount(14)).toBe(primeCount(15));
      expect(primeCount(24)).toBe(primeCount(25));
    });

    test('should increase by exactly 1 at each prime', () => {
      const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
      for (const prime of primes) {
        expect(primeCount(prime)).toBe(primeCount(prime - 1) + 1);
      }
    });

    test('should match actual prime list count for small x', () => {
      const x = 30;
      const actualPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29];
      const expectedCount = actualPrimes.filter(p => p <= x).length;
      expect(primeCount(x)).toBe(expectedCount);
    });
  });

  describe('consistency checks', () => {
    test('should return same result on repeated calls', () => {
      const x = 1000;
      const result1 = primeCount(x);
      const result2 = primeCount(x);
      expect(result1).toBe(result2);
    });

    test('should handle powers of 10 correctly', () => {
      expect(primeCount(10)).toBe(4);
      expect(primeCount(100)).toBe(25);
      expect(primeCount(1000)).toBe(168);
    });

    test('should handle boundaries around powers of 2', () => {
      expect(primeCount(16)).toBe(6);
      expect(primeCount(32)).toBe(11);
      expect(primeCount(64)).toBe(18);
      expect(primeCount(128)).toBe(31);
    });
  });

  describe('range differences', () => {
    test('should correctly compute range differences', () => {
      const count0to100 = primeCount(100);
      const count0to50 = primeCount(50);
      const count51to100 = count0to100 - count0to50;
      expect(count51to100).toBe(10);
    });

    test('should handle decade ranges', () => {
      expect(primeCount(20) - primeCount(10)).toBe(4);
      expect(primeCount(30) - primeCount(20)).toBe(2);
    });
  });
});

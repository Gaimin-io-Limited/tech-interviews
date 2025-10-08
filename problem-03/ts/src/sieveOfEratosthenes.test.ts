import { sieveOfEratosthenes } from './sieveOfEratosthenes';

describe('sieveOfEratosthenes', () => {
  describe('edge cases', () => {
    test('should return empty array for limit < 2', () => {
      expect(sieveOfEratosthenes(0)).toEqual([]);
      expect(sieveOfEratosthenes(1)).toEqual([]);
      expect(sieveOfEratosthenes(-5)).toEqual([]);
    });

    test('should return [2] for limit = 2', () => {
      expect(sieveOfEratosthenes(2)).toEqual([2]);
    });

    test('should return [2, 3] for limit = 3', () => {
      expect(sieveOfEratosthenes(3)).toEqual([2, 3]);
    });
  });

  describe('small limits', () => {
    test('should find primes up to 10', () => {
      expect(sieveOfEratosthenes(10)).toEqual([2, 3, 5, 7]);
    });

    test('should find primes up to 20', () => {
      expect(sieveOfEratosthenes(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });

    test('should find primes up to 30', () => {
      expect(sieveOfEratosthenes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });
  });

  describe('medium limits', () => {
    test('should find primes up to 50', () => {
      const result = sieveOfEratosthenes(50);
      expect(result).toHaveLength(15);
      expect(result[0]).toBe(2);
      expect(result[14]).toBe(47);
    });

    test('should find primes up to 100', () => {
      const result = sieveOfEratosthenes(100);
      expect(result).toHaveLength(25);
      expect(result[0]).toBe(2);
      expect(result[24]).toBe(97);
    });
  });

  describe('specific boundaries', () => {
    test('should include limit if it is prime', () => {
      expect(sieveOfEratosthenes(7)).toEqual([2, 3, 5, 7]);
      expect(sieveOfEratosthenes(13)).toEqual([2, 3, 5, 7, 11, 13]);
      expect(sieveOfEratosthenes(97).pop()).toBe(97);
    });

    test('should not include limit if it is composite', () => {
      expect(sieveOfEratosthenes(8)).toEqual([2, 3, 5, 7]);
      expect(sieveOfEratosthenes(9)).toEqual([2, 3, 5, 7]);
      expect(sieveOfEratosthenes(100).pop()).toBe(97);
    });
  });

  describe('array properties', () => {
    test('should return primes in ascending order', () => {
      const primes = sieveOfEratosthenes(100);
      for (let i = 1; i < primes.length; i++) {
        expect(primes[i]).toBeGreaterThan(primes[i - 1]);
      }
    });

    test('should return unique values', () => {
      const primes = sieveOfEratosthenes(100);
      const uniquePrimes = new Set(primes);
      expect(uniquePrimes.size).toBe(primes.length);
    });

    test('should always start with 2', () => {
      expect(sieveOfEratosthenes(2)[0]).toBe(2);
      expect(sieveOfEratosthenes(10)[0]).toBe(2);
      expect(sieveOfEratosthenes(100)[0]).toBe(2);
    });
  });

  describe('larger limits', () => {
    test('should efficiently handle limit of 1000', () => {
      const result = sieveOfEratosthenes(1000);
      expect(result).toHaveLength(168);
      expect(result[0]).toBe(2);
      expect(result[167]).toBe(997);
    });

    test('should efficiently handle limit of 10000', () => {
      const result = sieveOfEratosthenes(10000);
      expect(result).toHaveLength(1229);
      expect(result[0]).toBe(2);
      expect(result[1228]).toBe(9973);
    });
  });

  describe('correctness verification', () => {
    test('should not include any composite numbers', () => {
      const primes = sieveOfEratosthenes(50);
      const composites = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30];

      composites.forEach(composite => {
        expect(primes).not.toContain(composite);
      });
    });

    test('should include all known primes in range', () => {
      const primes = sieveOfEratosthenes(50);
      const knownPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

      expect(primes).toEqual(knownPrimes);
    });
  });

  describe('provided test case from README', () => {
    test('should find primes up to 30 as shown in example', () => {
      expect(sieveOfEratosthenes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });
  });
});

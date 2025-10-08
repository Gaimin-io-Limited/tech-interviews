import { sieveOfSundaram } from './sieveOfSundaram';

describe('sieveOfSundaram', () => {
  describe('edge cases', () => {
    test('should return empty array for limit < 2', () => {
      expect(sieveOfSundaram(0)).toEqual([]);
      expect(sieveOfSundaram(1)).toEqual([]);
      expect(sieveOfSundaram(-5)).toEqual([]);
    });

    test('should return [2] for limit = 2', () => {
      expect(sieveOfSundaram(2)).toEqual([2]);
    });

    test('should return [2, 3] for limit = 3', () => {
      expect(sieveOfSundaram(3)).toEqual([2, 3]);
    });
  });

  describe('small limits', () => {
    test('should find primes up to 10', () => {
      expect(sieveOfSundaram(10)).toEqual([2, 3, 5, 7]);
    });

    test('should find primes up to 20', () => {
      expect(sieveOfSundaram(20)).toEqual([2, 3, 5, 7, 11, 13, 17, 19]);
    });

    test('should find primes up to 30', () => {
      expect(sieveOfSundaram(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });
  });

  describe('medium limits', () => {
    test('should find primes up to 50', () => {
      const result = sieveOfSundaram(50);
      expect(result).toHaveLength(15);
      expect(result[0]).toBe(2);
      expect(result[14]).toBe(47);
    });

    test('should find primes up to 100', () => {
      const result = sieveOfSundaram(100);
      expect(result).toHaveLength(25);
      expect(result[0]).toBe(2);
      expect(result[24]).toBe(97);
    });
  });

  describe('specific boundaries', () => {
    test('should include limit if it is prime', () => {
      expect(sieveOfSundaram(7)).toEqual([2, 3, 5, 7]);
      expect(sieveOfSundaram(13)).toEqual([2, 3, 5, 7, 11, 13]);
      expect(sieveOfSundaram(97).pop()).toBe(97);
    });

    test('should not include limit if it is composite', () => {
      expect(sieveOfSundaram(8)).toEqual([2, 3, 5, 7]);
      expect(sieveOfSundaram(9)).toEqual([2, 3, 5, 7]);
      expect(sieveOfSundaram(100).pop()).toBe(97);
    });
  });

  describe('array properties', () => {
    test('should return primes in ascending order', () => {
      const primes = sieveOfSundaram(100);
      for (let i = 1; i < primes.length; i++) {
        expect(primes[i]).toBeGreaterThan(primes[i - 1]);
      }
    });

    test('should return unique values', () => {
      const primes = sieveOfSundaram(100);
      const uniquePrimes = new Set(primes);
      expect(uniquePrimes.size).toBe(primes.length);
    });

    test('should always start with 2', () => {
      expect(sieveOfSundaram(2)[0]).toBe(2);
      expect(sieveOfSundaram(10)[0]).toBe(2);
      expect(sieveOfSundaram(100)[0]).toBe(2);
    });
  });

  describe('larger limits', () => {
    test('should efficiently handle limit of 1000', () => {
      const result = sieveOfSundaram(1000);
      expect(result).toHaveLength(168);
      expect(result[0]).toBe(2);
      expect(result[167]).toBe(997);
    });

    test('should efficiently handle limit of 10000', () => {
      const result = sieveOfSundaram(10000);
      expect(result).toHaveLength(1229);
      expect(result[0]).toBe(2);
      expect(result[1228]).toBe(9973);
    });
  });

  describe('correctness verification', () => {
    test('should not include any composite numbers', () => {
      const primes = sieveOfSundaram(50);
      const composites = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28, 30];

      composites.forEach(composite => {
        expect(primes).not.toContain(composite);
      });
    });

    test('should include all known primes in range', () => {
      const primes = sieveOfSundaram(50);
      const knownPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];

      expect(primes).toEqual(knownPrimes);
    });

    test('should include only odd primes except for 2', () => {
      const primes = sieveOfSundaram(100);

      expect(primes[0]).toBe(2);

      for (let i = 1; i < primes.length; i++) {
        expect(primes[i] % 2).toBe(1);
      }
    });
  });

  describe('comparison with known results', () => {
    test('should match expected primes up to 30', () => {
      expect(sieveOfSundaram(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });

    test('should find correct number of primes up to 200', () => {
      const result = sieveOfSundaram(200);
      expect(result).toHaveLength(46);
    });
  });
});

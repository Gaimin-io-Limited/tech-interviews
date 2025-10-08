import { generateNPrimes } from './generateNPrimes';

describe('generateNPrimes', () => {
  describe('edge cases', () => {
    test('should return empty array for n = 0', () => {
      expect(generateNPrimes(0)).toEqual([]);
    });

    test('should return empty array for negative n', () => {
      expect(generateNPrimes(-1)).toEqual([]);
      expect(generateNPrimes(-10)).toEqual([]);
    });

    test('should return single prime for n = 1', () => {
      expect(generateNPrimes(1)).toEqual([2]);
    });

    test('should return two primes for n = 2', () => {
      expect(generateNPrimes(2)).toEqual([2, 3]);
    });
  });

  describe('small sequences', () => {
    test('should generate first 5 primes', () => {
      expect(generateNPrimes(5)).toEqual([2, 3, 5, 7, 11]);
    });

    test('should generate first 10 primes', () => {
      expect(generateNPrimes(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });

    test('should generate first 3 primes', () => {
      expect(generateNPrimes(3)).toEqual([2, 3, 5]);
    });
  });

  describe('medium sequences', () => {
    test('should generate first 20 primes', () => {
      const expected = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];
      expect(generateNPrimes(20)).toEqual(expected);
    });

    test('should generate first 25 primes', () => {
      const result = generateNPrimes(25);
      expect(result).toHaveLength(25);
      expect(result[0]).toBe(2);
      expect(result[24]).toBe(97);
    });
  });

  describe('sequence properties', () => {
    test('should return exactly n primes', () => {
      expect(generateNPrimes(7)).toHaveLength(7);
      expect(generateNPrimes(15)).toHaveLength(15);
      expect(generateNPrimes(50)).toHaveLength(50);
    });

    test('should start with 2', () => {
      expect(generateNPrimes(1)[0]).toBe(2);
      expect(generateNPrimes(5)[0]).toBe(2);
      expect(generateNPrimes(100)[0]).toBe(2);
    });

    test('should return primes in ascending order', () => {
      const primes = generateNPrimes(30);
      for (let i = 1; i < primes.length; i++) {
        expect(primes[i]).toBeGreaterThan(primes[i - 1]);
      }
    });

    test('should contain only unique values', () => {
      const primes = generateNPrimes(50);
      const uniquePrimes = new Set(primes);
      expect(uniquePrimes.size).toBe(primes.length);
    });
  });

  describe('specific prime values', () => {
    test('should include known primes in correct positions', () => {
      const primes = generateNPrimes(100);
      expect(primes[0]).toBe(2);
      expect(primes[1]).toBe(3);
      expect(primes[2]).toBe(5);
      expect(primes[9]).toBe(29);
      expect(primes[24]).toBe(97);
    });

    test('should correctly generate primes up to position 50', () => {
      const primes = generateNPrimes(50);
      expect(primes[49]).toBe(229);
    });
  });

  describe('provided test cases from README', () => {
    test('generateNPrimes(5) should return [2, 3, 5, 7, 11]', () => {
      expect(generateNPrimes(5)).toEqual([2, 3, 5, 7, 11]);
    });

    test('generateNPrimes(10) should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]', () => {
      expect(generateNPrimes(10)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
    });
  });
});

import { isPrime } from './isPrime';

describe('isPrime', () => {
  describe('edge cases', () => {
    test('should return false for negative numbers', () => {
      expect(isPrime(-1)).toBe(false);
      expect(isPrime(-5)).toBe(false);
      expect(isPrime(-100)).toBe(false);
    });

    test('should return false for 0', () => {
      expect(isPrime(0)).toBe(false);
    });

    test('should return false for 1', () => {
      expect(isPrime(1)).toBe(false);
    });

    test('should return true for 2', () => {
      expect(isPrime(2)).toBe(true);
    });

    test('should return true for 3', () => {
      expect(isPrime(3)).toBe(true);
    });
  });

  describe('small primes', () => {
    test('should correctly identify small prime numbers', () => {
      const smallPrimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47];
      smallPrimes.forEach(prime => {
        expect(isPrime(prime)).toBe(true);
      });
    });

    test('should correctly identify small non-prime numbers', () => {
      const smallNonPrimes = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25];
      smallNonPrimes.forEach(nonPrime => {
        expect(isPrime(nonPrime)).toBe(false);
      });
    });
  });

  describe('larger numbers', () => {
    test('should return true for larger prime numbers', () => {
      expect(isPrime(97)).toBe(true);
      expect(isPrime(101)).toBe(true);
      expect(isPrime(541)).toBe(true);
      expect(isPrime(1009)).toBe(true);
      expect(isPrime(7919)).toBe(true);
    });

    test('should return false for larger composite numbers', () => {
      expect(isPrime(100)).toBe(false);
      expect(isPrime(121)).toBe(false);
      expect(isPrime(143)).toBe(false);
      expect(isPrime(1000)).toBe(false);
      expect(isPrime(9999)).toBe(false);
    });
  });

  describe('perfect squares', () => {
    test('should return false for perfect squares', () => {
      expect(isPrime(4)).toBe(false);
      expect(isPrime(9)).toBe(false);
      expect(isPrime(25)).toBe(false);
      expect(isPrime(49)).toBe(false);
      expect(isPrime(121)).toBe(false);
      expect(isPrime(169)).toBe(false);
    });
  });

  describe('additional test cases', () => {
    test('should correctly identify additional primes', () => {
      expect(isPrime(5)).toBe(true);
      expect(isPrime(11)).toBe(true);
      expect(isPrime(17)).toBe(true);
      expect(isPrime(23)).toBe(true);
      expect(isPrime(29)).toBe(true);
      expect(isPrime(7)).toBe(true);
      expect(isPrime(13)).toBe(true);
      expect(isPrime(19)).toBe(true);
      expect(isPrime(31)).toBe(true);
      expect(isPrime(37)).toBe(true);
    });

    test('should correctly identify additional composite numbers', () => {
      expect(isPrime(25)).toBe(false);
      expect(isPrime(35)).toBe(false);
      expect(isPrime(49)).toBe(false);
      expect(isPrime(55)).toBe(false);
    });
  });

  describe('provided test cases from README', () => {
    test('isPrime(2) should return true', () => {
      expect(isPrime(2)).toBe(true);
    });

    test('isPrime(17) should return true', () => {
      expect(isPrime(17)).toBe(true);
    });

    test('isPrime(100) should return false', () => {
      expect(isPrime(100)).toBe(false);
    });

    test('isPrime(1) should return false', () => {
      expect(isPrime(1)).toBe(false);
    });
  });

  describe('divisibility by 2 and 3', () => {
    test('should return false for even numbers > 2', () => {
      expect(isPrime(4)).toBe(false);
      expect(isPrime(100)).toBe(false);
      expect(isPrime(1000)).toBe(false);
    });

    test('should return false for multiples of 3 > 3', () => {
      expect(isPrime(9)).toBe(false);
      expect(isPrime(15)).toBe(false);
      expect(isPrime(99)).toBe(false);
    });
  });
});

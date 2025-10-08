import { primeFactorization } from './primeFactorization';

describe('primeFactorization', () => {
  describe('edge cases', () => {
    test('should return empty array for n = 1', () => {
      expect(primeFactorization(1)).toEqual([]);
    });

    test('should return empty array for n = 0', () => {
      expect(primeFactorization(0)).toEqual([]);
    });

    test('should return empty array for negative numbers', () => {
      expect(primeFactorization(-5)).toEqual([]);
      expect(primeFactorization(-100)).toEqual([]);
    });
  });

  describe('prime numbers', () => {
    test('should return the number itself for small primes', () => {
      expect(primeFactorization(2)).toEqual([2]);
      expect(primeFactorization(3)).toEqual([3]);
      expect(primeFactorization(5)).toEqual([5]);
      expect(primeFactorization(7)).toEqual([7]);
      expect(primeFactorization(11)).toEqual([11]);
    });

    test('should return the number itself for larger primes', () => {
      expect(primeFactorization(17)).toEqual([17]);
      expect(primeFactorization(97)).toEqual([97]);
      expect(primeFactorization(541)).toEqual([541]);
    });
  });

  describe('powers of 2', () => {
    test('should return multiple 2s for powers of 2', () => {
      expect(primeFactorization(2)).toEqual([2]);
      expect(primeFactorization(4)).toEqual([2, 2]);
      expect(primeFactorization(8)).toEqual([2, 2, 2]);
      expect(primeFactorization(16)).toEqual([2, 2, 2, 2]);
      expect(primeFactorization(32)).toEqual([2, 2, 2, 2, 2]);
    });
  });

  describe('powers of other primes', () => {
    test('should return multiple copies of the prime', () => {
      expect(primeFactorization(9)).toEqual([3, 3]);
      expect(primeFactorization(27)).toEqual([3, 3, 3]);
      expect(primeFactorization(25)).toEqual([5, 5]);
      expect(primeFactorization(49)).toEqual([7, 7]);
    });
  });

  describe('composite numbers', () => {
    test('should factorize small composites correctly', () => {
      expect(primeFactorization(6)).toEqual([2, 3]);
      expect(primeFactorization(10)).toEqual([2, 5]);
      expect(primeFactorization(12)).toEqual([2, 2, 3]);
      expect(primeFactorization(15)).toEqual([3, 5]);
      expect(primeFactorization(20)).toEqual([2, 2, 5]);
    });

    test('should factorize medium composites correctly', () => {
      expect(primeFactorization(100)).toEqual([2, 2, 5, 5]);
      expect(primeFactorization(315)).toEqual([3, 3, 5, 7]);
      expect(primeFactorization(360)).toEqual([2, 2, 2, 3, 3, 5]);
    });
  });

  describe('provided test cases from README', () => {
    test('primeFactorization(12) should return [2, 2, 3]', () => {
      expect(primeFactorization(12)).toEqual([2, 2, 3]);
    });

    test('primeFactorization(17) should return [17]', () => {
      expect(primeFactorization(17)).toEqual([17]);
    });

    test('primeFactorization(100) should return [2, 2, 5, 5]', () => {
      expect(primeFactorization(100)).toEqual([2, 2, 5, 5]);
    });

    test('primeFactorization(315) should return [3, 3, 5, 7]', () => {
      expect(primeFactorization(315)).toEqual([3, 3, 5, 7]);
    });

    test('primeFactorization(1) should return []', () => {
      expect(primeFactorization(1)).toEqual([]);
    });
  });

  describe('factor properties', () => {
    test('should return factors in ascending order', () => {
      const factors = primeFactorization(360);
      for (let i = 1; i < factors.length; i++) {
        expect(factors[i]).toBeGreaterThanOrEqual(factors[i - 1]);
      }
    });

    test('product of factors should equal original number', () => {
      const testNumbers = [12, 100, 315, 360, 1001, 2310];
      testNumbers.forEach(n => {
        const factors = primeFactorization(n);
        const product = factors.reduce((acc, f) => acc * f, 1);
        expect(product).toBe(n);
      });
    });

    test('all returned factors should be prime', () => {
      const isPrime = (num: number): boolean => {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
          if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
      };

      const factors = primeFactorization(1001);
      factors.forEach(factor => {
        expect(isPrime(factor)).toBe(true);
      });
    });
  });

  describe('larger numbers', () => {
    test('should handle numbers with large prime factors', () => {
      expect(primeFactorization(221)).toEqual([13, 17]);
      expect(primeFactorization(1001)).toEqual([7, 11, 13]);
    });

    test('should handle semi-primes', () => {
      expect(primeFactorization(35)).toEqual([5, 7]);
      expect(primeFactorization(77)).toEqual([7, 11]);
      expect(primeFactorization(143)).toEqual([11, 13]);
    });

    test('should efficiently factorize numbers up to 10000', () => {
      const result = primeFactorization(9999);
      expect(result).toEqual([3, 3, 11, 101]);
    });
  });

  describe('special patterns', () => {
    test('should handle numbers with many small factors', () => {
      expect(primeFactorization(210)).toEqual([2, 3, 5, 7]);
      expect(primeFactorization(2310)).toEqual([2, 3, 5, 7, 11]);
    });

    test('should handle perfect squares', () => {
      expect(primeFactorization(36)).toEqual([2, 2, 3, 3]);
      expect(primeFactorization(144)).toEqual([2, 2, 2, 2, 3, 3]);
    });
  });
});

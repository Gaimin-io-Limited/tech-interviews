import { millerRabin } from './millerRabin';

describe('millerRabin', () => {
  describe('base cases', () => {
    test('should return false for n <= 1', () => {
      expect(millerRabin(0)).toBe(false);
      expect(millerRabin(1)).toBe(false);
      expect(millerRabin(-5)).toBe(false);
    });

    test('should return true for 2', () => {
      expect(millerRabin(2)).toBe(true);
    });

    test('should return true for 3', () => {
      expect(millerRabin(3)).toBe(true);
    });

    test('should return false for even numbers > 2', () => {
      expect(millerRabin(4)).toBe(false);
      expect(millerRabin(10)).toBe(false);
      expect(millerRabin(100)).toBe(false);
      expect(millerRabin(1000)).toBe(false);
    });
  });

  describe('README test cases - known primes', () => {
    test('should return true for 17', () => {
      expect(millerRabin(17, 5)).toBe(true);
    });

    test('should return true for 97', () => {
      expect(millerRabin(97, 5)).toBe(true);
    });

    test('should return true for 1009', () => {
      expect(millerRabin(1009, 5)).toBe(true);
    });

    test('should return true for 15485863 (millionth prime)', () => {
      expect(millerRabin(15485863, 5)).toBe(true);
    });
  });

  describe('README test cases - known composites', () => {
    test('should return false for 15', () => {
      expect(millerRabin(15, 5)).toBe(false);
    });

    test('should return false for 221 (13 × 17)', () => {
      expect(millerRabin(221, 5)).toBe(false);
    });

    test('should return false for 561 (Carmichael number)', () => {
      expect(millerRabin(561, 5)).toBe(false);
    });
  });

  describe('small primes', () => {
    test('should correctly identify first 20 primes', () => {
      const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71];
      primes.forEach(p => {
        expect(millerRabin(p, 5)).toBe(true);
      });
    });

    test('should correctly identify small composites', () => {
      const composites = [4, 6, 8, 9, 10, 12, 14, 15, 16, 18, 20, 21, 22, 24, 25, 26, 27, 28];
      composites.forEach(c => {
        expect(millerRabin(c, 5)).toBe(false);
      });
    });
  });

  describe('medium primes', () => {
    test('should correctly identify primes up to 1000', () => {
      const primes = [101, 211, 307, 401, 503, 607, 701, 809, 907];
      primes.forEach(p => {
        expect(millerRabin(p, 5)).toBe(true);
      });
    });

    test('should correctly identify composites up to 1000', () => {
      const composites = [102, 210, 306, 400, 502, 606, 700, 808, 906];
      composites.forEach(c => {
        expect(millerRabin(c, 5)).toBe(false);
      });
    });
  });

  describe('large primes', () => {
    test('should correctly identify large primes', () => {
      const largePrimes = [
        10007,
        100003,
        1000003,
        10000019,
      ];
      largePrimes.forEach(p => {
        expect(millerRabin(p, 5)).toBe(true);
      });
    });

    test('should handle Mersenne prime 2^31 - 1', () => {
      const mersennePrime = 2147483647; // 2^31 - 1
      expect(millerRabin(mersennePrime, 5)).toBe(true);
    });
  });

  describe('Carmichael numbers', () => {
    test('should correctly identify Carmichael numbers as composite', () => {
      const carmichaelNumbers = [561, 1105, 1729, 2465, 2821, 6601];
      carmichaelNumbers.forEach(c => {
        expect(millerRabin(c, 5)).toBe(false);
      });
    });
  });

  describe('pseudoprimes', () => {
    test('should correctly identify Fermat pseudoprimes as composite', () => {
      const pseudoprimes = [341, 645, 1387, 1905, 2047];
      pseudoprimes.forEach(p => {
        expect(millerRabin(p, 5)).toBe(false);
      });
    });
  });

  describe('consistency with different k values', () => {
    test('should give consistent results for primes with different k', () => {
      const prime = 97;
      expect(millerRabin(prime, 1)).toBe(true);
      expect(millerRabin(prime, 5)).toBe(true);
      expect(millerRabin(prime, 10)).toBe(true);
    });

    test('should give consistent results for composites with different k', () => {
      const composite = 221;
      expect(millerRabin(composite, 1)).toBe(false);
      expect(millerRabin(composite, 5)).toBe(false);
      expect(millerRabin(composite, 10)).toBe(false);
    });
  });

  describe('BigInt support', () => {
    test('should work with BigInt input', () => {
      expect(millerRabin(17n, 5)).toBe(true);
      expect(millerRabin(97n, 5)).toBe(true);
      expect(millerRabin(15n, 5)).toBe(false);
      expect(millerRabin(221n, 5)).toBe(false);
    });

    test('should handle large BigInt primes', () => {
      const largePrime = 1000000007n;
      expect(millerRabin(largePrime, 5)).toBe(true);
    });
  });

  describe('squares of primes', () => {
    test('should correctly identify squares of primes as composite', () => {
      expect(millerRabin(4, 5)).toBe(false);
      expect(millerRabin(9, 5)).toBe(false);
      expect(millerRabin(25, 5)).toBe(false);
      expect(millerRabin(49, 5)).toBe(false);
      expect(millerRabin(121, 5)).toBe(false);
      expect(millerRabin(169, 5)).toBe(false);
    });
  });

  describe('products of two primes', () => {
    test('should correctly identify semiprimes as composite', () => {
      expect(millerRabin(6, 5)).toBe(false);
      expect(millerRabin(10, 5)).toBe(false);
      expect(millerRabin(15, 5)).toBe(false);
      expect(millerRabin(21, 5)).toBe(false);
      expect(millerRabin(35, 5)).toBe(false);
      expect(millerRabin(77, 5)).toBe(false);
    });
  });

  describe('powers of 2', () => {
    test('should correctly identify powers of 2 as composite (except 2)', () => {
      expect(millerRabin(2, 5)).toBe(true);
      expect(millerRabin(4, 5)).toBe(false);
      expect(millerRabin(8, 5)).toBe(false);
      expect(millerRabin(16, 5)).toBe(false);
      expect(millerRabin(32, 5)).toBe(false);
      expect(millerRabin(64, 5)).toBe(false);
      expect(millerRabin(128, 5)).toBe(false);
    });
  });
});

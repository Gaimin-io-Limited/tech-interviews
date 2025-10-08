import { findTwinPrimes, findLargestPrimeGap, primeGaps } from './primePatterns';

describe('findTwinPrimes', () => {
  describe('edge cases', () => {
    test('should return empty array for limit < 3', () => {
      expect(findTwinPrimes(0)).toEqual([]);
      expect(findTwinPrimes(1)).toEqual([]);
      expect(findTwinPrimes(2)).toEqual([]);
    });

    test('should find twin primes up to 4', () => {
      expect(findTwinPrimes(4)).toEqual([[3, 5]]);
    });
  });

  describe('small limits', () => {
    test('should find twin primes up to 20', () => {
      expect(findTwinPrimes(20)).toEqual([[3, 5], [5, 7], [11, 13], [17, 19]]);
    });

    test('should find twin primes up to 30', () => {
      expect(findTwinPrimes(30)).toEqual([[3, 5], [5, 7], [11, 13], [17, 19], [29, 31]]);
    });
  });

  describe('medium limits', () => {
    test('should find twin primes up to 100', () => {
      expect(findTwinPrimes(100)).toEqual([
        [3, 5], [5, 7], [11, 13], [17, 19], [29, 31], [41, 43], [59, 61], [71, 73]
      ]);
    });

    test('should find correct number of twin primes up to 200', () => {
      const result = findTwinPrimes(200);
      expect(result.length).toBe(15);
    });
  });

  describe('twin prime properties', () => {
    test('all pairs should differ by exactly 2', () => {
      const twins = findTwinPrimes(100);
      twins.forEach(([p1, p2]) => {
        expect(p2 - p1).toBe(2);
      });
    });

    test('pairs should be in ascending order', () => {
      const twins = findTwinPrimes(100);
      for (let i = 1; i < twins.length; i++) {
        expect(twins[i][0]).toBeGreaterThan(twins[i - 1][0]);
      }
    });

    test('should not include overlapping pairs except (3,5) and (5,7)', () => {
      const twins = findTwinPrimes(100);
      const firstPair = twins[0];
      const secondPair = twins[1];

      expect(firstPair).toEqual([3, 5]);
      expect(secondPair).toEqual([5, 7]);
    });
  });
});

describe('findLargestPrimeGap', () => {
  describe('edge cases', () => {
    test('should handle limit with fewer than 2 primes', () => {
      const result = findLargestPrimeGap(1);
      expect(result.gap).toBe(0);
    });

    test('should handle limit = 2', () => {
      const result = findLargestPrimeGap(2);
      expect(result.gap).toBe(0);
    });

    test('should handle limit = 3', () => {
      const result = findLargestPrimeGap(3);
      expect(result.gap).toBe(1);
      expect(result.primes).toEqual([2, 3]);
    });
  });

  describe('small limits', () => {
    test('should find largest gap up to 20', () => {
      const result = findLargestPrimeGap(20);
      expect(result.gap).toBe(4);
      expect(result.primes).toEqual([7, 11]);
    });

    test('should find largest gap up to 50', () => {
      const result = findLargestPrimeGap(50);
      expect(result.gap).toBe(6);
      expect(result.primes).toEqual([23, 29]);
    });
  });

  describe('medium limits', () => {
    test('should find largest gap up to 100', () => {
      const result = findLargestPrimeGap(100);
      expect(result.gap).toBe(8);
      expect(result.primes).toEqual([89, 97]);
    });

    test('should find largest gap up to 1000', () => {
      const result = findLargestPrimeGap(1000);
      expect(result.gap).toBe(20);
      expect(result.primes).toEqual([887, 907]);
    });
  });

  describe('gap properties', () => {
    test('returned primes should be consecutive primes', () => {
      const result = findLargestPrimeGap(100);
      const [p1, p2] = result.primes;
      expect(p2 - p1).toBe(result.gap);
    });

    test('gap should be positive', () => {
      const result = findLargestPrimeGap(100);
      expect(result.gap).toBeGreaterThan(0);
    });
  });
});

describe('primeGaps', () => {
  describe('edge cases', () => {
    test('should return empty array for limit < 2', () => {
      expect(primeGaps(0)).toEqual([]);
      expect(primeGaps(1)).toEqual([]);
    });

    test('should return single gap for limit = 2', () => {
      expect(primeGaps(2)).toEqual([1]);
    });

    test('should return two gaps for limit = 3', () => {
      expect(primeGaps(3)).toEqual([1, 2]);
    });
  });

  describe('small limits', () => {
    test('should compute gaps up to 20', () => {
      expect(primeGaps(20)).toEqual([1, 2, 2, 4, 2, 4, 2, 4]);
    });

    test('should compute gaps up to 30', () => {
      expect(primeGaps(30)).toEqual([1, 2, 2, 4, 2, 4, 2, 4, 6, 2]);
    });
  });

  describe('medium limits', () => {
    test('should compute correct number of gaps up to 100', () => {
      const gaps = primeGaps(100);
      expect(gaps.length).toBe(25);
    });

    test('should compute correct number of gaps up to 1000', () => {
      const gaps = primeGaps(1000);
      expect(gaps.length).toBe(168);
    });
  });

  describe('gap properties', () => {
    test('all gaps should be positive', () => {
      const gaps = primeGaps(100);
      gaps.forEach(gap => {
        expect(gap).toBeGreaterThan(0);
      });
    });

    test('all gaps should be even except the first (between 2 and 3)', () => {
      const gaps = primeGaps(100);
      expect(gaps[0]).toBe(1);

      for (let i = 1; i < gaps.length; i++) {
        expect(gaps[i] % 2).toBe(0);
      }
    });

    test('smallest gap after first should be 2', () => {
      const gaps = primeGaps(100);
      const gapsAfterFirst = gaps.slice(1);
      const minGap = Math.min(...gapsAfterFirst);
      expect(minGap).toBe(2);
    });

    test('should contain the largest gap found by findLargestPrimeGap', () => {
      const gaps = primeGaps(100);
      const largestGapResult = findLargestPrimeGap(100);
      expect(gaps).toContain(largestGapResult.gap);
    });
  });

  describe('provided test case from README', () => {
    test('primeGaps(30) should match expected output', () => {
      expect(primeGaps(30)).toEqual([1, 2, 2, 4, 2, 4, 2, 4, 6, 2]);
    });
  });
});

describe('integration tests', () => {
  test('twin primes should correspond to gaps of 2', () => {
    const limit = 100;
    const twins = findTwinPrimes(limit);
    const gaps = primeGaps(limit);

    const twinCount = twins.length;
    const gap2Count = gaps.filter(g => g === 2).length;

    expect(gap2Count).toBeGreaterThanOrEqual(twinCount);
  });

  test('largest gap should appear in gaps array', () => {
    const limit = 100;
    const largestGap = findLargestPrimeGap(limit);
    const gaps = primeGaps(limit);

    expect(Math.max(...gaps)).toBe(largestGap.gap);
  });
});

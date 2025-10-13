"""
Problem 06: Twin Primes and Prime Gaps

Implement functions to find twin primes, the largest prime gap, and all prime gaps.
"""


def find_twin_primes(limit: int) -> list[tuple[int, int]]:
    """
    Finds all twin prime pairs up to the given limit.

    Twin primes are pairs of primes that differ by 2 (e.g., (3, 5), (5, 7), (11, 13)).
    A pair (p1, p2) is included if p1 <= limit.

    Args:
        limit: The upper limit for the first prime in each pair

    Returns:
        A list of tuples representing twin prime pairs in ascending order

    Examples:
        find_twin_primes(20) -> [(3, 5), (5, 7), (11, 13), (17, 19)]
        find_twin_primes(30) -> [(3, 5), (5, 7), (11, 13), (17, 19), (29, 31)]
    """
    return []


def find_largest_prime_gap(limit: int) -> dict:
    """
    Finds the largest gap between consecutive primes up to the given limit.

    Args:
        limit: The upper limit for finding primes

    Returns:
        A dictionary with 'gap' (int) and 'primes' (tuple of two ints) keys.
        Returns {'gap': 0, 'primes': (0, 0)} if there are fewer than 2 primes.

    Examples:
        find_largest_prime_gap(20) -> {'gap': 4, 'primes': (7, 11)}
        find_largest_prime_gap(100) -> {'gap': 8, 'primes': (89, 97)}
    """
    return {'gap': 0, 'primes': (0, 0)}


def prime_gaps(limit: int) -> list[int]:
    """
    Computes the gaps between consecutive primes up to the given limit.

    The first gap is between 2 and 3 (gap = 1), second gap is between 3 and 5 (gap = 2), etc.
    The function finds all primes up to limit, then includes one more prime beyond limit
    to calculate the gap after the last prime within limit.

    Args:
        limit: The upper limit for finding primes

    Returns:
        A list of gaps between consecutive primes. Returns empty list if limit < 2.
        Returns [1] if limit = 2 (gap from 2 to 3).

    Examples:
        prime_gaps(20) -> [1, 2, 2, 4, 2, 4, 2, 4]
        prime_gaps(30) -> [1, 2, 2, 4, 2, 4, 2, 4, 6, 2]
    """
    return []

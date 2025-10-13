"""
Problem 04: Sieve of Sundaram

Implement the Sieve of Sundaram algorithm to find all prime numbers up to a given limit.
"""


def sieve_of_sundaram(limit: int) -> list[int]:
    """
    Finds all prime numbers up to and including limit using the Sieve of Sundaram.

    The Sieve of Sundaram is an algorithm for finding prime numbers. It works by
    first finding numbers of the form i + j + 2ij where i, j are positive integers,
    and removing them. The remaining numbers, when transformed by 2i + 1, give all
    odd primes. We then add 2 as a special case since it's the only even prime.

    Args:
        limit: The upper bound (inclusive) for finding primes

    Returns:
        A list of all prime numbers up to and including limit, in ascending order
    """
    return []

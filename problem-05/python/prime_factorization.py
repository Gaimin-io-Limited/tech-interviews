"""
Problem 05: Prime Factorization

Implement a function that returns the prime factorization of a given number.
"""


def prime_factorization(n: int) -> list[int]:
    """
    Returns the prime factorization of n.

    The prime factorization of a number is the list of prime numbers that,
    when multiplied together, equal the original number. The list should be
    in ascending order and include repeated factors.

    Args:
        n: The number to factorize

    Returns:
        A list of prime factors in ascending order. Returns empty list for n <= 1.

    Examples:
        prime_factorization(12) -> [2, 2, 3]
        prime_factorization(17) -> [17]
        prime_factorization(100) -> [2, 2, 5, 5]
        prime_factorization(1) -> []
    """
    return []

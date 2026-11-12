# top-down
class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        cache = {0: 0}

        def dp(n):
            if n < 0:
                return float("inf")

            if n == 0:
                return 0

            if n in cache:
                return cache[n]

            minCoins = float("inf")

            for coin in coins:
                amountOfCoins = 1 + dp(n - coin)
                minCoins = min(minCoins, amountOfCoins)

            cache[n] = minCoins

            return minCoins       

        result = dp(amount)

        return result if result != float("inf") else -1

# bottom-up
class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        cache = [float("inf")] * (amount + 1)
        cache[0] = 0

        for n in range(1, amount + 1):
            for coin in coins:
                if n >= coin:
                    cache[n] = min(cache[n], 1 + cache[n - coin])

        return cache[amount] if cache[amount] != float("inf") else -1
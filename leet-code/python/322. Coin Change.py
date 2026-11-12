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
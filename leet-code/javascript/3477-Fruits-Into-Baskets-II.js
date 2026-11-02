/**
 * @param {number[]} fruits
 * @param {number[]} baskets
 * @return {number}
 */
var numOfUnplacedFruits = function (fruits, baskets) {
  const length = fruits.length;
  const basketIndexUsed = new Array(length).fill(false);

  for (let i = 0; i < length; i++) {
    let currentBasketIndex = 0;
    while (currentBasketIndex < length) {
      if (baskets[currentBasketIndex] >= fruits[i] && !basketIndexUsed[currentBasketIndex]) {
        basketIndexUsed[currentBasketIndex] = true;
        break;
      } else {
        currentBasketIndex++;
      }
    }
  }

  let unused = 0;
  for (let i = 0; i < length; i++) {
    if (!basketIndexUsed[i]) {
      unused++;
    }
  }

  return unused;
};

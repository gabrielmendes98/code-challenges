function letterCasePermutation(s: string): string[] {
  const permutations: string[] = [s];

  for (let charIndex in s.split('')) {
    if (isNaN(Number(s[charIndex]))) {
      const aux: string[] = [];

      while (permutations.length) {
        const word = permutations.pop()!.split('');
        let lowerCasePermutation = [...word];
        let upperCasePermutation = [...word];

        lowerCasePermutation[charIndex] =
          lowerCasePermutation[charIndex].toLowerCase();
        upperCasePermutation[charIndex] =
          upperCasePermutation[charIndex].toUpperCase();

        aux.push(lowerCasePermutation.join(''));
        aux.push(upperCasePermutation.join(''));
      }

      permutations.push(...aux);
    }
  }

  return permutations;
}

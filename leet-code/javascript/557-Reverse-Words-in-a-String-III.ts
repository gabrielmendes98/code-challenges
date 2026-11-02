function reverseWord(word: string[]): string {
  let l = 0;
  let r = word.length - 1;
  while (l < r) {
    const aux = word[r];
    word[r] = word[l];
    word[l] = aux;

    r--;
    l++;
  }
  return word.join('');
}

function reverseWords(s: string): string {
  const words = s.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = reverseWord(Array.from(words[i]));
  }
  return words.join(' ');
}

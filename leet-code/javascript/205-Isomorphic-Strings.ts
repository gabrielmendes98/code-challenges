function isIsomorphic(s: string, t: string): boolean {
  const map = {};
  const mapped = {};

  for (let index in s.split('')) {
    const sChar = s[index];
    const tChar = t[index];
    if (
      (map[sChar] && map[sChar] !== tChar) ||
      (mapped[tChar] && mapped[tChar] !== sChar)
    ) {
      return false;
    }
    map[sChar] = tChar;
    mapped[tChar] = sChar;
  }

  return true;
}

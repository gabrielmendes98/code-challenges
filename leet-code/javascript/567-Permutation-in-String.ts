function checkInclusion(s1: string, s2: string): boolean {
  const s1Hash = Array(26).fill(0);
  const s2Hash = Array(26).fill(0);

  const offset = 'a'.charCodeAt(0);

  // populate s1Hash
  for (let char of s1) {
    s1Hash[char.charCodeAt(0) - offset]++;
  }

  // first window check
  for (let i = 0; i < s1.length; i++) {
    s2Hash[s2.charCodeAt(i) - offset]++;
  }

  if (JSON.stringify(s1Hash) === JSON.stringify(s2Hash)) {
    return true;
  }

  // window iteration
  let l = 0;
  let r = s1.length - 1;

  while (s2[r]) {
    s2Hash[s2.charCodeAt(l) - offset]--;
    l++;
    r++;
    s2Hash[s2.charCodeAt(r) - offset]++;

    if (JSON.stringify(s1Hash) === JSON.stringify(s2Hash)) {
      return true;
    }
  }

  return false;
}

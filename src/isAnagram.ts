interface charFrequecyMap {
  [key: string]: number;
}

export function isAnagram(t: string, s: string): boolean {
  const charCountMap: charFrequecyMap = {};
  const tLength: number = t.length;
  const sLength: number = s.length;

  if (tLength !== sLength) return false;

  for (let i: number = 0; i <= tLength - 1; i++) {
    charCountMap[t[i]] = (charCountMap[t[i]] || 0) + 1;
  }

  for (let j: number = 0; j <= sLength - 1; j++) {
    if (!(s[j] in charCountMap)) return false;

    charCountMap[s[j]]--;

    if (charCountMap[s[j]] < 0) return false;
  }

  return true;
}

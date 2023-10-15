export function longestSubstring(s: string): number {
  let start = 0;
  let maxLength = 0;
  const charIndexMap: { [key: string]: number } = {};

  for (let end = 0; end < s.length; end++) {
    const char = s[end];

    if (char in charIndexMap) {
      start = Math.max(start, charIndexMap[char] + 1);
    }

    charIndexMap[char] = end;
    maxLength = Math.max(maxLength, end - start + 1);
  }

  return maxLength;
}

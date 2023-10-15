function preprocessString(s: string): string {
  let result = "#";
  for (const char of s) {
    result += char + "#";
  }
  return result;
}

export function longestPalindromicSubstring(s: string): string {
  const processedString: string = preprocessString(s);
  const length: number = processedString.length;
  let centerIndex: number = 0;
  let rightBoundary: number = 0;
  const radiusArr: number[] = Array(length).fill(0);

  for (let currentIdx: number = 1; currentIdx < length - 1; currentIdx++) {
    // find the mirror index
    const mirrorIdx: number = 2 * centerIndex - currentIdx;

    // init radius at currentIdx
    if (rightBoundary > currentIdx) {
      radiusArr[currentIdx] = Math.min(
        rightBoundary - currentIdx,
        radiusArr[mirrorIdx]
      );
    }

    // attempt to expand
    while (
      currentIdx + (radiusArr[currentIdx] + 1) < length &&
      currentIdx - (radiusArr[currentIdx] + 1) >= 0 &&
      processedString[currentIdx + (radiusArr[currentIdx] + 1)] ===
        processedString[currentIdx - (radiusArr[currentIdx] + 1)]
    ) {
      radiusArr[currentIdx]++;
    }

    // update centerIdx and rightBoundary if necessary
    if (currentIdx + radiusArr[currentIdx] > rightBoundary) {
      centerIndex = currentIdx;
      rightBoundary = currentIdx + radiusArr[currentIdx];
    }
  }

  // extra the palindromic substring
  const maxRadius = Math.max(...radiusArr);
  const maxRadiusIdx: number = radiusArr.indexOf(maxRadius);
  const longestPalindrome: string = processedString.slice(
    maxRadiusIdx - maxRadius,
    maxRadiusIdx + maxRadius + 1
  );

  return longestPalindrome.replace(/#/g, "");
}

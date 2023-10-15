import twoSums from "./twoSums";
import { reverseList } from "./reverseLinkedList";
import { palindromeLinkedList } from "./palindromeLinkedList";
import { threeSum } from "./threeSums";
import { peakElement } from "./peakElement";
import { isAnagram } from "./isAnagram";
import { longestSubstring } from "./longestSubstring";
import { longestPalindromicSubstring } from "./longestPalindromicSubstring";
import { breadthFirstSearch } from "./breadthFirstSearch";
import { quickSort } from "./quickSort";
import { binarySearch } from "./binarySearch";

import { ListNode, arrayToLinkedList } from "./helper/CreateLinkedList";

// twoSums exercise
const input: number[] = [2, 7, 11, 15];
const target: number = 9;
// console.log(twoSums(input, target));

// Linked list exercise
const arr: number[] = [1, 2, 3, 4, 5];
const linkedList: ListNode | null = arrayToLinkedList(arr);
// reverseList(linkedList);

// palindrome linkedList
const arr: number[] = [1, 2, 3, 2, 1];
const linkedList: ListNode | null = arrayToLinkedList(arr);
// console.log(palindromeLinkedList(linkedList));

// palindrome linkedList
const arr: number[] = [-1, 0, 1, 2, -1, -4];
// console.log(threeSum(arr));

//isAnagram
// console.log(isAnagram("listen", "silent"));
// console.log(isAnagram("triangle", "integral"));
// console.log(isAnagram("hello", "world"));

// longestSubstring
const str1: string = "pwwkew";
const str2: string = "bbbb";
// console.log(longestSubstring(str2));

// Find the peak element
const nums: number[] = [1, 2, 3, 1];
// console.log(peakElement(nums));

// longestPalindromicSubstring
const palindromStr1: string = "abba";
// console.log(longestPalindromicSubstring(palindromStr1));

// BFS

const graph = {
  A: ["B", "C"],
  B: ["D"],
  C: ["E"],
  D: ["F"],
  E: [],
  F: []
};

const graph2 = {
  A: ["B", "C"],
  B: ["A", "D", "E"],
  C: ["A", "F"],
  D: ["B"],
  E: ["B", "F"],
  F: ["C", "E"]
};

const node: string = "A";
// console.log(breadthFirstSearch(graph2, node));

// Quicksort
const s: number[] = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSort(s, 0, s.length - 1));

// Binary Search
const bs: number[] = [1, 2, 3, 4, 5, 6, 7];
const target: number = 4;
// console.log(binarySearch(bs, target));
// console.log(binarySearch([1, 2, 3, 4, 5], 3));  // Should return 2
// console.log(binarySearch([1, 2, 3, 4, 5], 6));  // Should return -1

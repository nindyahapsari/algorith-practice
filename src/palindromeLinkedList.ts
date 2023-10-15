import { ListNode } from "./helper/CreateLinkedList";

export function palindromeLinkedList(head: ListNode | null): boolean {
  if (head === null) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast !== null && fast.next !== null) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  let prev: ListNode | null = null;
  let curr: ListNode | null = slow;
  while (curr !== null) {
    let next: ListNode | null = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  let firstHalfPointer: ListNode | null = head;
  let secondHalfPointer: ListNode | null = prev;
  while (firstHalfPointer !== null && secondHalfPointer !== null) {
    if (firstHalfPointer.val !== secondHalfPointer.val) return false;

    firstHalfPointer = firstHalfPointer.next;
    secondHalfPointer = secondHalfPointer.next;
  }

  return true;
}

//time complexity: O(n)
//space complexity: O(1)

import { ListNode } from "./helper/CreateLinkedList";

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;

  let prev: ListNode | null = null;
  let current: ListNode = head;
  let next: ListNode | null = null;

  while (current !== null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  console.log(prev);

  return prev;
}

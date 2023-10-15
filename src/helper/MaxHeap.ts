export class MaxHeap {
  private array: number[];

  constructor() {
    this.array = [];
  }

  insert(value: number): void {
    this.array.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let index: number = this.array.length - 1;
    while (index > 0) {
      let parentIdx: number = Math.floor((index - 1) / 2);
      if (this.array[parentIdx] > this.array[index]) break;
      [this.array[parentIdx], this.array[index]] = [
        this.array[index],
        this.array[parentIdx]
      ];
      index = parentIdx;
    }
  }

  extractMax(): number | null {
    if (this.array.length === 0) return null;
    if (this.array.length === 1) return this.array.pop() as number;
    const max: number = this.array[0];
    this.array[0] = this.array.pop() as number;
    this.sinkDown();
    return max;
  }

  sinkDown(): void {
    let index: number = 0;
    const length: number = this.array.length;
    const element = this.array[0];

    while (true) {
      let leftChildIdx: number = 2 * index + 1;
      let rightChildIdx: number = 2 * index + 2;
      let leftChild: number;
      let rightChild: number;
      let swap: number | null = null;

      if (leftChildIdx < length) {
        leftChild = this.array[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.array[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftChild!)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) {
        break;
      }

      [this.array[index], this.array[swap]] = [
        this.array[swap],
        this.array[index]
      ];
      index = swap;
    }
  }
}

export class MinHeap {
  private array: number[];

  constructor() {
    this.array = [];
  }

  insert(value: number): void {
    this.array.push(value);
    this.bubbleUp();
  }

  bubbleUp(): void {
    let index: number = this.array.length - 1;
    while (index > 0) {
      let parentIndex: number = Math.floor((index - 1) / 2);
      if (this.array[parentIndex] < this.array[index]) break;
      [this.array[parentIndex], this.array[index]] = [
        this.array[index],
        this.array[parentIndex]
      ];
      index = parentIndex;
    }
  }

  extractMin(): number | null {
    if (this.array.length === 0) return null;
    if (this.array.length === 1) return this.array.pop() as number;
    const min: number = this.array[0];
    this.array[0] = this.array.pop() as number;
    this.sinkDown();
    return min;
  }

  sinkDown(): void {
    let index: number = 0;
    const length: number = this.array.length;
    const element = this.array[0];

    while (true) {
      let leftChildIdx: number = 2 * index + 1;
      let rightChildIdx: number = 2 * index + 2;
      let leftChild: number | null = null;
      let rightChild: number | null = null;
      let swap: number | null = null;

      if (leftChildIdx < length) {
        leftChild = this.array[leftChildIdx];
        if (leftChild < element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.array[rightChildIdx];
        if (
          (swap === null && rightChild < element) ||
          (swap !== null && rightChild < leftChild!)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) {
        break;
      }

      [this.array[index], this.array[swap]] = [
        this.array[swap],
        this.array[index]
      ];
      index = swap;
    }
  }
}

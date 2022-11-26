class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(el) {
    this.values.push(el);

    let childrenIdx = this.values.length - 1; // 추가된 요소의 index
    const childrenEl = this.values[childrenIdx];

    // 버블 업
    while (childrenIdx > 0) {
      let parentIdx = Math.floor((childrenIdx - 1) / 2);
      const parentEl = this.values[parentIdx];

      if (childrenEl > parentEl) {
        this.values[parentIdx] = childrenEl;
        this.values[childrenIdx] = parentEl;
        childrenIdx = parentIdx;
      } else {
        break;
      }
    }
    return this.values;
  }

  extractMax() {
    // root제거
    const max = this.values[0];
    const end = this.values.pop();
    this.values[0] = end;

    // 싱크 다운, 버블 다운
    let idx = 0;
    const length = this.values.length;
    const currentEl = this.values[idx];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild > currentEl) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > currentEl) ||
          (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) return;

      this.values[idx] = this.values[swap];
      this.values[swap] = currentEl;
      idx = swap;
    }
  }
}

let heap = new MaxBinaryHeap();

heap.insert(41);
heap.insert(39);
heap.insert(33);
heap.insert(18);
heap.insert(27);
heap.insert(12);
heap.insert(55);

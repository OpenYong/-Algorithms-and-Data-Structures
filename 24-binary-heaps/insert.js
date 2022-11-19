class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(el) {
    this.values.push(el);

    let childrenIdx = this.values.length - 1; // 추가된 요소의 index
    const childrenEl = this.values[childrenIdx];

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
}

let heap = new MaxBinaryHeap();

heap.insert(55);

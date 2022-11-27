class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    let newNode = new Node(val, priority);
    this.values.push(newNode);

    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentElement = this.values[parentIdx];
      if (element.priority < parentElement.priority) {
        this.values[parentIdx] = element;
        this.values[idx] = parentElement;
        idx = parentIdx;
      } else {
        break;
      }
    }
  }
  dequeue() {
    const root = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      // Sink Down
      let idx = 0;
      const length = this.values.length;
      const currentEl = this.values[0];

      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swapIdx = null;

        // 만약 leftChild가 존재 한다면
        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild.priority < currentEl.priority) {
            swapIdx = leftChildIdx;
          }
        }

        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swapIdx === null && rightChild.priority < currentEl.priority) ||
            (swapIdx !== null && rightChild.priority < leftChild.priority)
          ) {
            swapIdx = rightChildIdx;
          }
        }

        if (swapIdx === null) break;

        this.values[idx] = this.values[swapIdx];
        this.values[swapIdx] = currentEl;
        idx = swapIdx;
      }
    }
    return root;
  }
}

class Node {
  constructor(val, priority) {
    this.val = val;
    this.priority = priority;
  }
}

let ER = new PriorityQueue();
// priortiy 가 같을때는 고려하지 않음
ER.enqueue("common cold", 5);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 4);
ER.enqueue("broken arm", 2);
ER.enqueue("glass in foot", 3);

console.log(ER);

console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());
console.log(ER.dequeue());

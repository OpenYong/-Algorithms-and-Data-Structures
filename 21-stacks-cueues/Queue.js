class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return this.size++;
  }

  dequeue() {
    if (!this.first) {
      return null;
    }

    // 사이즈가 1일때
    if (this.first === this.last) {
      this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }
    this.size--;

    return this;
  }
}

let myQueue = new Queue();
myQueue.enqueue("첫번째");
myQueue.enqueue("두번째");
myQueue.enqueue("세번째");

myQueue.dequeue();

console.log(myQueue);

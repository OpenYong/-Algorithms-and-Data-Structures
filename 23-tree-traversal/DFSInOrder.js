class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.value) return undefined;
      if (val > current.value) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }
  }

  find(val) {
    if (!this.root) return;
    let current = this.root;
    while (true) {
      if (val === current.value) return current;
      if (val > current.value) {
        if (!current.right) {
          return undefined;
        }
        current = current.right;
      } else if (val < current.value) {
        if (!current.left) {
          return undefined;
        }
        current = current.left;
      }
    }
  }

  // 깊이 우선 탐색 - 전위 순회
  DFSInOrder() {
    let current = this.root;
    let visited = [];

    function traverse(current) {
      if (current.left) traverse(current.left);
      visited.push(current.value);
      if (current.right) traverse(current.right);
    }
    traverse(current);
    return visited;
  }
}

var tree = new BinarySearchTree();

tree.insert(51);
tree.insert(23);
tree.insert(12);
tree.insert(85);
tree.insert(75);
tree.insert(76);
tree.insert(99);
tree.insert(100);
tree.DFSInOrder();

console.log(tree.DFSInOrder());

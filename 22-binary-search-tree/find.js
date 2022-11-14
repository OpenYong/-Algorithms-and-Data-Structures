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

  //   첫번째 1

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

  //   두번쨰 2

  //   find(value) {
  //     if (this.root === null) return false;
  //     var current = this.root,
  //       found = false;
  //     while (current && !found) {
  //       if (value < current.value) {
  //         current = current.left;
  //       } else if (value > current.value) {
  //         current = current.right;
  //       } else {
  //         found = true;
  //       }
  //     }
  //     if (!found) return undefined;
  //     return current;
  //   }
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

console.log(tree.find(99));

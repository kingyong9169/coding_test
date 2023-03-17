class MaxHeap {
  constructor() {
    this.items = [];
  }

  swap = (index1, index2) => {
    let temp = this.items[index1];
    this.items[index1] = this.items[index2];
    this.items[index2] = temp;
  };

  parentIndex = (index) => Math.floor((index - 1) / 2);
  leftChildIndex = (index) => index * 2 + 1;
  rightChildIndex = (index) => index * 2 + 2;

  parent = (index) => this.items[this.parentIndex(index)];
  leftChild = (index) => this.items[this.leftChildIndex(index)];
  rightChild = (index) => this.items[this.rightChildIndex(index)];

  getLength = () => this.items.length;
  getItems = () => this.items;

  bubbleUp() {
    let index = this.items.length - 1;
    while (this.parent(index) && this.parent(index) < this.items[index]) {
      this.swap(index, this.parentIndex(index));
      index = this.parentIndex(index);
    }
  }

  bubbleDown() {
    let index = 0;
    while (
      (this.leftChild(index) && this.leftChild(index) > this.items[index]) ||
      (this.rightChild(index) && this.rightChild(index) > this.items[index])
    ) {
      let largerIndex = this.leftChildIndex(index);
      if (
        this.rightChild(index) &&
        this.rightChild(index) > this.items[largerIndex]
      )
        largerIndex = this.rightChildIndex(index);
      this.swap(largerIndex, index);
      index = largerIndex;
    }
  }

  push(item) {
    this.items[this.items.length] = item;
    this.bubbleUp();
  }

  pop() {
    let item = this.items[0];
    this.items[0] = this.items[this.items.length - 1];
    this.items.pop();
    this.bubbleDown();
    return item;
  }
}

function solution(n, works) {
  const maxHeap = new MaxHeap();
  works.forEach((work) => maxHeap.push(work));

  while (n > 0) {
    const maxWork = maxHeap.pop();
    maxHeap.push(maxWork ? maxWork - 1 : 0);
    n--;
  }

  return maxHeap.getItems().reduce((acc, cur) => acc + cur * cur, 0);
}

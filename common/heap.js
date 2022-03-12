class Heap {
    constructor() {
        this.items = [];
    }

    swap = (index1, index2) => {
        let temp = this.items[index1];
        this.items[index1] = this.items[index2];
        this.items[index2] = temp;
    }

    parentIndex = (index) => Math.floor((index - 1) / 2);
    leftChildIndex = (index) => index * 2 + 1;
    rightChildIndex = (index) => index * 2 + 2;

    parent = (index) => this.items[this.parentIndex(index)]
    leftChild = (index) => this.items[this.leftChildIndex(index)];
    rightChild = (index) => this.items[this.rightChildIndex(index)];

    getLength = () => this.items.length;

    bubbleUp() {}
    bubbleDown() {}

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
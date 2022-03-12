class MinHeap {
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

    bubbleUp() {
        let index = this.items.length - 1;
        while(this.parent(index) && this.parent(index) > this.items[index]) {
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    bubbleDown() {
        let index = 0;
        while(this.leftChild(index) && this.leftChild(index) < this.items[index] || 
            this.rightChild(index) && this.rightChild(index) < this.items[index]) {
            let smallerIndex = this.leftChildIndex(index);
            if(this.rightChild(index) && this.rightChild(index) < this.items[smallerIndex])
                smallerIndex = this.rightChildIndex(index);
            this.swap(index, smallerIndex);
            index = smallerIndex;
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

const filePath = process.platform === 'linux' ? 'dev/stdin' : 'BOJ/Gold/1715/1715.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const minHeap = new MinHeap();
let sum = 0;

for(const card of input.slice(1)) {
    minHeap.push(+card);
}

while(minHeap.getLength() > 1) {
    const a = minHeap.pop();
    const b = minHeap.pop();
    minHeap.push(a + b);
    sum += (a + b);
}

console.log(sum);

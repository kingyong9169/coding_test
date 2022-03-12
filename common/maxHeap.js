const Heap = require("./heap");

class MaxHeap extends Heap {
    bubbleUp(){
        let index = this.items.length - 1;
        while(this.parent(index) && this.parent(index) < this.items[index]){
            this.swap(index, this.parentIndex(index));
            index = this.parentIndex(index);
        }
    }

    bubbleDown(){
        let index = 0;
        while(this.leftChild(index) && this.leftChild(index) > this.items[index] || 
            this.rightChild(index) && this.rightChild(index) > this.items[index]) {
            let largerIndex = this.leftChildIndex(index);
            if(this.rightChild(index) && this.rightChild(index) > this.items[largerIndex])
                largerIndex = this.rightChildIndex(index);
            this.swap(largerIndex, index);
            index = largerIndex;
        }
    }
}
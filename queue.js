// class queue{
//     constructor(){
//         this.items = []
//     }
//     enqueue(element){
//         this.items.push(element)
//     }
//     dequeue(){
//         return this.items.shift()//remove the frontend of queue
//     }

//     isEmpty(){
//         return this.items.length===0
//     }
// peek(){
//     if(!this.isEmpty()){
//         return this.items[0]
//     }
//     return null
// }
// //size method which number of element in the queue
// size(){
//     return this.items.length
// }
// print(){
//     console.log(this.items.toString())
// }
// }

// const Queue = new queue()
// console.log(Queue.isEmpty())

// Queue.enqueue(10)
// Queue.enqueue(20)
// Queue.enqueue(30)
// console.log(Queue.size())
// Queue.print()

// console.log(Queue.dequeue())
// console.log(Queue.peek())

//------more optimised way for both dequeue and enqueue time complexity

// class Queue{
//     constructor(){
// this.items = {}
// this.rear = 0
// this.front = 0
//     }

//     enqueue(element){
//         this.items[this.rear] = element
//         this.rear++
//     }
//     dequeue(){
//         const item = this.items[this.front]
//         delete this.items[this.front]
//         this.front++
//         return item
//     }

//     isEmpty(){
//         return this.rear - this.front === 0
//     }
//     peek(){
//         return this.items[this.front]
//     }
//     size(){
//         return this.rear-this.front
//     }
//     print(){
//         console.log(this.items)
//     }
// }

// const queue = new Queue()
// console.log(queue.isEmpty())

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// console.log(queue.size())
// queue.print()
// console.log(queue.dequeue())
// console.log(queue.peek())


//---------linked list queue---------//

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        } else {
            const value = this.head.value;
            this.head = this.head.next;
            this.size--;
            if (this.size === 0) {
                this.tail = null;
            }
            return value;
        }
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.head.value;
    }

    print() {
        if (this.isEmpty()) {
            console.log("The queue is empty");
            return;
        }
        let curr = this.head;
        let listValues = "";
        while (curr) {
            listValues += `${curr.value} `;
            curr = curr.next;
        }
        console.log(listValues.trim());
    }
}

// Example usage
const queue = new LinkedListQueue();
console.log(queue.isEmpty()); // true

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log(queue.getSize()); // 4

queue.print(); // 10 20 30 40

console.log(queue.dequeue()); // 10
console.log(queue.dequeue()); // 20

queue.print(); // 30 40

console.log(queue.peek()); // 30
console.log(queue.isEmpty()); // false
console.log(queue.getSize()); // 2

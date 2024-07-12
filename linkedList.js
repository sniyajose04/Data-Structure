

//----------------------------print the code-------------------------------------//

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }

//     prepend(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//         } else {
//             node.next = this.head;
//             this.head = node;
//         }
//         this.size++;
//     }

    append(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node
        }
        this.size++
    }


//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }
//     }

//     removeNode(index){
//         let removenode;
//         if(index<0||index>=this.size){
//             return null
//         }
//         if(index===0){

//             removenode=this.head
//             this.head = removenode.next
//         }else{
//             let prev = this.head
//             for(let i=0;i<index-1;i++){
//                 prev = prev.next
//             }
//             removenode = prev.next
//             prev.next = removenode.next
//         }
//         this.size--
//         return removenode.value
//     }

//     removeValue(value) {
//         if (this.isEmpty()) {
//             return null;
//         }
//         if (this.head.value === value) {
//             this.head = this.head.next;
//             this.size--;
//             return value;
//         } else {
//             let prev = this.head;
//             while (prev.next && prev.next.value !== value) {
//                 prev = prev.next;
//             }
//             if(prev.next===null){
//                 return null;
//             }
//             let removeNode;
//             removeNode = prev.next
//             prev.next = removeNode.next
//             this.size--
//             return value
//         }

//     }

//     search(value){
//         if(this.isEmpty()){
//             return -1
//         }
//         let i=0;
//         let curr = this.head;
//         while(curr){
//             if(curr.value===value){
//                 return i
//             }
//             curr = curr.next;
//             i++
//         }
//         return -1
//     }


//     reverse(){
//         let prev= null
//         let curr = this.head
//         while(curr){
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }

//     removeDuplicates(){
//     if (this.isEmpty() || this.head.next === null) {
//         return;
//     }
//     let curr = this.head;
//     while (curr.next !== null) {
//         if (curr.value === curr.next.value) {
//             curr.next = curr.next.next;
//             this.size--;
//         } else {
//             curr = curr.next;
//         }
//     }
// }

// fromArray(arr) {
//     arr.forEach(value => this.append(value));
// }

// evennumber() {
//     if (this.isEmpty()) {
//         return
//     }
//     let curr = this.head
//     while (curr) {
//         if (curr.value % 2 === 0) {
//             console.log('even number', curr.value)
//         } 
//             curr = curr.next
//         }
//     }

// multipule(value){
//     if(this.isEmpty()){
//         return 
//     }
//     let curr = this.head
//     while(curr){
//         if(curr.value%value===0){
//             console.log(`multipule of ${value}`,curr.value)
//         }
//         curr = curr.next
//     }
// }


// middlepoint(){
//     if(this.isEmpty()){
//         return null
//     }

//     let slow = this.head
//     let fast = this.head
// while(fast !== null && fast.next !== null){
//     slow =slow.next
//     fast = fast.next.next
// }

// return slow.value

// }

// deletemiddle(){
//     if(this.isEmpty()){
//         return null
//     }
//     let slow = this.head
//     let fast = this.head
//     let prev = null
//     while(fast!==null&&fast.next!==null){
//         prev = slow
//         slow = slow.next
//         fast = fast.next.next
//     }
//     if(prev!==null&&slow!==null){
//         prev.next= slow.next
//     }
// }

//     print() {
//         if (this.isEmpty()) {
//             console.log('List is empty');
//         } else {
//             let curr = this.head;
//             let listValues = "";
//             while (curr) {
//                 listValues += `${curr.value} `;
//                 curr = curr.next;
//             }
//             console.log(listValues);
//         }
//     }


//  }

// const list = new LinkedList();
// console.log('List is empty:', list.isEmpty());
// console.log('List size:', list.getSize());

// list.append(10);
// list.append(40);

// list.append(20);
// list.append(50);

// list.append(30);
// list.print();
// list.middle()
// list.print()

// // list.print()
// // list.insert(10,0)
// // list.print()
// // list.insert(20,0)
// // list.print()
// // list.insert(30,1)
// // list.print()
// // list.insert(40,2)
// // list.print()

// // console.log(list.getSize())


// // console.log(list.removeNode(10))
// // list.print()
// // console.log(list.removeNode(0))
// // list.print()
// // console.log(list.removeNode(1))
// // list.print()
// // console.log(list.getSize())


// // console.log(list.removeValue(40))
// // list.print()
// // console.log(list.removeValue(20))
// // list.print()
// // console.log(list.removeValue(90))
// // list.print()
// // console.log(list.getSize())

// // console.log(list.search(90))
// // console.log(list.search(20))



// // list.insert(10,0)
// // list.insert(20,0)
// // list.insert(30,1)
// // list.insert(40,2)
// // list.print()

// // list.reverse()
// // list.print()


// list.append(10)
// list.append(20)
// list.append(90)
// list.append(43)
// list.append(92)
// list.append(3)

// list.print()
// list.evennumber()
// list.multipule(5)
// console.log(list.middlepoint())
// list.print()

// console.log(list.search(90))
// console.log(list.search(20))

// list.removeDuplicates()
// list.print()

//
//
//
//
//

//-------------------------using tail-----------------------------//

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }
//     append(value) {
//         const node = new Node(value);
//         if (this.isEmpty()) {
//             this.head = node;
//             this.tail = node;
//         } else {
//             this.tail.next = node;
//             this.tail = node;
//         }

//         this.size++;
//     }

//     removeFromEnd(){
//         if (this.isEmpty()) {
//             return null
//         }
//         const value = this.tail.value
//         if (this.size === 1) {
//             this.head = null
//             this.tail = null
//         } else {
//             let prev = this.head
//             while (prev.next !== this.tail) {
//                 prev = prev.next
//             }
//             prev.next = null
//             this.tail = prev
//         }
//         this.size--
//         return value
//     }


//     print() {
//         if (this.isEmpty()) {
//             return null
//         }
//         let curr = this.head
//         let listValues = ""
//         while (curr) {
//             listValues += `${curr.value} `
//             curr = curr.next
//         }
//         console.log(listValues)
//     }

// }

// const list = new linkedList()
// console.log('list is empty', list.isEmpty())
// console.log('list is not empty', list.getSize())
// list.append(1)
// list.append(2)
// list.append(3)
// list.print()
// list.removeFromEnd()
// list.print()

//
//
//
//
//

//--------------------------------doubly linked list-----------------------------//

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//         this.tail = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }
//     getSize() {
//         return this.size
//     }
//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             this.tail.next = node
//             node.prev = this.tail
//             this.tail = node
//         }
//         this.size++
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//             this.tail = node
//         } else {
//             node.next = this.head
//             this.head.prev = node
//             this.head = node
//         }
//         this.size++
//     }

//     removeFromEnd() {
//         if (this.isEmpty()) {
//             return null
//         }
//         const value = this.tail.value
//         if (this.head === this.tail) {
//             this.head = null
//             this.tail = null
//         } else {

//             this.tail = this.tail.prev
//             this.tail.next = null
//         }
//         this.size--
//         return value
//     }

//     removeFromFront() {
//         if (this.isEmpty()) {
//             return null
//         }
//         const value = this.head.value
//         if (this.head === this.tail) {
//             this.head = null
//             this.tail = null
//         } else {
//             this.head = this.head.next
//             this.head.prev = null
//         }
//         this.size--
//         return value
//     }


//     reverse() {
//         if (this.isEmpty()) {
//             return null
//         }
//         let curr = this.head
//         let prev = null
//         this.tail = curr;

//         while (curr !== null) {
//             let next = curr.next
//             curr.next = prev
//             curr.prev = next
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }


//     insert(index, value) {
//         if (index < 0 || index > this.size) {
//             return null
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else if (index === this.size) {
//             this.append(value)
//         } else {
//             const node = new Node(value)
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             node.prev = prev
//             if (prev.next) {
//                 prev.next.prev = node
//             }
//             prev.next = node
//             this.size++
//         }

//     }


//     merge(list) {
//         if (list.isEmpty()) {
//             return null;
//         }
//         if (this.isEmpty()) {
//             this.head = list.head
//             this.tail = list.tail
//         } else {
//             this.tail.next = list.head
//             list.head.prev = this.tail
//             this.tail = list.tail
//         }
//         this.size += list.size
//     }


//     print() {
//         if (this.isEmpty()) {
//             return null
//         }
//         let curr = this.head
//         let listValues = ""
//         while (curr) {
//             listValues += `${curr.value} `
//             curr = curr.next
//         }
//         console.log(listValues)
//     }

// }

// // const list = new linkedList()
// // console.log('list is empty', list.isEmpty())
// // console.log('list is not empty', list.getSize())
// // list.prepend(10)
// // list.prepend(20)
// // list.prepend(30)
// // list.prepend(40)
// // list.prepend(50)
// // list.prepend(60)
// // list.print()
// // list.removeFromEnd()
// // list.print()
// // list.removeFromFront()
// // list.print()
// // list.reverse()
// // list.print()
// // list.insert(3, 99)
// // list.print()



// const list1 = new linkedList()
// list1.append(1)
// list1.append(2)
// list1.append(3)
// list1.print()

// const list2 = new linkedList()
// list2.append(4)
// list2.append(5)
// list2.append(6)
// list2.print()

// list1.merge(list2)
// list1.print()
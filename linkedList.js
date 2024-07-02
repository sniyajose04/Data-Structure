// class node{
// constructor(value){
//     this.value = value
//     this.next = null
// }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }

//     isEmpty(){
//       return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

// }

// const list = new linkedList()
// console.log('list is emty',list.isEmpty())
// console.log('list is not emty',list.getSize())

//linkedList prepend[new node at the starting of the list]

// class node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.size = 0
//     }
//     isEmpty(){
//         return this.size === 0
//     }

//     getSize(){
//         return this.size
//     }

//     prepend(value){
//         const node = new Node(value)
//             if(this.isEmpty()){
//                 this.head = node
//             }else{
//                 node.next = this.head
//                 this.head = node
//             }
//             this.size++
//         }
//     }

//     const list = new linkedList()
//     console.log('list is empty',list.isEmpty())
//     console.log('list is not empty',list.getSize())
//     list.prepend(10)
//     list.prepend(20)
//     list.prepend(30)

//print the code

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

    prepend(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

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


    insert(value, index) {
        if (index < 0 || index > this.size) {
            return
        }
        if (index === 0) {
            this.prepend(value)
        } else {
            const node = new Node(value)
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            node.next = prev.next
            prev.next = node
            this.size++
        }
    }

    removeNode(index){
        let removenode;
        if(index<0||index>=this.size){
            return null
        }
        if(index===0){
           
            removenode=this.head
            this.head = removenode.next
        }else{
            let prev = this.head
            for(let i=0;i<index-1;i++){
                prev = prev.next
            }
            removenode = prev.next
            prev.next = removenode.next
        }
        this.size--
        return removenode.value
    }

    removeValue(value) {
        if (this.isEmpty()) {
            return null;
        }
    
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
            return value;
        } else {
            let prev = this.head;
            while (prev.next && prev.next.value !== value) {
                prev = prev.next;
            }
            if(prev.next===null){
                return null;
            }
            let removeNode;
            removeNode = prev.next
            prev.next = removeNode.next
            this.size--
            return value
        }
      
    }

    search(value){
        if(this.isEmpty()){
            return -1
        }
        let i=0;
        let curr = this.head;
        while(curr){
            if(curr.value===value){
                return i
            }
            curr = curr.next;
            i++
        }
        return -1
    }


    reverse(){
        let prev= null
        let curr = this.head
        while(curr){
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    removeDuplicates() {
    if (this.isEmpty() || this.head.next === null) {
        return;
    }
    let curr = this.head;
    while (curr.next !== null) {
        if (curr.value === curr.next.value) {
            curr.next = curr.next.next;
            this.size--;
        } else {
            curr = curr.next;
        }
    }
}

fromArray(arr) {
    arr.forEach(value => this.append(value));
}

    print() {
        if (this.isEmpty()) {
            console.log('List is empty');
        } else {
            let curr = this.head;
            let listValues = "";
            while (curr) {
                listValues += `${curr.value} `;
                curr = curr.next;
            }
            console.log(listValues);
        }
    }


}

const list = new LinkedList();
console.log('List is empty:', list.isEmpty());
console.log('List size:', list.getSize());
// list.print();
// list.append(10);
// list.print();
// list.append(20);

// list.append(30);
// list.print();

// list.print()
// list.insert(10,0)
// list.print()
// list.insert(20,0)
// list.print()
// list.insert(30,1)
// list.print()
// list.insert(40,2)
// list.print()

// console.log(list.getSize())


// console.log(list.removeNode(10))
// list.print()
// console.log(list.removeNode(0))
// list.print()
// console.log(list.removeNode(1))
// list.print()
// console.log(list.getSize())


// console.log(list.removeValue(40))
// list.print()
// console.log(list.removeValue(20))
// list.print()
// console.log(list.removeValue(90))
// list.print()
// console.log(list.getSize())

// console.log(list.search(90))
// console.log(list.search(20))



// list.insert(10,0)
// list.insert(20,0)
// list.insert(30,1)
// list.insert(40,2)
// list.print()

// list.reverse()
// list.print()


// list.append(1)
// list.append(1)
// list.append(2)
// list.append(2)
// list.append(2)
// list.append(3)

// list.print()

// list.removeDuplicates()
// list.print()


const array = [1, 2, 3, 4, 5];
list.fromArray(array);
list.print();
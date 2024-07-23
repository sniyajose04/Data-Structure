

class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}

class linkedlist{
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty(){
        return this.size ===0
    }

    getSize(){
        return this.size
    }

    push(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head = node
          
        }else{
            node.next = this.head
            this.head = node
        }
        this.size++
    }

    pop(){
        if(this.isEmpty()){
            return null
        }else{
            const value = this.head.value
            this.head = this.head.next
            this.size--
            return value
        }
    }

    peek(){
        if(this.isEmpty()){
            return null
        }else{
            return this.head.value
        }
    }

    reverse(){
    if(this.isEmpty()){
        return null
    }
    let prev =null
    let curr = this.head
    while(curr!==null){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.head =prev
    }

    //-----------delete data------------//

delete(deletevalue){
    let prev = null
    let curr = this.head
    if(curr!==null&&curr.value===deletevalue){
        this.head = curr.next
        this.size--
        return
    }
    while(curr!==null&&curr.value!==deletevalue){
        prev = curr
        curr = curr.next
    }
    if(curr===null){
        console.log('not in the list')
        return null
    }
    prev.next = curr.next
    this.size--
}

//----------sum of stack----------//

sum(){
    let sum= 0
    let curr = this.head
    while(curr!==null){
        sum += curr.value
        curr = curr.next
    }
    return sum
}

    print(){
        if(this.isEmpty()){
            console.log('list is empty')
            return null
        }
        let curr = this.head
        let listValues = ""
        while(curr){
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues)
    }
}

const stack = new linkedlist()
console.log('list is empty',stack.isEmpty())
console.log('list is not empty',stack.getSize())

stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.print()

stack.pop()
stack.print()

console.log(stack.peek())

console.log(stack.getSize())

stack.reverse()
stack.print()

stack.delete(20)
stack.print()

console.log('sum of stack',stack.sum())
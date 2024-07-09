const array =[9,3,7,2,6]
// const result = array.filter((num,index)=>{
//     return array.indexOf(num)!==index
// })
// console.log(result)


class Node{
    constructor(value){
        this.value =value
        this.next = null
    }
}

class linkedList{
    constructor(){
        this.head = null
        this.size = 0
    }
 isEmpty(){
    return this.size===0
 }

 getSize(){
    return this.size
 }

 append(value){
    const node = new Node(value)
    if(this.isEmpty()){
        this.head= node
    }else{
    let prev = this.head
    while(prev.next){
        prev = prev.next
    }
    prev.next=node
    }
    this.size++
 }

 reverse(){
    let prev = null
    let curr = this.head
    while(curr){
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    this.head = prev
 }

print(){
    if(this.isEmpty()){
        console.log('list is empty')
    }else{
    let curr = this.head
    let listValues = ""
    while(curr){
   listValues += `${curr.value} ` 
   curr = curr.next
    }
    console.log(listValues)
}

}
}
const list = new linkedList()
list.append(10)
list.append(20)
list.append(30)
list.append(40)
list.append(50)
list.append(60)
list.append(70)
list.append(80)
list.print()
list.reverse()
list.print()
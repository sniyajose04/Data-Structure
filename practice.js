// linearSearch(to find element)

// function result(array,target){
// for(i=0;i<=array.length;i++){
//     if(array[i]===target){
//         return i
//     }
// }
// return -1
// }

// const array = [2,9,4,8,3,7,5]
// const target = 8
// console.log(result(array,target))

//is the element is exists

// function result(array,target){
//     for(i=0;i<array.length;i++){
//         if(array[i]===target){
//             return true
//         }
//         }
//         return false
//     }

// const array = [2,9,4,8,3,7,5]
//  const target = 90
// console.log(result(array,target))

// function Occurrence(array,target){
//     let count=0
//     for(let i=0;i<array.length;i++){
//    if(array[i]===target){
//     count++
//    }
//     }
//     return count
// }
// const array = [2,9,4,9,9,9,9,9,,9,8,8,3,7,5]
// const target = 9
// console.log(Occurrence(array,target))

// function lasnum(array,target){
//     for(let i=array.length-1;i>=0;i++){
//         if(array[i]===target){
//             return i
//         }
//     }
//     return -1
// }
// const array = [2,9,4,9,9,9,9,9,9,8,8,3,7,5]
// const target = 5
// console.log(lasnum(array,target))


// let array = [2,4,6,8,10,12,14,16,18,20]
// let target = 12

// function binarySearch(array,target){
//     let left =0
//     let right = array.length-1
//     while(left<=right){
//         let mid = Math.floor((left+right)/2)
//         if(array[mid]===target){
//             return mid
//         }else if(array[mid]<=target){
//             return mid+1
//         }else if(array[mid]>=target){
//             return mid-1
//         }
//     }
//     return -1
// }

// console.log(binarySearch(array,target))


// factorial
// let n=5

// function factorial(n){
//     if(n<=1){
//         return 1
//     }else{
//         return n*factorial(n-1)
//     }
// }

// console.log(factorial(n))

// function fibonacci(n){
//     if(n<=1){
//         return n
//     }else{
//         return fibonacci(n-1)+fibonacci(n-2)
//     }
// }

// console.log(fibonacci(7))

// function reverse(str){
//     if(str==""){
//         return ""
//     }else{
//         return reverse(str.substr(1))+str[0]
//     }
// }

// console.log(reverse("sniya"))


// function isPalidrome(str){
//     if(str.length<=1){
//         return true
//     }

//     if(str[0]===str[str.length-1]){
//         return isPalidrome(str.substring(1,str.length-1))
//     }else{
//         return false
//     }

// }

// console.log(isPalidrome("sniya"))
// console.log(isPalidrome("malayalam"))


// class node{
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList{
//     constructor(){
//         this.head = null
//         this.size= 0
//     }


// isEmpty(){
//     return this.size === 0
// }

// getSize(){
//     return this.size
// }


// }

// const list = new linkedList()
// console.log('list is empty',list.isEmpty())
// console.log('list is not empy',list.getSize())


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
// }

// const list =new linkedList()
// console.log('list is empty',list.isEmpty())
// console.log('list is not empty',list.getSize())


// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null

//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }

//     prepend(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             node.next = this.head
//             this.head = node
//         }
//         this.size++
//     }

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next

//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         if (index < 0 || index > this.size) {
//             return null;
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

//     removeIndex(index) {
//         if (index < 0 || index > this.head) {
//             return null
//         }
//         if (index === 0) {
//             removenode = this.head
//             this.head = removenode.next
//         } else {
//             let prev = this.head
//             for (i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             removenode = prev.next
//             prev.next = removenode.next

//         }
//         this.size--
//         return removenode.value
//     }

//     removeValue() {
//         if (this.isEmpty()) {
//             return null
//         }
//         if (this.head.value === value) {
//             this.value = this.value.next
//             this.size--
//             return value
//         } else {
//             let prev = this.head
//             while (this.head && this.head.value !== value) {
//                 prev = prev.next
//             }

//             if (prev.next === null) {
//                 return null
//             }

//             let removenode = prev.next
//             prev.next = removenode.next
//             this.size--
//             return value
//         }
//     }

//     array(arr) {
//         arr.forEach(value => this.append(value))
//     }


//     search(value) {
//         if (this.isEmpty()) {
//             return -1
//         }
//         let i = 0
//         let curr = this.head
//         while (curr) {
//             if (curr.value === value) {
//                 return i
//             }
//             curr = curr.next
//             i++
//         }
//         return -1
//     }

//     reverse() {
//         let prev = null
//         let curr = this.head
//         while (curr) {

//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }

//     removeDuplicate() {
//         if (this.isEmpty() || this.head.next === null) {
//             return
//         }
//         let curr = this.head
//         while (curr.next !== null) {
//             if (curr.value === curr.next.value) {
//                 curr.next === curr.next.next
//                 this.size--
//             } else {
//                 curr = curr.next
//             }
//         }
//     }

//     evennumber() {
//         if (this.isEmpty()) {
//             return
//         }
//         let curr = this.head
//         while (curr) {
//             if (curr.value % 2 === 0) {
//                 console.log('even number', curr.value)
//             } else {
//                 curr = curr.next
//             }
//         }

//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('list is empty')
//         } else {
//             let curr = this.head
//             let listValues = ""
//             while (curr) {
//                 listValues = listValues + `${curr.value}`
//                 curr = curr.next
//             }
//             console.log(listValues)
//         }
//     }
// }

// const list = new linkedList()
// console.log('list is empty', list.isEmpty())
// console.log('list is not empty', list.getSize())
// list.print()
// list.append(10)
// list.print()
// list.append(2)
// list.print()
// list.append(3)
// list.print()
// list.append(43)
// list.print()

// const arr = [2, 9, 8, 5, 6, 3]
// list.array(arr)
// list.print()


// let array = [2,9,8,4,7,3,5,1,10]
// let target = 10

// function sumElem(array,target){
// for(let i=0;i<array.length;i++){
//     for(let j=i+1;j<array.length-1;j++){
// if(array[i]+array[j]===target){
//   return [array[i],array[j]]
// }
//     }

// }}
// console.log(sumElem(array,target))



// let target = 5
// let  targetElem = []
// let nottargetElem = []
// function samenumback(array,target){ 
// for(let i=0;i<array.length;i++){
//     if(array[i]===target){
//          targetElem.push(array[i])
//     }else{
//          nottargetElem.push(array[i])
//     }
// }
// return nottargetElem.concat(targetElem)
// }

// console.log(samenumback(array,target))

// function deleteElem(array) {
//     if (array.length === 0) {
//         return [];
//     }
//     const mid = Math.floor(array.length / 2);
//     if (array.length % 2 === 0) {
//         array.splice(mid - 1, 2);
//     } else {
//         array.splice(mid, 1);
//     }
//     return array;
// }

// console.log(deleteElem(array))

// let array = [1,1,2,2,3,3,4,4,6,5,5]
// const result = array.filter((num,index)=>{
//     return array.indexOf(num)!==index
// })
// console.log(result)

// let array = [2,6,5,7,8]
// const result = array.filter((num)=>num%2==0)
// console.log(result)

// let string = "sniya"
// const result = string.length
// console.log(result)

// function length(string){
//     const result = string.length
//     consolr.log(result)
// }

// let str1 = "sniya"
// let str2 = "jose"
// const result = str1.concat(' ',str2)
// console.log(result)

// let str1 = "sniya"
// // const result = str1.split('').reverse().split('')
// const result = str1.split('').reverse()
// console.log(result)

// function reverse(str) {
//     if (str === "") {
//         return ""
//     } else {
//         return reverse(str.substr(1)) + str[0]
//     }
// }
// console.log(reverse("sniya"))


// function palidrome(str){
//      const result = str.split('').reverse().join('')
//    return result === str
// }
// console.log(palidrome("sniya"))
// console.log(palidrome("malayalam"))


// function countOverlappingOccurrences(str, substring) {
//     let count = 0;
//     let pos = 0;
//     while ((pos = str.indexOf(substring, pos)) !== -1) {
//         count++;
//         pos += 1; 
//     }
//     return count;
// }
// let str = "aaffddggtttddoooppdddhhh";
// console.log(countOverlappingOccurrences(str, "dd")); 


// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }

//     isEmpty() {
//         return this.size === 0;
//     }

//     getSize() {
//         return this.size;
//     }

//   prepend(value){
//     const node = new Node(value)
//     if(this.isEmpty()){
//         this.head = node
//     }else{
//         node.next = this.head
//         this.head = node
//     }
//     this.size++
//   }

// append(value){
//     const node = new Node(value)
//     if(this.isEmpty()){
//         return null
//     }else{
//         let prev = this.head
//         while(prev.next){
//             prev = prev.next
//         }
//         prev.next = node
//     }
//     this.size++
// }

// insert(value,index){
//     if(index<0||index>this.size){
//         return null
//     }
//     if(index===0){
//         this.prepend(value)
//     }else{
//         const node = new Node(value)
//         let prev = this.head
//         for(let i=0;i<index-1;i++){
//             prev = prev.next
//         }
//         prev.next = node.next
//         prev.next = node
//         this.size++
//     }

// }

// removenode(index){
//     let removenode 
//     if(index<0||index>this.size){
//         return null
//     }
//     if(index === 0){
//         removenode = this.head
//         this.head = removenode.next
//     }else{
//         let prev = this.head
//         for(let i=0;i<index-1;i++){
//             prev = prev.next
//         }
//         prev.next = removenode.next
//     }
//     this.size--
//     return removenode.value
// }

//   print(){
//     if(this.isEmpty()){
//         return null
//     }
//     let curr = this.head
//     let listValues = ""
//     while(curr){
//     listValues += `${curr.value} `
//     curr = curr.next
//     }
//     console.log(listValues)
//   }

// }

// const list = new LinkedList();
// console.log('List is empty:', list.isEmpty());
// console.log('List size:', list.getSize());

// list.prepend(10);
// list.prepend(20);
// list.prepend(30);
// list.prepend(40);
// list.prepend(50);

// list.print();

// list.append(33)
// list.append(44)
// list.append(55)
// list.append(66)
// list.append(77)

// list.print()

// list.insert(99,3)
// list.print()
// list.removenode(3)
// list.print()


//linear search

// const array = [1,9,2,8,3,7,4,6,5]
// let target = 3
// function targetElem(array,target){
// for(i=0;i<array.length;i++){
//     if(array[i]===target){
//         return i
//     }
// }
// return -1
// }

// console.log(targetElem(array,target))


//binary search


// function binarySearch(array,target){
//  let left = 0
//  let right =array.length-1

//  if(left<=right){
//     let mid = Math.floor((left+right)/2)

//     if(array[mid]===target){
//         return mid
//     }
//     if(array[mid]>=target){
//         return mid+1
//     }
//     if(array[mid]>=target){
//         return mid-1
//     }
//  }

// }
// console.log(binarySearch(array,target))


// function binarySearch(array,target,left,right){
//     if(left>right){
//         return -1
//     }
//     let mid = Math.floor((left+right)/2)

//     if(array[mid]===target){
//         return mid
//     }
//     if(array[mid]<target){
//         return binarySearch(array,target,mid-1,right)
//     }
//     if(array[mid]>target){
//         return binarySearch(array,target,left,mid+1)
//     }
// }

// function recurrsive(array,target){
//     return binarySearch(array,target,0,array.length-1)
// }

// console.log(recurrsive(array,target))

// function factorial(value){
// if(value<=1){
//     return 1
// }else{
//     return value*factorial(value-1)
// }
// }
// console.log(factorial(5))

// function fibonacci(n){
//     if(n<=1){
//         return 1
//     }else{
//         return fibonacci(n-1)+fibonacci(n-2)
//     }
// }
// console.log(fibonacci(5))

// function stringReverse(str){
//     if(str===""){
//         return ""
//     }else{
//         return stringReverse(str.substr(1))+str[0]
//     }
// }
// console.log(stringReverse("sniya"))

// function palidrome(str){
//     if(str.length<=1){
//         return true
//     }
//     if(str[0]===str[str.length-1]){
//         return palidrome(str.substring(1,str.length-1))
//     }else{
//         return false
//     }
// }

// console.log(palidrome("alice"))
// console.log(palidrome("malayalam"))

// function factorial(n){
//     if(n<=0){
//         return 1
//     }else{
//         return n*factorial(n-1)
//     }
// }
// console.log(factorial(6))

// function multiple(number,count,current=1,multiples=[]){
//     if(current>=number){
//         return multiples
//     }
//     multiples.push(current*count)
//     return multiple(number,count,current+1,multiples)
// }
// let count=9
// let number = 9
// console.log(multiple(number,count))


// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     isEmpty() {
//         return this.size === 0
//     }

//     getSize() {
//         return this.size
//     }
//     // prepend(value){
//     //     const node = new Node(value)
//     //     if(this.isEmpty()){
//     //         this.head = node
//     //     }else{
//     //         node.next = this.head
//     //         this.head = node
//     //     }
//     //     this.size++
//     // }

//     append(value) {
//         const node = new Node(value)
//         if (this.isEmpty()) {
//             this.head = node
//         } else {
//             let prev = this.head
//             while (prev.next) {
//                 prev = prev.next
//             }
//             prev.next = node
//         }
//         this.size++
//     }

//     insert(value, index) {
//         const node = new Node(value)
//         if (index < 0 || index > this.size) {
//             return null
//         }
//         if (index === 0) {
//             this.prepend(value)
//         } else {
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             node.next = prev.next
//             prev.next = node
//             this.size++
//         }

//     }

//     removenode(index) {
//         let removenode
//         if (index < 0 || index > this.size) {
//             return null
//         }
//         if (index === 0) {
//             removenode = this.head
//             this.head = removenode.next
//         } else {
//             let prev = this.head
//             for (let i = 0; i < index - 1; i++) {
//                 prev = prev.next
//             }
//             removenode = prev.next
//             prev.next = removenode.next

//         }
//         this.size++
//         return removenode.next
//     }

//     removevalue(value) {
//         if (this.isEmpty()) {
//             return null
//         }
//         if (this.head.value === value) {
//             this.head = this.head.next
//             this.size--
//             return value
//         } else {
//             let prev = this.head
//             let removenode;
//             while (prev.next && prev.next.value !== value) {
//                 prev = prev.next
//             }
//             removenode = prev.next
//             prev.next = removenode.next
//             this.size--
//             return value
//         }
//     }


//     search(value) {
//         if (this.isEmpty()) {
//             return -1
//         }
//         let i = 0;
//         let curr = this.head;
//         while (curr) {
//             if (curr.value === value) {
//                 return i
//             }
//             curr = curr.next;
//             i++
//         }
//         return -1
//     }

//     reverse() {
//         let prev = null
//         let curr = this.head
//         while (curr) {
//             let next = curr.next
//             curr.next = prev
//             prev = curr
//             curr = next
//         }
//         this.head = prev
//     }

//     removeduplicates() {
//         if (this.isEmpty() || this.head.next === null) {
//             return null
//         }
//         let curr = this.head
//         while (curr.next !== null) {
//             if (curr.value === curr.next.value) {
//                 curr.next = curr.next.next
//                 this.size--
//             } else {
//                 curr = curr.next
//             }
//         }
//     }

//     fromarray(arr) {
//         arr.forEach((value) => this.append(value))
//     }

//     middleElement(){
//         if(this.isEmpty()){
//             return null
//         }
//         let slow = this.head
//         let fast = this.head
//         while(fast!==null&&fast.next!==null){
//             slow = slow.next
//             fast = fast.next.next
//         }
//         return slow.value
//     }

//     print() {
//         if (this.isEmpty()) {
//             console.log('list is empty')
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

// let list = new linkedList()
// console.log('list is empty', list.isEmpty())
// console.log('list is not empty', list.getSize())

// // list.prepend(20)
// // list.prepend(40)
// // list.prepend(80)
// // list.prepend(90)
// // list.prepend(30)
// // list.prepend(70)
// // list.print()

// list.append(20)
// list.append(40)
// list.append(80)
// list.append(90)
// list.append(30)
// list.append(70)
// list.print()
// list.insert(66, 2)
// list.print()
// list.removenode(4)
// list.print()
// list.removevalue(70)
// list.print()
// console.log(list.search(90))
// console.log(list.search(66))
// list.reverse()
// list.print()

// // list.append(20)
// // list.append(20)
// // list.append(30)
// // list.append(30)
// // list.append(30)
// // list.append(70)
// // list.append(70)
// // list.append(60)
// // list.append(60)
// // list.append(80)
// // list.append(80)
// // list.append(80)
// // list.removeduplicates()
// // list.print()

// // const array = [2,9,3,8,4,7,5,6]
// // list.fromarray(array)
// // list.print()

// // console.log(list.middleElement())

// const array = [1,9,2,8,3,7,4,6,5]
// const target = 6

// function linearSearch(array,target){
//     for(let i=0;i<array.length;i++){
//         if(array[i]===target){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSearch(array,target))

// function binarySearch(arr,target){
//     let left =0;
//     let right = arr.length-1;

//     while(left <= right){
//         let mid = Math.floor((left+right)/2);

//         if(arr[mid]===target){
//             return mid
//         }

//         else if(arr[mid]<target){
//             left = mid+1
//         }
//         else if(arr[mid]>target){
//             right = mid-1
//         }
//     }
//     return -1
// }
// console.log(binarySearch(array,target))


// function recurrsive(array,target,left,right){
// if(left>right){
//     return -1
// }
// let mid = Math.floor((left+right)/2)
// if(array[mid]===target){
//     return mid
// }else if(array[mid]<target){
//     return recurrsive(array,target,mid+1,right)
// }else{
//     return recurrsive(array,target,left,mid-1)
// }


// }

// function recurrsivess(array,target){
//     return recurrsive(array,target,0,array.length-1)
// }

// console.log(recurrsivess(array,target))

// function fractorial(n){
// if(n<=1){
//     return 1
// }else{
//     return n*fractorial(n-1)
// }

// }
// console.log(fractorial(3))

// function fibonacci(n){
//     if(n<=1){
//         return 1
//     }else{
//         return fibonacci(n-1)+fibonacci(n-2)
//     }
// }
// console.log(fibonacci(6))

// function reverse(str){
//     if(str===""){
//         return ""
//     }else{
//         return reverse(str.substr(1))+str[0]
//     }
// }

// console.log(reverse("sniya"))

// function palidrome(str){
//     if(str.length<=1){
//         return true
//     }
//     if(str[0]===str[str.length-1]){
//         return palidrome(str.substring(1,str.length-1))
//     }else{
//         return false
//     }
// }
// console.log(palidrome("sniya"))
// console.log(palidrome("malayalam"))

// function multiple(count,number,current=1,multiples=[]){
//     if(current>number){
//         return multiples
//     }
//     multiples.push(current*number)
//     return multiple(count,number,current+1,multiples)
// }
// let count = 5
// let number = 5

// console.log(multiple(count,number))

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    // prepend(value){
    //     const node = new Node(value)
    //     if(this.isEmpty()){
    //         this.head = node
    //     }else{
    //         node.next = this.head
    //         this.head = node
    //     }
    //     this.size++
    // }

    append(value) {
        const node = new Node(value)
        if (this.isEmpty()) {
            this.head = node
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
            return null
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

    removenode(index) {
        let removenode
        if (index < 0 || index > this.size) {
            return null
        }
        if (index === 0) {
            removenode = this.head
            this.head = removenode.next
        } else {
            let prev = this.head
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next
            }
            removenode = prev.next
            prev.next = removenode.next

        }
        this.size--
        return removenode.value
    }

    removevalue(value) {
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
            if (prev.next === null) {
                return null;
            }
            let removeNode;
            removeNode = prev.next
            prev.next = removeNode.next
            this.size--
            return value
        }
    }


    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++
        }
    }

    reverse() {
        let prev = null
        let curr = this.head
        while (curr) {
            let next = curr.next
            curr.next = prev
            prev = curr
            curr = next
        }
        this.head = prev
    }

    removeDuplicate() {
        if (this.isEmpty() || this.head.next === null) {
            return null
        }
        let curr = this.head
        while (curr.next !== null) {
            if (curr.value === curr.next.value) {
                curr.next = curr.next.next
                this.size--
            } else {
                curr = curr.next
            }
        }
    }

    fromarray(array) {
        array.forEach((value) => this.append(value))
    }

    middlepoint(){
        if(this.isEmpty()){
            return null
        }
        let slow= this.head
        let fast = this.head
        if(fast!=null&&fast.next!==null){
            slow = slow.next
            fast = fast.next.next
        }
        return slow.value
    }

    print() {
        if (this.isEmpty()) {
            return null
        }
        let curr = this.head
        let listValues = ""
        while (curr) {
            listValues += `${curr.value} `
            curr = curr.next
        }
        console.log(listValues)
    }

}

const list = new linkedList()
console.log('list is empty', list.isEmpty())
console.log('list is not empty', list.getSize())

// list.prepend(20)
// list.prepend(30)
// list.prepend(40)
// list.prepend(90)
// list.prepend(70)
// list.prepend(50)
// list.prepend(80)
// list.prepend(10)
// list.print()

list.append(20)
list.append(30)
list.append(40)
list.append(90)
list.append(70)
list.append(50)
list.append(80)
list.append(10)
list.print()
// list.insert(44,4)
// list.print()
// list.removenode(4)
// list.print()
// list.removevalue(90)
// list.print()
// console.log(list.search(40))
// list.reverse()
// list.print()

// const array = [2, 2, 3, 3, 3, 4, 4, 5, 5, 6, 6, 7]
// list.fromarray(array)
// list.print()


// list.append(20)
// list.append(20)
// list.append(30)
// list.append(30)
// list.append(40)
// list.append(40)
// list.append(50)
// list.append(50)
// list.removeDuplicate()
// list.print()
console.log(list.middlepoint())
list.print()
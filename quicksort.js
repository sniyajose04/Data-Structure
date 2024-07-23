// function quicksort(array){
//     if(array.length<2){
//         return array
//     }
//     let pivot = array[array.length-1]
//     let left = []
//     let right = []
//     for(let i=0;i<array.length-1;i++){
//         if(array[i]<pivot){
//             left.push(array[i])
//         }else{
//             right.push(array[i])
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)]
// }

// const array = [-6,20,4,8,-2]
// console.log(quicksort(array))


function quicksort(array){
    if(array.length<2){
        return array
    }
let pivot = array[array.length-1]
let left = []
let right = []
let i=0
while(i<array.length-1){
    if(array[i]<pivot){
        left.push(array[i])
    }else{
        right.push(array[i])
    }
    i++
}
return [...quicksort(left),pivot,...quicksort(right)]
}
const array = [1,9,4,7,6,2,3]
console.log(quicksort(array))


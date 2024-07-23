// function mergesort(array){
//     if(array.length<2){
//         return array
//     }
//     const mid = Math.floor(array.length/2)
//     const leftarray = array.slice(0,mid)
//     const rightarray = array.slice(mid)
//     return merge(mergesort(leftarray),mergesort(rightarray))
// }
// function merge(leftarray,rightarray){
//     const sortedarray = []
//     while(leftarray.length && rightarray.length){
//         if(leftarray[0]<=rightarray[0]){
//             sortedarray.push(leftarray.shift())//shift - removes the element from the corresponding array
//         }else{
//             sortedarray.push(rightarray.shift())
//         }
//     }
//     return [...sortedarray,...leftarray,...rightarray]
// }
// const array = [-6,20,8,-2,4]
// console.log(mergesort(array))


function mergesort(array){
    if(array.length<2){
        return array
    }
    let mid = Math.floor(array.length/2)
    let leftarray = array.slice(0,mid)
    let rightarray = array.slice(mid)
    return merge(mergesort(leftarray),mergesort(rightarray))
    
}
function merge(leftarray,rightarray){
    const sortedarray = []
    while(leftarray.length&&rightarray.length){
        if(leftarray[0]<rightarray[0]){
            sortedarray.push(leftarray.shift())
        }else{
            sortedarray.push(rightarray.shift())
        }
    }
    return [...sortedarray,...leftarray,...rightarray]
}
const array =[1,-3,4,8,5,-4]
console.log(mergesort(array))
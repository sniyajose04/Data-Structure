//----------------------------------------sum of two element into target--------------------------//

// let array = [2, 9, 4, 7, 8, 1, 6];
// let target = 10;

// function result(array, target) {
//     for (let i = 0; i < array.length - 1; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] + array[j] === target) {
//                 return [array[i],array[j]];
//             }
//         }
//     }
//     return 0;  
// }
// console.log(result(array, target));


// //time complexity = o(n^2)
// //space complexity = o(1)

//------------------------------------------move target element to last-----------------------------//

// let array1 = [6,2,9,4,7,8,1,6,7,3,6,2,4,9,6];
// let targets = 6
// function repeat(array1,targets){
// let targetElements =[]
// let nonTargetElements = []
// for (let i = 0; i < array1.length; i++) {
//     if (array1[i] === targets) {
//         targetElements.push(array1[i]);
//     } else {
//         nonTargetElements.push(array1[i]);
//     }
// }
// return nonTargetElements.concat(targetElements);
// }
// console.log(repeat(array1,targets))


// //-----------------------------middle----------------------------------//

// function middleElem(array){
//     if(array.length===0){
//        return []
//     }
//     const mid = Math.floor(array.length/2)
//    if(array.length%2===0){
//        return [array[mid],array[mid+1]]
//    }else{
//        return [array[mid]]
//    }
//    }
//    console.log(middleElem(array))

// //----------------------------------------delete middle---------------------------------//

//    function deleteElem(array) {
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

// //--------------------------------------------find duplicate(true/false)-----------------------------------//

// function duplicate(array){
//     for(let i=0;i<array.length;i++){
//         for(let j=i+1;j<array.length;j++){
//              if(array[i]===array[j]){
//                 return true
//              }
//              }
//         }
//         return false
//     }

// console.log(duplicate(array))

// //------------------------------------------check duplicate and find--------------------------------------//

// // const duplicate = array.filter((num,index)=>{
// //     return array.indexOf(num)!==index
// // })
// // console.log(duplicate);

// //----------------------------------even number-------------------------------///

// let array8 = [2,6,5,7,8]
// const result = array8.filter((num)=>num%2==0)
// console.log(result)

//----------------------------------------secondlarget element---------------------------------//

// let array6 = [2,9,8,7,6,5,4,3]
// const result = Math.max(...array6)
// console.log(result) 

// const result1 = array6.sort((a,b)=>{
//     return b-a
// })
// console.log(result1[1])

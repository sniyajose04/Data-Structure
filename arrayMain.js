//-----------------------------------prime number-------------------------//
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let prime = []

// for(let i=0; i<arr.length; i++){
//     let isPrime = true
//     if(arr[i] <= 1){
//         isPrime = false
//     }else{
//         for(let j=2; j*j <= arr[i]; j++){
//             if(arr[i] % j == 0){
//                 isPrime = false
//                 break
//             }
//         }
//     }
//     if(isPrime){
//         prime.push(arr[i])
//     }
// }
// console.log(prime)

//--------------------------------------duplicates--------------------------------//

// const array = [1,9,8,2,7,6,2,5,3,4,5]
// function find(array){
// let duplicates = []

// for(let i=0;i<array.length;i++){
//     let isduplicate = false
    
// for(let k=0;k<duplicates.length;k++){
//     if(array[i]===duplicates[k]){
//         isduplicate = true
//         break
//     }
// }
// if(!isduplicate){
//     for(let j=i+1;j<array.length;j++){
//         if(array[i]===array[j]){
//             duplicates.push(array[i])
//             break
//         }
//     }
// }
// }
// return duplicates
// }
// console.log(find(array))



//---------------------------------------second largest----------------------------------//

// Function definition
// function findSecondLargest(arr) {
//     if (arr.length < 2) {
//         return null;  // Return null if there are less than 2 elements
//     }

//     let firstLargest = -Infinity;
//     let secondLargest = -Infinity;

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > firstLargest) {
//             secondLargest = firstLargest;
//             firstLargest = arr[i];
//         } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
//             secondLargest = arr[i];
//         }
//     }

//     return secondLargest;
// }

// // Example usage
// let arr = [10, 4, 3, 50, 23, 90];
// let secondLargest = findSecondLargest(arr);
// console.log("The second largest element is:", secondLargest);


//---------------------------------------target element needto be at end---------------------------------//

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

// //-----------------------------------middle-----------------------------//

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

//    //-----------------------------delete middle-------------------//

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
//----------------string length------------------------//

// let string = "sniya"
// const result = string.length
// console.log(result)


//--------------------concat-------------------//

// let str1 = "sniya"
// let str2 = "jose"
// const result = str1.concat(' ',str2)
// console.log(result)

//-----------------------------simple reverse---------------------//

// let str1 = "sniya"
// // const result = str1.split('').reverse().split('')
// const result = str1.split('').reverse()
// console.log(result)


//-------------------------palidrome---------------------//
// function palidrome(str){
//      const result = str.split('').reverse().join('')
//    return result === str
// }
// console.log(palidrome("sniya"))
// console.log(palidrome("malayalam"))

//-----------------------------count of string----------------------//

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

//---------------------------remove duplicate from the string--------------------------------//

// function removeduplicate(str){
// return [...new Set(str)].join('')
// }

// console.log(removeduplicate("sniya"))
// console.log(removeduplicate("malayalam"))


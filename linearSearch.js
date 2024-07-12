//------------------- Find an Element in an Array------------------------//

const arr = [2,3,4,5,6]
const target = 7
console.log(linearSearch(arr,target))

function linearSearch(arr,target){
    for(let i=0;i<arr.length;i++){
if(arr[i]==target){
    return i
}
    }
    return -1
}

// -------------------------Check if an Element Exists----------------------//

const array = [3,9,8,2,5,6,7]
const targetnum = 9
 function elementExists(array,targetnum){
    for(let i=0;i<array.length;i++){
        if(array[i]==targetnum){
            return true
        }
    }
    return false
 }
 console.log(elementExists(array,targetnum))

//------------------------------  Count Occurrences of an Element-------------------//

const array1 = [2,5,3,6,7,3,2,3,3,3]
const targetElem = 3
let count =0
function countElem(array1,targetElem){
    for(let i=0;i<array1.length;i++){
        if(array1[i]==targetElem){
            count++
        }
    }
    return count
}
console.log(countElem(array1,targetElem))

// --------------------------Find the Last Occurrence of an Element------------------------//

const array2 = [3,2,9,8,4,6,5,7]
const tarElem = 7
 function lastElem(array2,tarElem){
    for(let i=array.length-1;i>=0;i++){
        if(array2[i]==tarElem){
            return i
        }
    }
    return -1
 }
 console.log(lastElem(array2,tarElem))
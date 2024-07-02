let array = [2, 9, 4, 7, 8, 1, 6];
let target = 10;

function result(array, target) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return [array[i],array[j]];
            }
        }
    }
    return 0;  
}
console.log(result(array, target));

//time complexity = o(n^2)
//space complexity = o(1)

let array1 = [6,2,9,4,7,8,1,6,7,3,6,2,4,9,6];
let targets = 6


function repeat(array1,targets){
let targetElements =[]
let nonTargetElements = []
for (let i = 0; i < array1.length; i++) {
    if (array1[i] === targets) {
        targetElements.push(array1[i]);
    } else {
        nonTargetElements.push(array1[i]);
    }
}
return nonTargetElements.concat(targetElements);
}
console.log(repeat(array1,targets))

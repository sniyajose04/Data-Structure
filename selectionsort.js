// const arr = [9, 5, 2, 7, 1, 8, 4, 6, 3]
// for(let i=0; i<arr.length; i++){
//     let smallest = i
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[j] < arr[smallest]){
//             smallest=j
//         }
//     }
//     if(smallest!==i){
//         temp=arr[i]
//         arr[i]=arr[smallest]
//         arr[smallest]=temp
//     }
// }
// console.log(arr);


const arr = [9, 5, 2, 7, 1, 8, 4, 6, 3];
let i = 0;

while (i < arr.length) {
    let smallest = i;
    let j = i + 1;

    while (j < arr.length) {
        if (arr[j] < arr[smallest]) {
            smallest = j;
        }
        j++;
    }

    if (smallest !== i) {
        let temp = arr[i];
        arr[i] = arr[smallest];
        arr[smallest] = temp;
    }

    i++;
}

console.log(arr);


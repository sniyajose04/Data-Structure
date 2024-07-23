// const array = [-6,20,8,-2,4]
//  function insertionsort(array){
//     for(let i=1;i<array.length;i++){
//         let numbertoinsert = array[i]
//         let j=i-1
//         while(j>=0&&array[j]>numbertoinsert){
//             array[j+1]=array[j]
//             j=j-1
//         }
//        array[j+1]=numbertoinsert
//     }
//     return array
//  }

//  console.log(insertionsort(array))


 function insertionsort(array){
    for(let i=1;i<array.length;i++){
        let numbertoinsert = array[i]
        let j= i-1
        while(j>=0&&array[j]>numbertoinsert){
            array[j+1]=array[j]
            j=j-1
        }
        array[j+1]=numbertoinsert
    }
    return array
 }
 const array = [2,9,3,8,4,-7,0]
 console.log(insertionsort(array))

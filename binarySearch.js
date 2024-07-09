// Find an Element in a Sorted Array

function binarySearch(arr,target){
    let left =0;
    let right = arr.length-1;

    while(left <= right){
        let mid = Math.floor((left+right)/2);

        if(arr[mid]===target){
            return mid
        }

        else if(arr[mid]<target){
            left = mid+1
        }
        else if(arr[mid]>target){
            right = mid-1
        }
    }
    return -1
}

const arr = [2,4,6,8,10,12,14,16,18,20];
const target = 12;
const result = binarySearch(arr,target)

if(result !== -1){
    console.log("Element is present at index",result)
}else{
    console.log("Element is not present in array")
}

//recurrsive binary search 


function binarySearchRecursive(array,targets,left,right){
    if(left>right){
        return -1
    }
    let mid = Math.floor((left+right)/2)

    if(array[mid]===targets){
        return mid
    }else if(array[mid]<targets){
        return binarySearchRecursive(array,targets,mid+1,right)
    }else {
        return binarySearchRecursive(array,targets,left,mid-1)
    }

}

function binarySearchs(array,targets){
return binarySearchRecursive(array,targets,0,array.length-1)

}
const array = [2,4,6,8,10,12,14,16,18,20];
const targets = 12;
console.log(binarySearchs(array,targets))
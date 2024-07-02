//factorial using for loop
let n=5
let k = 1
for(let i=2;i<=n;i++){
     k=k*i
}
console.log(k)

//factoerial using recursion

// Factorial Calculation
let m=5;
function f(m){
 if(m<=1){
    return 1
 }else{
    return m*f(m-1)
 }
}

console.log(f(m))

// Fibonacci Sequence

function fibonacci(n){
    if(n<=1){
        return n
    }else{
        return fibonacci(n-1)+fibonacci(n-2)
    }
}
console.log(fibonacci(7))

//String Reversal

function reverseString(str){
    if(str === ""){
        return ""
    }else{
        return reverseString(str.substr(1))+str[0]
    }
}
console.log(reverseString("sniya"))

// palindrome using recursion

function isPalidrome(str){
    if(str.length<=1){
        return true;
    }

    if(str[0]===str[str.length-1]){
        return isPalidrome(str.substring(1,str.length-1))
    }
    else{
        return false
    }
}
console.log(isPalidrome("sniya"))
console.log(isPalidrome("malayalam"))
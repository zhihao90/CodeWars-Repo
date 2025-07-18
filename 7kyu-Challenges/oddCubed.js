/*
Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers

*/

function cubeOdd(arr) {

arr = arr.map((a) => a = a*a*a)
let result = 0
  for (let i = 0; i < arr.length; i++){
    if(isNaN(arr[i])){
      return undefined
    }
    else if(arr[i]%2 != 0){
      result += arr[i]
    }
  }

  
return result;
}
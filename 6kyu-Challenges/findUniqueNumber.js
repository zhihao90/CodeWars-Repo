
/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

*/


function findUniq(arr) {
for (i = 0; i < arr.length; i++){
  if (arr.findIndex(a => a == arr[i]) == arr.findLastIndex(a => a == arr[i])){
    return arr[i]
  }
}

}
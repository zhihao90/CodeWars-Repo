/*

You are given an odd-length array of integers, in which all of them are the same, except for one single number.

Complete the method which accepts such an array, and returns that single different number.

The input array will always be valid! (odd-length >= 3)

Examples
[1, 1, 2] ==> 2
[17, 17, 3, 17, 17, 17, 17] ==> 3

*/
function solve(s){
   let arr1 = s.toLowerCase();
   let arr2 = s.toUpperCase();

   return s.filter(item => arr1.includes(item)).length > s.filter(item => arr1.includes(item)).length ? arr1 : arr2
}

console.log(solve("coDe"))
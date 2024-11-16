/*
Task
We need a function to collect these numbers, that may receive two integers 
a
a, 
b
b that defines the range 
[
a
,
b
]
[a,b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Examples
Let's see some cases (input -> output):

1, 10  --> [1, 2, 3, 4, 5, 6, 7, 8, 9]
1, 100 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range 
[
a
,
b
]
[a,b] the function should output an empty list.

90, 100 --> []
*/


function sumDigPow(a, b) {
  let result = []
  for (let i = a; i <= b; i++){
    let iArr = i.toString().split("")
    let eur = iArr.reduce((acc,item,index) => acc + Number(item) ** (index + 1), 0)
    if (eur == i){
      result.push(eur)
    }
       
  }
  return result 
}

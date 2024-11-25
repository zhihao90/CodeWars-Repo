/*

Description:
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071
If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1

*/

function nextBigger(n){
    n = n.toString().split("")
    let store =[]
    let limit = 0
    
    for (let i = n.length-1; i >= 1; i--){
        for(let j = i - 1; j >= limit; j--){


            if (n[i] > n[j]){
                let value = []
                limit = j
                let sub = n[i]
                let rep = n[j]
                value = (n.slice(0,Math.max(j,0)).concat(sub).concat(n.slice(j+1, i)).concat(rep).concat(n.slice(i+1)))
                let secondHalf = value.slice(j+1).sort()
                value = value.slice(0, j+1).concat(secondHalf)
                store.push(value.join(""))

              }           
        }
    }
    
    if (store.length < 1) {
        return -1
    }
    else {
        return Math.min(...store)
    }
    
    
  }

  
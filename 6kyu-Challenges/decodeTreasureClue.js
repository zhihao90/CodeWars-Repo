/*
Description:
It was a long, hard voyage with many battles, but finally you've found Captain Blackbeard's treasure room. It's full of treasure chests! But they all have combination locks.

The locks:
Each lock has two or more numbers anywhere from 1 to 100 000. They are labeled with letters, but the letters do not change (they're just labels). Examples:

A (number reel) B (number reel)
E (number reel) R (number reel) Y (number reel)

The Clues:
Because Blackbeard had such a poor memory, he's written clues on the bottom of each chest. Example:

Clue: "A2B4C6"

You figure out that if you divide each number by the greatest common factor, it gives you the correct code to the chest. Examples:

Clue: "A2B4C6"

Gretest common factor = 2
2 / 2 = 1
4 / 2 = 2
6 / 2 = 3

Code: "A1B2C3"

More examples:

Clue: "T3Y3U9E6" Code: "T1Y1U3E2"
Clue: "M3H7" Code: "M3H7"
Clue: "Y14U7I7P21 Code: "Y2U1I1P3"

Task:
Write a function treasureCode(), that accepts a String parameter and returns the correct code as a String.

Input: String. Two or more letter number combinations. The letter will be one uppercase character A-Z. The number can be from 1 to 100 000.

Output: String.

Good luck!
*/

function treasureCode(clue) {
    
  clue = clue.split("")
  let arr = []
  let arr2 = [clue[0]]
  let mark = 1

  for(i = 1; i <clue.length; i++){
    if(isNaN(clue[i])){
        arr2.push(clue[i])
        arr.push(clue.slice(mark,i).join(""))
        mark = i+1
    }


  }

  arr.push(clue.slice(mark, clue.length).join(""))

  let smallest = Math.min(...arr)

  console.log(arr2)
  console.log(arr)

  for(i = smallest; i > 0; i--){
    let trig = 0
    for(j = 0; j < arr.length; j++){
        if(arr[j]%i != 0){
            trig = 1
        }
    }
    if (trig == 0){
        console.log(`The HCF is ${i}`)
        arr = arr.map(a => a = a/i)
        break;
    }

}

let result = []

for(let i = 0; i < arr.length; i++){
    result.push(arr2[i])
    result.push(arr[i])
}

return(result.join(""))

}
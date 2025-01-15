/*
Fans of The Wire will appreciate this one. For those that haven't seen the show, the Barksdale Organization has a simple method for encoding telephone numbers exchanged via pagers: "Jump to the other side of the 5 on the keypad, and swap 5's and 0's."

Here's a keypad for visualization.

┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
Detective, we're hot on their trail! We have a big pile of encoded messages here to use as evidence, but it would take way too long to decode by hand. Could you write a program to do this for us?

Write a function called decode. Given an encoded string of exactly 10 digits, return the actual phone number in string form. Don't worry about input validation, parenthesis, or hyphens.
*/

function decode(string) {
    let one = [1,2,3,4,5]
    let two = [9,8,7,6,0]
    let result = []
    
    string = string.toString().split("")

    console.log(string)
    
    for(let i = 0; i < string.length; i++){
     if (one.includes(Number(string[i]))){
       result.push(two[one.findIndex((a) => a == string[i])])
     }
      else{
        result.push(one[two.findIndex((a) => a == string[i])])
      }
      

      
    }
    return(result.join("")) 
    
    
  }



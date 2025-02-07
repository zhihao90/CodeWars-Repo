/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

function solution(text, markers) {
    text = text.split("\n")
    let result = []
    for (let line of text){
        let endPoint = line.length
        for (let marker of markers){

            let newEnd = line.split("").findIndex(a => a == marker)
            if(newEnd > -1 && newEnd < endPoint){
                endPoint = newEnd
            }
            
        }

        result.push(line.slice(0,endPoint).trimEnd())
    }

    return(result.join("\n"))
  }

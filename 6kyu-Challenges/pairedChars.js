/*
Description:
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

function solution(str){
    let result = []
    let x = 0

    for (let i = 0 ; i<str.length; i++){
        if(i%2 == 0){
            result.push(str.slice(x,i))
            x = i            
        }
        
    }
    str.slice(x).length == 1 ? result.push(str.slice(x).concat("_")) : result.push(str.slice(x))
    result.shift()
    return(result)
}



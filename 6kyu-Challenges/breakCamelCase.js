/*Description:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""*/


function solution(string) {
    let result = []
    for (let letter of string){
        letter == letter.toUpperCase() ? result.push(` ${letter}`) : result.push(letter)
    }
    return result.join("")
}


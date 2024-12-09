/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/

function pigIt(str){
  str=str.split(" ")
  let result = []
  for (let word of str){
    word = word.split("")
    if(word.length == 1 && (word == "!" || word == "." || word == "," || word == "/" || word == "?")){
      result.push(word)
    }else{
    result.push(`${word.slice(1).join("")}${word[0]}ay`)
    }
  }
  return result.join(" ")
}


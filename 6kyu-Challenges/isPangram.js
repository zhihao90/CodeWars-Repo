function isPangram(string){
  let numOfLetters = Array.from(new Set(string.toLowerCase().split("").filter(char => char >= "a" && char <= "z" )))
  return numOfLetters.length >= 26
}
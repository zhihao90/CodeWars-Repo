/*
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

*/


function rot13(message){
    let cipher = ["a", "b", "c", "d", "e", "f", "g", "h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    let result = []

    for (let char of message){
        if (cipher.includes(char.toLowerCase())){
            let newIndex = (cipher.findIndex(item => item == char.toLowerCase()) + 13)%26
            result.push(char.toLowerCase() == char ? cipher[newIndex] : cipher[newIndex].toUpperCase())
        }
        else
        {
            result.push(char)
        }
    }
    return(result.join(""))
  }

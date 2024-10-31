/*
Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"

*/

function encryptThis(text) {
    text = text.split(" ")
    let result = []
    let finalresult = []
    
    for (let word of text){
    
    result.push(word.charCodeAt(0))

    if(word.length > 2){
    result.push(word.charAt(word.length-1))
    result.push(word.slice(2,word.length-1))
    result.push(word.charAt(1))
    }else if(word.length == 2){
        result.push(word.charAt(1))
    }
    
    finalresult.push(result.join(""))
    result = []
    }
    
    
    
    
    
    return finalresult.join(" ")
  }

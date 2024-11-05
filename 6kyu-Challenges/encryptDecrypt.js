/*
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.


*/

function encrypt(text, n) {
    
    if(!text || n < 0){
      return text
    }else{
    
    text = text.split("")
    for(let i = 0; i < n ; i++){

    let arr1 = []
    let arr2 = []
    
    text.forEach((item, index) => {
        if (index % 2 != 0){
            arr1.push(item)
        }else{
            arr2.push(item)
        }
    })

    text = arr1.concat(arr2)
    

  }

  return text.join("")
      }
}
  
  function decrypt(encryptedText, n) {
    
    if(!encryptedText || n < 0){
      return encryptedText
    }else{

    let middle = Math.floor(encryptedText.length/2)

    for(let j = 0; j < n; j++){
  
    let arr1 = encryptedText.slice(0,middle)
    let arr2 = encryptedText.slice(middle)

    let result = []

    for (let i = 0; i <  arr2.length; i++){

        result.push(arr2[i])
        if(arr1[i]){
         result.push(arr1[i])
        }
    }

    encryptedText = result.join("")

    }

    return(encryptedText)
      }

  }


/*

The Caesar cipher is a notorious (and notoriously simple) algorithm for encrypting a message: each letter is shifted a certain constant number of places in the alphabet. For example, applying a shift of 5 to the string "Hello, world!" yields "Mjqqt, btwqi!", which is jibberish.

In this kata, your task is to decrypt Caesar-encrypted messages using nothing but your wits, your computer, and a set of the 1000 (plus a few) most common words in English in lowercase (made available to you as a preloaded variable named WORDS, which you may use in your code as if you had defined it yourself).

Given a message, your function must return the most likely shift value as an integer.
A few hints:

Be wary of punctuation
Shift values may not be higher than 25

*/

function breakCaesar(st){
    //Split string into words
    st = st.split(" ")
    let st2 = []
    let result = []
    let result2 = []
    let newIndexArr = []
     //words = ["heLLo", "worLd", "wtf"]
    //let WORDS = new Set(words)
    let wordArr = Array.from(WORDS).map(item => item.toLowerCase())
    let count = 0

    console.log(wordArr)

    //Remove punctuation
    st.forEach((item, index) => {
        item = item.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, "")
        st2.push(item.toLowerCase())
    })

    console.log(st2)

    //Shift words

    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    for(let j = 25; j > 0; j--){
        for (let i = 0; i < st2.length; i++){
            for(let char of st2[i]){
                newIndex = alphabet.findIndex(item => item == char) - j
                newIndex = newIndex >= 0 ? newIndex : 25 + newIndex + 1
                result.push(alphabet[newIndex])
                newIndexArr.push(newIndex)
            }
            result2.push(result.join(""))
            result = []

        }
        
      if(result2.length > 1){
        for(let word of result2){
            if (word.length >= 3 && wordArr.includes(word)){
                count++
              if (count >= 2){
                return j   
                }
            }
        }
        }else{
          if(wordArr.includes(result2[0])){
            return j
          }
        }


        console.log(result2)
        result2 = []
        count = 0

    }

}



breakCaesar("dam")
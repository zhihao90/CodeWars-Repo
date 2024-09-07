/*
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/


function incrementString (strng) {
    
    //detect number at end of string
    let count = 0
    let strRev = strng.split("").reverse();
    for (i=1 ; i<=strRev.length; i++){
        if (Number(strRev.slice(0, i).join("")) * 0 == 0 ){
            count++
        }
    }
    let isolNum = strng.slice(strng.length-(count), strng.length)

    //add 1 to that number

    let finalNum = (Number(isolNum)+1).toString()   
    
    //replace the original number in the string

    if (isolNum.length < finalNum.length)
    {
      return(strng.slice(0,strng.length-isolNum.length).concat(finalNum))
    }
    else
    {
      return(strng.slice(0,strng.length-finalNum.length).concat(finalNum))        
    }
    
}


function incrementString(strng) {
    let numIndex = strng.length;
    
    for (let i = strng.length - 1; i >= 0; i--) {
      if (isNaN(strng[i]) || strng[i] === ' ') {
        numIndex = i + 1;
        break;
      }
    }
    
    const letters = strng.slice(0, numIndex);
    const numStr = strng.slice(numIndex) || '0';
  
    const incrementedNum = (parseInt(numStr) + 1).toString();
    const paddedNum = incrementedNum.padStart(numStr.length, '0');
  
    return letters + paddedNum;
  }
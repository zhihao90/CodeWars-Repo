/*

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False

*/

function scramble(str1, str2) {
    str1 = str1.split("").reduce((obj, item) => {
        if (!obj[item]){
            obj[item] = 1
        }else{
            obj[item]++
        }
        return obj;
    }, {})
    str2 = str2.split("").reduce((obj, item) => {
        if (!obj[item]){
            obj[item] = 1
        }else{
            obj[item]++
        }
        return obj;
    }, {})


    for (let property in str2){
        if(!(str1[property] >= str2[property])){
            return false
        } 
    }

    return true
  }



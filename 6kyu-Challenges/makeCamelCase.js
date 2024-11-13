/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"

"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

"The_Stealth-Warrior" gets converted to "TheStealthWarrior"

*/
function toCamelCase(str){
    let x = 0
    let y = 0
    let strArr = []
    for (let letter of str){
        if (letter == "-" || letter == "_"){
            strArr.push(str.slice(x, y))       
            x = y +1 
        }
        y++
    }
    strArr.push(str.slice(x))

    let result = []
    

   for (let i = 1; i < strArr.length; i++){
        strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1).toLowerCase()
    }

    console.log(strArr.join(""))

}

//SOLUTION 2:

function toCamelCase(str){
    str = str.split("")
      let result = []
      for(let i = 0; i < str.length; i++){
        if(str[i] == "-" || str[i] == "_"){
          result.push(str[i+1].toUpperCase())
          i = i+1
        }
        else{
          result.push(str[i])
        }
      }
      
      return result.join("")
    
    }


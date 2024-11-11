/*

In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

Create as many "shufflings" as you can!

Examples:

With input 'a':
Your function should return: ['a']

With input 'ab':
Your function should return ['ab', 'ba']

With input 'abc':
Your function should return ['abc','acb','bac','bca','cab','cba']

With input 'aabb':
Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
Note: The order of the permutations doesn't matter.

Good luck!

*/

// Attempt 1

/*

function permutations(string) {
    let result = 1
	for (i = string.length; i > 1; i--){
        result = result * i
    }

    let divisor = []
    let deno = 1

    string = string.split("")

    let strObj = string.reduce((obj,item) => {
        if(!obj[item]){
            obj[item] = 1
        }else{
            obj[item]++
        }
        return obj;
    }, {})




    for (let item in strObj){
        divisor.push(strObj[item])
    }

   for (let num of divisor){
    for(i = num; i > 1; i--){
        deno = deno * i
        
    }
   }

   result = result/deno


    
    let stringShuffle =[]
    let finalArr = []
    let numArr = []
    let count = 1


    while(finalArr.length < result){

        console.log(`Attempt: ${count}`)
        count++

        while(stringShuffle.length < string.length){
            let strIndex = Math.max(0, Math.round(Math.random()*string.length)-1)
                    
            if(!numArr.includes(strIndex)){
            numArr.push(strIndex)
            stringShuffle.push(string[strIndex])
            }        
        }

        stringShuffle = stringShuffle.join("")
    
        if(!finalArr.includes(stringShuffle)){

            finalArr.push(stringShuffle)            
        }

        
        stringShuffle = []
        numArr = []
                
    }

    return finalArr

}




function findPermutations(str){
    if (str == ""){return 0}
    if (str.length == 1){return 1}
    for (i = 0; i < str.length; i ++){
        let fixedChar = str[i]
        let remainingChar = str.slice(0,i) + str.slice(i+1)
        console.log(`Fixed char ${fixedChar}. Remaining Chars: ${remainingChar}`)
    }
}

*/

function perm(str){
    if (str.length === 1) return str;
    //if (str.length === 0) return "";

    let result = new Set()

    for(let i = 0; i < str.length; i++){
        const fixedChar = str[i]
        
        const varChar = str.slice(0,i) + str.slice(i+1)

        const remainingPermuted = perm(varChar)

        for(let j =0; j < remainingPermuted.length; j++){
            let permutation = fixedChar + remainingPermuted[j]
            result.add(permutation)
            //console.log(result)
            
        }
        
    }
    
    return Array.from(result)


}

console.log(`FINAL: ${perm("abba")}`)
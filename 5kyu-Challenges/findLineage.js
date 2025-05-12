
/*
My Father's Father Riddle
You are given a variation of the classic logical riddle:

A man looks at a picture on the wall and says:
'Brothers and sisters, I have none.
But that man's father is my father's son.'
Who is the man in the picture?

The answer: "My son."

Objective
Given an array of words representing a family chain, determine the relationship of the final person in the chain to yourself.

Every array starts with "my" and has a minimum one link in the chain, which is a patriarchal relation.

Your job is to calculate the generational difference and return the proper relationship as a string.

Sometimes another relative tries to butt in, but that's not allowed! Instead tell us they're "not my immediate patriarchal lineage"

Examples
findLineage(['my', "father's", "son"]) 
// ➞ "myself"

findLineage(['my', "father's", "son's", "son's", "son"]) 
// ➞ "my grandson"

findLineage(['my', "father's", "father's", "father"]) 
// ➞ "my great grandfather"

findLineage(['my', "father's", "son's", "son"]) 
// ➞ "my son"

findLineage(['my', "uncle's", "son"]) 
// ➞ "not my immediate patriarchal lineage"

*/

function findLineage(family) {
   let relations = ['grandson', 'son', 'myself', 'father', 'grandfather']

   //determine relation
   let cursor = 2

   for(let i = 0; i < family.length; i++){
     
    let current
    
    current = family[i].endsWith("s") ? family[i].slice(0, family[i].length-2) : family[i]


    switch(current){
        case "son":
            cursor -= 1;
            break;
        case "father":
            cursor += 1;
            break;
        case "grandson":
            cursor -= 2;
            break;
        case "grandfather":
            cursor += 2;
            break;
        case "my":
            break;
        default:
            return "not my immediate patriarchal lineage"
    }

   }

   // add greats

   let greatCount = 0

   if (cursor > 4){
    greatCount = cursor - 4
    cursor -= greatCount

   }
   else if (cursor < 0){
    greatCount = 0 - cursor
    cursor += greatCount

   }

   // construct answer

   if (cursor == 2) {
    return("myself")
   }

   return(`my${" great".repeat(greatCount)} ${relations[cursor]}`)

}
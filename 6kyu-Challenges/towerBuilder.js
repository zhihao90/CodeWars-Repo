/*
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
    let spaceNum = nFloors-1
    let star = 1
    let result = []
    for (i = 0; i < nFloors; i++){
        result.push(`${" ".repeat(spaceNum)}${"*".repeat(star)}${" ".repeat(spaceNum)}`)
        star+=2
        spaceNum--
    }
    return result
  }



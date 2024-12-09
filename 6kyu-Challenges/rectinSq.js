/*

How do you cut a given "true" rectangle into squares ("true" rectangle meaning that the two dimensions are different).

You will be given two dimensions

a positive integer length
a positive integer width
You will return a collection or a string (depending on the language; Shell bash, PowerShell, Pascal and Fortran return a string) with the size of each of the squares.
*/


function sqInRect(lng, wdth){
    let result = []

    if (lng == wdth) return null

    while (lng != wdth){
        result.push(Math.min(lng, wdth))        
        lng > wdth ? lng -= wdth : wdth > lng ? wdth -= lng : wdth = wdth
    }

    result.push(lng)
    return result

  }
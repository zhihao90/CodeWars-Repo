/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

sz is <= 0 or if str == "" return ""
sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".
Examples:
("123456987654", 6) --> "234561876549"
("123456987653", 6) --> "234561356789"
("66443875", 4) --> "44668753"
("66443875", 8) --> "64438756"
("664438769", 8) --> "67834466"
("123456779", 8) --> "23456771"
("", 8) --> ""
("123456779", 0) --> "" 
("563000655734469485", 4) --> "0365065073456944"
Example of a string rotated to the left by one position:
s = "123456" gives "234561".
*/

function revrot(str, sz) {

    if(sz <= 0 || str == "" || sz > str.length){
        return ""
    }

    let arr = []
    let end = sz
    let start = 0
    let result = []
    for (let i = 0; i < (Math.floor(str.length/sz)); i++){
        arr.push(str.slice(start, end))
        start = end
        end += sz
    }

    for(let i = 0; i < arr.length; i++){
        let remainder = arr[i].split("").reduce((acc, item) => acc += Number(item), 0)%2
        if(remainder == 1){
            result.push(arr[i].slice(1,arr[i].length)+arr[i][0])
        }else{
            result.push(arr[i].split("").reverse().join(""))
        }
    }

    return result.join("")
}
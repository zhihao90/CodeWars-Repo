/*
Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017
Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
some tests will include very large numbers.
test data only employs positive integers.
The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."
*/

function nextSmaller(n) {

    n = n.toString().split("")
    let result = []

    //General idea is to exchange a smaller number, starting at the end, with a larger number, then sorting remainder largest to smallest to get the largest next smallest number

    for (let i = n.length-1; i > 0; i--){
        for (let j = i-1; j >= 0 ; j--){
            if (n[j] > n[i]){

                let firstPiece = n.slice(0,j)
                let secondPiece = n.slice(j,i).concat(n.slice(i+1)).sort((a,b) => b-a)

                //Algo inserts the lower number behind the larger number and pushes the rest of the array down after sorting largest to smallest, so as to ensure this is the largest possible number

                let entry = (firstPiece.concat(n[i]).concat(secondPiece))

                if (entry[0] != 0){
                    result.push(Number(entry.join("")))
                }

                //Since smaller numbers may result from other substitutions, we put all valid results into an aray
                
                
            }
        }
    }

    //...and return the largest of that array (next smallest after the entry)

    return result.length == 0 ? -1 : Math.max(...result)

  }

  console.log(nextSmaller(51226262651257))
  //51226262627551
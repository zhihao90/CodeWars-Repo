/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]
This image will illustrate things more clearly:


NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/


function snail(arr){


    let horizontal = arr[0].length-1
    let vertical = arr.length-1
    let horNeg = 0
    let verNeg = 0

    if(horizontal == -1){
        return []
    }

    let total = (horizontal+1) * (vertical+1)
    let result = []


    let x = 0
    let y = 0
    let stage = 0


    while(result.length < total){

        if(stage == 0 && y < horizontal)
        {
            result.push(arr[x][y])
            y++
        }
        else if(stage == 0 && y == horizontal)
        {
            result.push(arr[x][y])
            stage = 1
            horizontal--
            x++
        }
        else if(stage == 1 && x < vertical)
        {
            result.push(arr[x][y])
            x++
        }
        else if(stage == 1 && x == vertical)
        {
            result.push(arr[x][y])
            stage = 2
            vertical--
            y--
        }
        else if(stage == 2 && y > horNeg)
        {
            result.push(arr[x][y])
            y--
        }
        else if(stage == 2 && y == horNeg)
        {
            result.push(arr[x][y])
            stage = 3
            horNeg++
            x--
        }
        else if(stage == 3 && x > verNeg+1)
        {
            result.push(arr[x][y])
            x--
        }
        else if(stage == 3 && x == verNeg+1)
        {
            result.push(arr[x][y])
            stage = 0
            verNeg++
            y++
        }   

        else{
  
        result.push("PH")
        }
       
    }
    
    return(result)


}
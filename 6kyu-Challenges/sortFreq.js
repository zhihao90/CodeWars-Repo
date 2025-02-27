/*
Description:
Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

Note: no empty arrays will be given.

Examples
[12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
[12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
[12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3
*/





function highestRank(arr){
    let arrObj = arr.reduce((obj,item)=>{
        if (!obj[item]){
            obj[item] = 1
        }else{
            obj[item]++
        }
        return obj;
    }, {})

    let result = []

    for(let item in arrObj){
        result.push(arrObj[item])
    }

    result = (result.sort((a,b) => b-a))

    let resultObj = {}

    for(let item in arrObj){
        if(arrObj[item] == result[0]){
            resultObj[item] = arrObj[item]
        }
    }
    
    return(Object.keys(resultObj).sort((a,b) => b-a)[0])

}

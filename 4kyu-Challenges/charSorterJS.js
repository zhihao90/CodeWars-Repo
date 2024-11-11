
function mix(s1, s2) {

    //Make Objects counting chars and amounts
    s1 = s1.split("")
    s2 = s2.split("")

    function makeObj(str){
        let obj1 = str.reduce((obj, item) =>{
            if(!obj[item]){
                obj[item] = 0
            }
            obj[item]++
            return obj;
        }, {})
        
    
    
        for(let property in obj1){
            if (obj1[property] < 2 || property == " "){
                delete obj1[property]
            }
        }

        return obj1

    }


    //Generate arrays from the objects


    let arr1 = Object.entries(makeObj(s1)).sort((a,b) => b[1] - a[1])
    let arr2 = Object.entries(makeObj(s2)).sort((a,b) => b[1] - a[1])
    let arr3 = arr1.concat(arr2)

    console.table(arr3)

    // Assign identifiers to each subarray

    for (let i = 0; i < arr3.length; i++){
        i < arr1.length ? arr3[i][2] = "1" : arr3[i][2] = "2"
    }


    for (let i = 0; i < arr1.length; i++){
        //console.log(arr3[i])
        for(let j = arr1.length; j < arr3.length; j++){
            if(arr3[i][0] == arr3[j][0]){
                if(arr3[i][1] == arr3[j][1]){
                    arr3[i][2] = "3"
                    arr3[j][2] = "del"
                }else{
                    arr3[i][1] > arr3[j][1] ? arr3[j][2] = "del" : arr3[i][2] = "del"
                }
            }
        }
    }


    //First Sort: Sort by descending order of string instances

    
    let result = []
    for (let item of arr3){

        if(item[2] != "del"){
            result.push(item)
        }
        
    }

    result = result.sort((a,b) => b[1] - a[1])


    //Second Sort - Sort by string order: s1, s2, or =

    let subArrs = []
    let arrFinal = []
    let x = 0

    for (let i = 1 ; i < result.length; i++){
        if (result[i][1] != result[i-1][1]){
            
            subArrs.push(result.slice(x , i).sort((a,b) => a[2]-b[2]))
            x = i

        }
        
    }
    subArrs.push(result.slice(x).sort((a,b) => a[2]-b[2]))

    //3rd sort - sort by alphabetical order

    let subArr2 = []
    x= 0

    for(let item of subArrs){

        for(let i = 1; i < item.length; i++){
            if(item[i][2] != item[i-1][2]){item
                subArr2.push(item.slice(x , i).sort((a,b) => a[0].charCodeAt(0) - b[0].charCodeAt(0)))
                x = i
            }
        }
        subArr2.push(item.slice(x).sort((a,b) => a[0].charCodeAt(0) - b[0].charCodeAt(0)))
        x = 0
        
    }



    //convert back to straight array
   
    for (let i = 0; i < subArr2.length; i++){
        for (let item of subArr2[i]){
            arrFinal.push(item)
        }
                
    }


    //Replace all string 3s with "="

    for(let item of arrFinal){
        if (item[2] == "3"){
            item[2] = "="
        }
    }
  
    
   
    // Display final solution

    let finalAns = []

    for(let item of arrFinal){
        finalAns.push(`${item[2]}:${item[0].repeat(item[1])}`)
    }

    console.log(finalAns.join("/"))



  }

  mix("Are th2288ey here", "yes, they are her2288e")
  //mix("looping is fun but dangerous", "less dangerous than coding")
mix("aacceevvkkttzz", "zzffvppvv")

function findHack(arr) {
  let obj = {
    "A": 30,
    "B": 20,
    "C": 10,
    "D": 5,

  }
  let cheaters = []
  for (let subarr of arr){
    let actualScore = subarr[2].reduce((a,b) =>  a += (obj[b] ? obj[b] : 0), 0)
    
    let abTest = 0
    
    for (let letter of subarr[2]){
      if (letter == "A" || letter == "B"){
        abTest ++
      }
    }
    
    if (subarr[2].length >= 5 && abTest == subarr[2].length){
      actualScore +=20
    }
    
    if(actualScore > 200){
      actualScore = 200
    }
    
    
    console.log(`${subarr[0]} : ${subarr[1]} vs ${actualScore}`)
    if (actualScore != subarr[1]){
      cheaters.push(subarr[0])
    }
  }
  return cheaters
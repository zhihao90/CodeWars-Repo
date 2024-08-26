function openOrSenior(data){
  let arr = []
  data.forEach((a,b) => {
  	 if(a[0] >= 55 && a[1] > 7){
      arr.push("Senior")
    }else{
      arr.push("Open")
    }

  })
  return arr
}

function count(string) {

  return string.split("").reduce(function(obj, element){
  	if(!obj[element]){
  		obj[element] = 0
  	} 
  	obj[element]++;
  	return obj;
  }, {})

}
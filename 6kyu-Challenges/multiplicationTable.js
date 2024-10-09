/*
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]

*/



multiplicationTable = function(size) {
    let result = []

    for (i = 0; i < size; i++){
        result[i] = []
        for (k = 1; k <= size; k ++ ){
            result[i].push(k*(i+1))
        }
    }

    return(result)
  }



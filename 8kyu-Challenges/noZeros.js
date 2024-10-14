/*

Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

*/

function noBoringZeros(n) {
    if (n == 0){
        return 0
    }
    n = n.toString().split("")
    for (i = n.length-1; i > 0; i--){
        if (n[i] == "0"){
            n.pop()
        }else{
            break;
        }
    }
    return Number(n.join(""))
  }



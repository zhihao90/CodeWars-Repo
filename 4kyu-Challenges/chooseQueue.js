/*
Tasks
Function Purpose
This function accepts two arguments: "already" and "friends". The function's purpose is to determine which register a new newcomer should choose.

General Rule
The general rule is that the newcomer should choose the register with the least number of people. If there are multiple registers with the same number of people, the newcomer should choose the one closest to index 0.

Exception Rule
However, there is an exception to this rule. If a register has the newcomer's friends, it should be given priority, regardless of the number of people in that register. If there are multiple registers with the newcomer's friends, the function should prioritize the one with the fewest number of people. Again, if there are multiple registers with the same number of people, the one closest to index 0 should be chosen.

Summary
In summary, the function follows a set of rules to determine the best register for the new newcomer, considering the number of people and the presence of friends in the registers.

Input
The already parameter: information about the people already in line at each register, like [["Tom", "July", "Pinding"], ["Damon", "Rexing", "Pars", "Dof"], ["Sadan", "Mix"]].
The friends parameter: a list of friends of the new person, similar to ["July", "Pars"].
Output
Index of checkout counters where the new joiner goes.
Example
whichCashier([["July", "Sand", "Desong", "Linda"],["Goly"],["Keven", "Lax"]],["Linda", "Keven"])
//output need is 2
Tests
3 fixed tests
100 random tests
Note
Input range:
10 cashiers
100 < already.element.length < 1000
0 < friends.length < 10
*/

function whichCashier(already, friends) {
  //See if friends are here

  already = already.map((a,b) => [b, ...a])
  console.log(already)

  let priority = []

  for (let i = 0; i < friends.length; i++){
    for(let j = 0; j < already.length; j++){
        if(already[j].includes(friends[i])){
            priority.push(already[j])
        }
    }
  }


  if(priority.length == 0){
    priority = already
  }

  // Choose smallest queue

 let result = 0

 for(let i = 0; i < priority.length; i++){

    if(priority[i].length < priority[result].length){
        result = i
    }
    
 }

 return(priority[result][0])




}

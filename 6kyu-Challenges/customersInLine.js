/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.

Important
Please look at the examples and clarifications below, to ensure you understand the task correctly :)

Examples
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12


*/



function queueTime(customers, n) {
//Create an array representing the tills serving each customer
    let tills = customers.slice(0,n)
    console.log(`The starting till status is ${tills}`)
//Create array representing remaining customers
    let remainingCustomers = customers.slice(n,customers.length)
    console.log(`The starting customers waiting are ${remainingCustomers}`) 
//Create a variable finalTime to count total time required to service all customers. This will be our final answer. 
    let finalTime
//Account for situation where there are more tills than customers. The answer is simply the customer that will take the longest time.
    if(remainingCustomers.length == 0)
    {
        finalTime = Math.max(...tills)
        console.log(`There are no customers in line. Final time is ${finalTime}~~~~~~~~~~`)
    }
    else
    {
    //Start a counter for the slowest customer in each queue. 
    let countNew
    let slowGuy = Math.max(...tills)

    //We know the final answer will be at LEAST as long as the slowest customer
    finalTime = slowGuy

    //We will check with each loop if the slowest customer is done at tills[slowGuyPosition]
    let slowGuyPosition = tills.findIndex(a => a == slowGuy)
    console.log(`The slowest customer is ${slowGuy} at position ${slowGuyPosition}`)

    //Create a loop representing a customer being serviced and replaced by the next customer in line, until there are no customers left
        for (i = 0; i < remainingCustomers.length; i++)
        {
            
            console.log(i)
            //Define a new variable for the customer(s) who will be done first
            let fastestCust = Math.min(...tills)

            //To simulate time passing for all customers, reduce all elements in the tills array by the lowest number. We then know which till has opened up.
            tills = tills.map((a,b) => a-fastestCust)
            console.log(`Customer(s) has/have been serviced. The till status is now ${tills}`)

            //Check to see if the slowest customer is done. If yes, flick a switch to 1. 
            if (tills[slowGuyPosition] == 0)
                {
                    console.log(`The slowest customer is done!`)
                    //If the slowest customer is done, the program now looks for the new slowest guy in the new till setup, AFTER the zeros have been replaced in the block below. It switches a countNew switch to 1, which activates an if loop below to search for the new slowest customer.
                    countNew = 1
                }

            //Find number of zeros in the tills. These are the number of available tills.
            let allZeros = tills.filter((a) => a == 0).length

            //Write a second loop to replace all serviced customers with new customers
            console.log(`The following number of tills are open: ${allZeros}`)
            for (j =0 ; j < allZeros; j ++)
            {
                let zeroIndex = tills.findIndex((a)=> a == 0)
                //If there are no more customers in line, simply replace the position in the array with a 0. Not doing this causes code to break.
                if(remainingCustomers[i] == undefined)
                {
                    tills.splice(zeroIndex,1,0)
                    console.log(`No more customers! Till status: ${tills}`)
                }
                else
                {
                console.log(`The customer to be replaced is at position ${zeroIndex}. The next customer in line is ${remainingCustomers[i]}`)
                tills.splice(zeroIndex, 1, remainingCustomers[i])
               
                i++
                }

            }   
                //i-- here offsets the i++ in the parent for loop
                i--
                console.log(`The current till status is ${tills}!!!`)


            //Check to see if the previous slowest customer is done. We only care about who the new slowest customer is when the previous one is finished. This avoids counting all the other customers who were serviced cotemporaneously. We add the new slowest customer to finalTime. 
            if (countNew == 1)
            {                
                slowGuy = Math.max(...tills)
                slowGuyPosition = tills.findIndex(a => a == slowGuy)
                console.log(`The new slowest customer is ${slowGuy} at position ${slowGuyPosition}`)
                countNew = 0
                finalTime +=slowGuy
            }
            //At the end of the loop, when there are no more waiting customers, assess how much time it'll take for all customers still at the tills to be serviced.
            if( i == remainingCustomers.length-1)
            {
                console.log(`This is the end of the loop!`)
                //In the event the slowest customer still isn't done AND is still going to take the longest. We leave finalTime unchanged. We already counted it.
                if(tills[slowGuyPosition] == Math.max(...tills))
                {
                    console.log(`The slowest customer was still the slowest of the customers left. Final time: ${finalTime}~~~~~~~~`)
                }
                else
                //In the event amongst the last few customers there was someone else who will outlast the slowest customer, we subtract the slowest customer's remianing time from the slowest of the final customers, and add that difference to finalTime.
                {
                    finalTime += Math.max(...tills)-tills[slowGuyPosition]
                    console.log(`There was someone else who needed more time. Final time: ${finalTime}~~~~~~~~~~`)
                }
            }

        }
    }
}


function queueTime(customers, n) {
 let tills = new Array(n).fill(0)

 for(let t of customers){
    tillFree = tills.indexOf(Math.min(...tills))
    tills[tillFree] += t

 }
return Math.max(...tills)
}

console.log(queueTime([3,5,6,6,4,2,23,4,56], 3))
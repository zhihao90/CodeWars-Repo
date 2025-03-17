
/*
Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.

Intervals
Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

Overlapping Intervals
List containing overlapping intervals:

[
   [1, 4],
   [7, 10],
   [3, 5]
]
The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

Examples:
sumIntervals( [
   [1, 2],
   [6, 10],
   [11, 15]
] ) => 9

sumIntervals( [
   [1, 4],
   [7, 10],
   [3, 5]
] ) => 7

sumIntervals( [
   [1, 5],
   [10, 20],
   [1, 6],
   [16, 19],
   [5, 11]
] ) => 19

sumIntervals( [
   [0, 20],
   [-100000000, 10],
   [30, 40]
] ) => 100000030
Tests with large intervals
Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].
*/

function sumIntervals(intervals) {

    intervals = intervals.sort((a,b) => a[0] - b[0])
    console.log(intervals)

    let merged = [intervals[0]]

   for(let [start,end] of intervals.slice(1)){


    if(merged[merged.length-1][1] >= start){
        
        merged[merged.length-1] = [merged[merged.length-1][0], Math.max(merged[merged.length-1][1], end)]
        
    }else{
        merged.push([start,end])
        
    }
   }

   console.log(merged)

   return (merged.reduce((acc, [start, end]) => {
    acc += (end - start)
    return acc;
   }, 0))

  }


//Original attempt at solution



function sumIntervals(intervals) {

    intervals = intervals.sort((a,b) => a[0] - b[0])

   
    
    for(let i =0; i < intervals.length; i++){
        for(let j = i+1; j < intervals.length; j++){

        if(intervals[i] != "x"){

           //console.log(`Comparing ${intervals[i]} against ${intervals[j]}`) 


           if(intervals[j][1] <= intervals[i][1]){
                //console.log(`Deleting ${intervals[j]}`)
                intervals[j] = "x"
           }

           else if(intervals[j][0] <= intervals[i][1]){
                //console.log(`Combining ${intervals[i]} with ${intervals[j]}`)
                intervals[i] = [intervals[i][0], intervals[j][1]]
                intervals[j] = "x"
           }

        }

            
        }
    }
    

    let result = 0

    for(let i = 0; i < intervals.length; i++){
        result += intervals[i] == "x" ? 0 : (intervals[i][1] - intervals[i][0])
    }

    return(result)

  }

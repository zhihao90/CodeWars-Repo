/*
Description:
Task
You are at position [0, 0] in maze NxN and you can only move in one of the four cardinal directions (i.e. North, East, South, West). Return true if you can reach position [N-1, N-1] or false otherwise.

Empty positions are marked ..
Walls are marked W.
Start and exit positions are empty in all test cases.
*/

function pathFinder(maze){

  //turn maze into array
  
  maze = maze.split("\n").map(a => a.split(""))
  const rows = maze.length
  const cols = maze[0].length

  //implement tracker
  let tracker = new Array(rows).fill().map(() => Array(cols).fill(false))
tracker[0][0] = true;

  //Loop and check cells

  let unprocessed = [[0,0]]
  

  while(unprocessed.length){



    let validNextSteps = []
    for(const [r, c] of unprocessed){

        if(r === rows-1 && c === cols-1){
            return true;
        }


        if(c+1 < cols && !tracker[r][c+1] && maze[r][c+1] != "W"){
            validNextSteps.push([r,c+1])
            tracker[r][c+1] = true;
        }

        if(r+1 < rows && !tracker[r+1][c] && maze[r+1][c] != "W"){
            validNextSteps.push([r+1,c])
            tracker[r+1][c] = true;
        }


        if(r-1 >= 0 && !tracker[r-1][c] && maze[r-1][c] != "W"){
            validNextSteps.push([r-1,c])
            tracker[r-1][c] = true;
        }
        if(c-1 >= 0 && !tracker[r][c-1] && maze[r][c-1] != "W"){
            validNextSteps.push([r,c-1])
            tracker[r][c-1] = true;
        }
    }

    unprocessed = validNextSteps


  }



return false;


}

console.log(pathFinder(
`.............
.............
.............
.............
.............
.............
.............
.............
.............
.............
.............
.............
.............
.............`))
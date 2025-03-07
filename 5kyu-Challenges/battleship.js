/*
Boats are placed either horizontally, vertically or diagonally on the board. 0 represents a space not occupied by a boat. Digits 1-3 represent boats which vary in length 1-4 spaces long. There will always be at least 1 boat up to a maximum of 3 in any one game. Boat sizes and board dimentions will vary from game to game.

Attacks
Attacks are calculated from the bottom left, first the X coordinate then the Y. There will be at least one attack per game, and the array will not contain duplicates.

[[2, 1], [1, 3], [4, 2]];
First attack      `[2, 1]` = `3`
Second attack `[1, 3]` = `0`
Third attack     `[4, 2]` = `1`
Function Initialization
board = [[0,0,0,2,2,0],
         [0,3,0,0,0,0],
         [0,3,0,1,0,0],
         [0,3,0,1,0,0]];
attacks = [[2, 1], [1, 3], [4, 2]];
damagedOrSunk(board, attacks);
Scoring
1 point for every whole boat sank.
0.5 points for each boat hit at least once (not including boats that are sunk).
-1 point for each whole boat that was not hit at least once.
Sunk or Damaged
`sunk` = all boats that are sunk
`damaged` = all boats that have been hit at least once but not sunk
`notTouched/not_touched` = all boats that have not been hit at least once
Output
You should return a hash with the following data

`sunk`, `damaged`, `notTouched`, `points`
Example Game Output
In our above example..

First attack: `boat 3` was damaged, which increases the `points` by `0.5`
Second attack: miss nothing happens
Third attack: `boat 1` was damaged, which increases the `points` by `0.5`
`boat 2` was untouched so `points -1` and `notTouched +1` in Javascript/Java/C# and `not_touched +1` in Python/Ruby.
No whole boats sank
Return Hash
{ sunk: 0, damaged: 2 , notTouched: 1, points: 0 }
*/

function damagedOrSunk (board, attacks){

    let coordY = board.length
    let coordX = -1
    let score = 0
    let gameObjBefore = {}

    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[i].length; j++){
            if(board[i][j] != 0)
            {

            
                if (!gameObjBefore[board[i][j]]){
                    gameObjBefore[board[i][j]] = 1
                }else{
                    gameObjBefore[board[i][j]]++
                }

            }
        }
    }



    for (let attack of attacks){
        coordX += attack[0]
        coordY -= attack[1]

        board[coordY][coordX] = 0


        //Reset Coords
        coordY = board.length
        coordX = -1
    }

    let gameObjAfter = {}

    for (let i = 0; i < board.length; i++){
        for (let j = 0; j < board[i].length; j++){
            if(board[i][j] != 0)
                {

            if (!gameObjAfter[board[i][j]]){
                gameObjAfter[board[i][j]] = 1
            }else{
                gameObjAfter[board[i][j]]++
            }

            }
        }
    }


    let result = {
        sunk: 0,
        damaged: 0,
        notTouched: 0,
        points: 0
    }

    for (let ship in gameObjBefore){



        
        if(!gameObjAfter[ship]){
            result["points"]++
            result["sunk"]++
            
        }
        else if(gameObjBefore[ship] == gameObjAfter[ship]){
            result["points"]--
            result["notTouched"]++
        }
        else if(gameObjBefore[ship] > gameObjAfter[ship]){
            result["points"] += 0.5
            result["damaged"]++
            
        }


    }

    return(result)



  }

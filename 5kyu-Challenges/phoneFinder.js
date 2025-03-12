/*
Tunnel Trouble: Find the Nearest Phone!
Task
You're driving through a tunnel when your car suddenly breaks down. Unfortunately, cell phones don't work in this tunnel, and you need to find the nearest emergency phone to call for help. Your task is to decide which direction to go based on the information available to the driver.

Input
distance (integer): The fixed distance separating each emergency phone.
signs (integer): The number of directional signs placed between consecutive phone cells.
location (integer): The location where your car broke down, represented as an index in the tunnel.
vision (integer): The distance you can see to your left and right.
Output
Return a character representing the best direction to move.
"L" for left (if phone on the left is nearest)
"R" for right (if phone on the right is nearest)
"S" for stay (if you're already at a phone)
"A" for any direction (if both directions are equally good)
"I" for indecisive (if there's not enough information to make a decision)
Constraints
1 ≤ distance ≤ 1,000
0 ≤ signs ≤ 999
-1,000,000 ≤ location ≤ 1,000,000
0 ≤ vision ≤ 500
equidistant signs rule: distance % (signs + 1) == 0
This equation makes sure all signs between two consecutive phones share the same distance between eachother, which is also the same distance between a phone and the nearest sign in either direction, or to the neighbouring phones if no signs available.
Specification
Note that the characters described in the specification of the tunnel and driver are only used for visualization purposes.

Tunnel
Phones are represented by "o" and have a fixed distance separating them.
Arrows pointing to the nearest phone are placed equidistantly between phones:
"<" indicates the nearest phone is to the left.
">" indicates the nearest phone is to the right.
"x" indicates equal distance to phones on both sides.
Any other part of the tunnel is represented by ".".
The tunnel can be considered long enough for the driver never to be near the entrance or exit of it when his car breaks down.
Location 0 is the center of the tunnel.
There is always a phone at this location.
Each tile to the left decrements the location, and each tile to the right increments it.
Driver
The driver and his broken car are represented by "@".
The parts of the tunnel visible to the driver are represented by ".".
Any other part of the tunnel is represented by "#".
A vision of n means the driver can look n location units both to his left and right.
If a driver cannot see anything in the vicinity, his vision is 0.
Note that the driver can always see the tunnel at his own location, even when he can't see anything around him.
The driver can always see the tunnel at the location he is at, even if he has no vision.
The driver knows:
There is an equal distance between phones.
There is an equal distance between signs, if any.
His own vision.
Can recognize any sign and phone in his vicinity, and accurately determine the distance between his own location and the sign.
The driver does not know:
The distance between phones.
The distance between signs, if any.
His own location, where his car broke down.
The driver is capable of using his knowledge about tunnels, and the signs he sees in his vicinity, to make logical conclusions in which direction to go to find the nearest phone.
Examples
Go Left
# Input:
distance = 12, signs = 3, location = 5, vision = 1

# Layout:
tunnel = "o..<..x..>..o"
driver = "####.@.######"

# The driver can only see the equidistant phone sign 'x' to his right, 
# so he knows the nearest phone is to his left.
return "L"
Go Right
# Input:
distance = 12, signs = 2, location = 9, vision = 1

# Layout:
tunnel = "o...<...>...o"
driver = "########.@.##"

# The driver can only see the '>' sign to his left,
# so he knows the nearest phone is to his right.
return "R"
Stay
# Input:
distance = 5, signs = 0, location = 5, vision = 3

# Layout:
tunnel = "o....o....o"
driver = "##...@...##"

# The driver is at a phone already,
# so he knows to stay put.
return "S"
Either Direction
# Input:
distance = 12, signs = 2, location = 6, vision = 3

# Layout:
tunnel = "o...<...>...o"
driver = "###...@...###"

# The driver sees both opposite signs '<' and '>' around him at the same distance,
# so he knows there are phones on either side at the same distance.
return "A"
Undecisive
# Input:
distance = 10, signs = 0, location = 8, vision = 1

# Layout:
tunnel = "o.........o"
driver = "#######.@.#"

# The driver does not see any sign or phone,
# so he doesn't know where the nearest phone is.
return "I"
*/


function decide(distance, signs, location, vision) {


//Create Tunnel

  let tunnel = ["o"]
  let tunnel2 = ["o"]
  for(let i = 0; i < distance-1; i++){
    tunnel.push(".")
    tunnel2.push(".")
  }
  tunnel.push("o")
  tunnel2.push("o")
  
 

  if(location % distance == 0){
    location = distance
  }
  else if(location % distance < 0){
    location = distance + (location %distance)
  }
  else{
    location = location % distance 
  }

  console.log(location)

  tunnel2[location] = "X"
  console.log(tunnel2.join(" "))

//Create Signs
  let interval = Math.round(distance/(signs+1))



  for(let i = interval; i < tunnel.length-1; i+=interval){
    if (i < (tunnel.length/2)){
        tunnel[i] = "<"
    }else{
        tunnel[i] = ">"
    }
    }   

    if (signs%2 == 1){
    tunnel[distance/2] = "M"
    }

    console.log(tunnel.join(" "))

//Define what driver sees


    let visible = []

    for(let i = location-vision; i <= location+vision; i++){
        visible.push(tunnel[i])
    }

    console.log(visible)


//Decision Making

    if (location == distance){
        return "S"
    }

    if (tunnel[location] == "M"){
        return "A"
    }

    let middle = Math.floor(visible.length/2)
    
    for(let i = 0; i <= Math.floor(visible.length/2); i++){


        if ((visible[middle+i] == ">" && visible[middle-i] == "<") || (visible[middle+i] == "o" && visible[middle-i] == "o")){
            console.log("Equidistant")
            return "A"
        }

        if (visible[middle+i] != ".") {
            if(visible[middle+i] == ">" || visible[middle+i] == "o"){
                console.log("Right arrow or phone detected after Position")
                return "R"
            }
            if(visible[middle+i] == "<" || visible[middle+i] =="M"){
                console.log("Left arrow or M detected after pos")
                return "L"
            }
        }
        if((visible[middle-i] != ".")){
            if(visible[middle-i] == "<" || visible[middle-i] == "o"){
                console.log("Left arrow or phone detected before Position")
                return "L"
            }
            if(visible[middle-i] == ">"|| visible[middle-i] =="M"){
                console.log("Right arrow or M detected before pos")
                return "R"
            }
            
        }
        
        

    }

    

return "I"
    

}
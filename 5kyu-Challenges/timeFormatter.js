/*Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

Date TimeMathematicsAlgorithms

*/

function humanReadable (seconds) {
    let result = []
    let hrs = Math.floor(seconds/3600)
    let min = Math.floor((seconds - (hrs*3600))/60)
    let sec = seconds - (hrs*3600) - (min * 60)

    result[0] = hrs > 9 ? hrs : `0${hrs}`
    result[1] = min > 9 ? min : `0${min}`
    result[2] = sec > 9 ? sec : `0${sec}`

    return(result.join(":"))


  }

  


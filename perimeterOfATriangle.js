let readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let lineIndex = 0
let numberOfSegments = 0
let arrayOfSegments = []


rl.on('line', function (line) {

  if (lineIndex == 0) {

    numberOfSegments = parseInt(line)

   } else { 

    arrayOfSegments = line.split(' ').map(element => parseInt(element)).sort()

    rl.close()

    if (arrayOfSegments.length != numberOfSegments) { 
      console.log(0)
    } else {
      console.log(getMaxPerimeterOfATriangle())
    }

  }

  lineIndex += 1

})

function getMaxPerimeterOfATriangle() {
  for (let i = arrayOfSegments.length - 1; i >= 2; i--) {
    const currentElement = arrayOfSegments[i]
    const sumOfPrevTwo = arrayOfSegments[i - 1] + arrayOfSegments[i - 2]
    if (currentElement < sumOfPrevTwo) {
      return currentElement + sumOfPrevTwo
    }
  }

  return 0
}
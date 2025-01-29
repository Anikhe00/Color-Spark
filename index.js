const hexaDecimalNumbers = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

let button = document.getElementById("generate-button")
let textColor = "#FFFFFF"

// First Color
let firstColor = document.getElementById("first-color")
let firstHexCode = document.getElementById("first-color-hex-code")

// Second Color
let secondColor = document.getElementById("second-color")
let secondHexCode = document.getElementById("second-color-hex-code")

// Third Color
let thirdColor = document.getElementById("third-color")
let thirdHexCode = document.getElementById("third-color-hex-code")

// Fourth Color
let fourthColor = document.getElementById("fourth-color")
let fourthHexCode = document.getElementById("fourth-color-hex-code")



// Generate random numbers from the hexaDecimalNumbers
function generateRandomNumber(){
  let randomNumber = Math.floor(Math.random() * hexaDecimalNumbers.length)
  return randomNumber
}

button.addEventListener("click", function(){
  // First Color Box
  let firstColorHexCode = "#"
  for(let w = 0; w < 6; w++){
    firstColorHexCode += hexaDecimalNumbers[generateRandomNumber()]
  }
  firstColor.style.backgroundColor = firstColorHexCode
  firstHexCode.textContent = firstColorHexCode
  firstHexCode.style.color = textColor

  // Second Color Box
  let secondColorHexCode = "#"
  for(let x = 0; x < 6; x++){
    secondColorHexCode += hexaDecimalNumbers[generateRandomNumber()]
  }
  secondColor.style.backgroundColor = secondColorHexCode
  secondHexCode.textContent = secondColorHexCode
  secondHexCode.style.color = textColor

  // Third Color Box
  let thirdColorHexCode = "#"
  for(y = 0; y < 6; y++){
    thirdColorHexCode += hexaDecimalNumbers[generateRandomNumber()]
  }
  thirdColor.style.backgroundColor = thirdColorHexCode
  thirdHexCode.textContent = thirdColorHexCode
  thirdHexCode.style.color = textColor

  // Fourth Color Box
  let fourthColorHexCode = "#"
  for(y = 0; y < 6; y++){
    fourthColorHexCode += hexaDecimalNumbers[generateRandomNumber()]
  }
  fourthColor.style.backgroundColor = fourthColorHexCode
  fourthHexCode.textContent = fourthColorHexCode
  fourthHexCode.style.color = textColor
})
const hexaDecimalNumbers = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

let button = document.getElementById("generate-button")
let textColor = "#FFFFFF"
let resetButton = document.getElementById("reset-button")

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

// Original Colors
let firstBoxOriginalColor = "#F3F4F6"
let secondBoxOriginalColor = "#E8EAED"
let thirdBoxOriginalColor = "#DCE0E5"
let fourthBoxOriginalColor = "#D0D5DC"
let textOriginalColor = "#202733"



// Generate random numbers from the hexaDecimalNumbers
function generateRandomNumber(){
  let randomNumber = Math.floor(Math.random() * hexaDecimalNumbers.length)
  return randomNumber
}

// Button Hover
button.addEventListener("mouseover", function(){
  button.style.backgroundColor = "#475671"
})

button.addEventListener("mouseleave", function(){
  button.style.backgroundColor = "#333E51"
})

// Reset Button Hover
resetButton.addEventListener("mouseover", function(){
  resetButton.style.backgroundColor = "#B4BED0"
})

resetButton.addEventListener("mouseleave", function(){
  resetButton.style.backgroundColor = "#D3D9E3"
})

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

// Reset
resetButton.addEventListener("click", function(){

  // First box
  firstColor.style.backgroundColor = firstBoxOriginalColor
  firstHexCode.textContent = firstBoxOriginalColor
  firstHexCode.style.color = textOriginalColor

  // Second box
  secondColor.style.backgroundColor = secondBoxOriginalColor
  secondHexCode.textContent = secondBoxOriginalColor
  secondHexCode.style.color = textOriginalColor

  // Third box
  thirdColor.style.backgroundColor = thirdBoxOriginalColor
  thirdHexCode.textContent = thirdBoxOriginalColor
  thirdHexCode.style.color = textOriginalColor

  // Fourth box
  fourthColor.style.backgroundColor = fourthBoxOriginalColor
  fourthHexCode.textContent = fourthBoxOriginalColor
  fourthHexCode.style.color = textOriginalColor
})
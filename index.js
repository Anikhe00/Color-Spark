const hexaDecimalNumbers = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]


let button = document.getElementById("generate-button")
let resetButton = document.getElementById("reset-button")

// First Color
let firstColor = document.getElementById("first-color")
let firstHexCode = document.getElementById("first-color-hex-code")
let firstTooltip = document.getElementById("first-tooltip")

// Second Color
let secondColor = document.getElementById("second-color")
let secondHexCode = document.getElementById("second-color-hex-code")
let secondTooltip = document.getElementById("second-tooltip")


// Third Color
let thirdColor = document.getElementById("third-color")
let thirdHexCode = document.getElementById("third-color-hex-code")
let thirdTooltip = document.getElementById("third-tooltip")


// Fourth Color
let fourthColor = document.getElementById("fourth-color")
let fourthHexCode = document.getElementById("fourth-color-hex-code")
let fourthTooltip = document.getElementById("fourth-tooltip")

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

// Hex code text contrast
function calcContrast(hexCode) {

  // Convert hex to RGB
  let r = parseInt(hexCode.substring(1, 3), 16)
  let g = parseInt(hexCode.substring(3, 5), 16)
  let b = parseInt(hexCode.substring(5), 16)

  let rgbColorLuminance = (0.2126 * r) + (0.7152 * g) + (0.0722 * b)

  if (rgbColorLuminance > 128){
    return "#202733"
  } else {
    return "#FFFFFF"
  }
}

// Generate color
button.addEventListener("click", function(){
  function applyColor(element, hexCode, hexCodeElement, copyButton) {
    element.style.backgroundColor = hexCode;
    hexCodeElement.textContent = hexCode;
    const contrastColor = calcContrast(hexCode);
    hexCodeElement.style.color = contrastColor;
    copyButton.style.color = contrastColor; 
  }

  let firstColorHexCode = "#";
  for(let i = 0; i < 6; i++){
    firstColorHexCode += hexaDecimalNumbers[generateRandomNumber()];
  }
  applyColor(firstColor, firstColorHexCode, firstHexCode, firstTooltip);

  let secondColorHexCode = "#";
  for(let i = 0; i < 6; i++){
    secondColorHexCode += hexaDecimalNumbers[generateRandomNumber()];
  }
  applyColor(secondColor, secondColorHexCode, secondHexCode, secondTooltip);

  let thirdColorHexCode = "#";
  for(let i = 0; i < 6; i++){
    thirdColorHexCode += hexaDecimalNumbers[generateRandomNumber()];
  }
  applyColor(thirdColor, thirdColorHexCode, thirdHexCode, thirdTooltip);

  let fourthColorHexCode = "#";
  for(let i = 0; i < 6; i++){
    fourthColorHexCode += hexaDecimalNumbers[generateRandomNumber()];
  }
  applyColor(fourthColor, fourthColorHexCode, fourthHexCode, fourthTooltip);
});



// Reset
resetButton.addEventListener("click", function(){

  // First box
  firstColor.style.backgroundColor = firstBoxOriginalColor
  firstHexCode.textContent = firstBoxOriginalColor
  firstHexCode.style.color = textOriginalColor
  firstTooltip.style.color = textOriginalColor

  // Second box
  secondColor.style.backgroundColor = secondBoxOriginalColor
  secondHexCode.textContent = secondBoxOriginalColor
  secondHexCode.style.color = textOriginalColor
  secondTooltip.style.color = textOriginalColor

  // Third box
  thirdColor.style.backgroundColor = thirdBoxOriginalColor
  thirdHexCode.textContent = thirdBoxOriginalColor
  thirdHexCode.style.color = textOriginalColor
  thirdTooltip.style.color = textOriginalColor

  // Fourth box
  fourthColor.style.backgroundColor = fourthBoxOriginalColor
  fourthHexCode.textContent = fourthBoxOriginalColor
  fourthHexCode.style.color = textOriginalColor
  fourthTooltip.style.color = textOriginalColor
})

// Copy
const copyButton = document.querySelectorAll(".copy-icon-box")

copyButton.forEach(copyButton => {
  copyButton.addEventListener("click", function() {
    const hexCodeElement = this.previousElementSibling; 

    const hexCode = hexCodeElement.textContent; 

    navigator.clipboard.writeText(hexCode).then(() => {
      const tooltip = this.querySelector(".tooltip");

      tooltip.textContent = "Copied!";

      setTimeout(() => {
        tooltip.textContent = "Copy Hex Code";
      }, 2000);
    }).catch(() => {
      const tooltip = this.querySelector(".tooltip");
      tooltip.textContent = "Failed to copy";
    });
  });
});

// Space bar intiate button click and escape initiate reset
document.addEventListener("keydown", function(event) {
  if (event.code === "Space") { 
    event.preventDefault(); 
    button.click(); 
  } else if (event.code === "Escape") { 
    resetButton.click(); 
  }
});
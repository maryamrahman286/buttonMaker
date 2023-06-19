let bgColorInputElement = document.getElementById("bgColorInput");
let fontColorInputElement = document.getElementById("fontColorInput");
let fontSizeInputElement = document.getElementById("fontSizeInput");
let fontWeightInputElement = document.getElementById("fontWeightInput");
let paddingInputElement = document.getElementById("paddingInput");
let borderRadiusInputElement = document.getElementById("borderRadiusInput");
let customButtonElement = document.getElementById("customButton");

function applyStyles(){
    let bgColorOfButton = bgColorInputElement.value;
    customButtonElement.style.backgroundColor = bgColorOfButton;
    
    let fontColorOfButton = fontColorInputElement.value; 
    customButtonElement.style.color = fontColorOfButton;

    let fontSizeOfButton = fontSizeInputElement.value; 
    customButtonElement.style.fontSize = fontSizeOfButton;

    let fontWeightOfButton = fontWeightInputElement.value; 
    customButtonElement.style.fontWeight = fontWeightOfButton;
    
    let paddingOfButton = paddingInputElement.value;
    customButtonElement.style.padding = paddingOfButton;
    
    let borderRadiusOfButton = borderRadiusInputElement.value;
    customButtonElement.style.borderRadius = borderRadiusOfButton;
    
}

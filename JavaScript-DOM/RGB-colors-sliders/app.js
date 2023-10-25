
// define variables with input tag 
const inputRed = document.getElementById('red');
const inputGreen = document.getElementById('green');
const inputBlue = document.getElementById('blue');

// define variables with the text of the p tag 
const redText = document.getElementById('red-text');
const greenText = document.getElementById('green-text');
const blueText = document.getElementById('blue-text');

// Set value to variable colors 
let red = inputRed.value;
let green = inputGreen.value;
let blue = inputBlue.value;


// set p tag text with the value in the input tag
redText.innerHTML = red
greenText.innerHTML = green
blueText.innerHTML = blue


// update all the colors 
function updateColor(red, green, blue) {
    const colorRGB = `rgb(${red},${green}, ${blue})`;
    document.body.style.backgroundColor = colorRGB
}

inputRed.addEventListener('change', (e) => {
    red = e.target.value;
    redText.innerText = red
    updateColor(red, green, blue)
})

inputGreen.addEventListener('change', (e) => {
    green = e.target.value;
    greenText.innerText = green
    updateColor(red, green, blue)
})
inputBlue.addEventListener('change', (e) => {
    /* Se utiliza e cuando no se tiene una referencia especifica. 
    e tomara donde se hizo el evento, es una manera mas general y 
    se puede extraer su valor */
    blue = e.target.value;
    blueText.innerText = blue
    updateColor(red, green, blue)
})



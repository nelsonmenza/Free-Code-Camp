// Element select 
let button = document.querySelector('button');
const color = document.getElementById('color');


// Create a random color code 
function randomColor() {
    let digit = '0123456789ABCDEF';
    let colorHex = '#';

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        colorHex += digit[randomIndex];

    }
    return colorHex;
}

// Update backgroundColor
button.addEventListener('click', function () {
    let randomColors = randomColor();
    color.textContent = randomColors;
    document.body.style.backgroundColor = randomColors;
})
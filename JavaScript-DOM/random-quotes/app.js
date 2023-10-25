let btnElem = document.getElementById('btn-change-quote');
let quoteElem = document.getElementById('quotes');
let authorElem = document.getElementById('author');

// Generate a number for index 
function generateIntRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
// Update quotes 
function changeQuotes() {
    let indexRandom = generateIntRandom(0, quotes.length);
    quoteElem.innerHTML = `"${quotes[indexRandom].text}"`;
    authorElem.innerHTML = quotes[indexRandom].author;
}

changeQuotes();

btnElem.addEventListener('click', changeQuotes);
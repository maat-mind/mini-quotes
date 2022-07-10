API_RANDOM_QUOTE = 'http://api.quotable.io/random';
const text = document.getElementById('text');
const textContainer = document.getElementById('textContainer');

function getRandomQuote() {
  return fetch(API_RANDOM_QUOTE)
    .then((response) => response.json())
    .then((data) => data.content);
}

async function renderQuote() {
  const quote = await getRandomQuote();
  text.innerText = quote;
  changeFontFamily();
  changeColor();
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function changeFontFamily() {
  let arrFontFamily = [
    'Verdana, sans-serif',
    'Courier New, monospace',
    'Gill Sans, calibri',
    'Franklin Gothic Medium, sans-serif',
    'Lucida Sans, sans-serif',
    'Times New Roman, serif',
    'Georgia, serif',
  ];
  let randomFontFamily = randomItem(arrFontFamily);

  text.style.fontFamily = randomFontFamily;
}

function changeColor() {
  let arrColor = ['antiquewhite', 'blanchedalmond', 'aliceblue', 'wheat', 'tan'];
  let randomColor = randomItem(arrColor);

  textContainer.style = `background-color: ${randomColor}`;
}

renderQuote();

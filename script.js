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
}

renderQuote();

const quote = document.getElementById("quote");
const authors = document.getElementById("author");
const api_url = "https://type.fit/api/quotes"; // Daily quotes api

async function getQuote(url) {
  const response = await fetch(url);
  const data = await response.json();

  const randomQuote = Math.floor(Math.random() * data.length);
  const { text, author } = data[randomQuote];

  quote.textContent = text;
  authors.textContent = author;
}

function tweet() {
  // twitter share link
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      (quote.textContent + " ---- by " + authors.textContent),
    "Tweet Window",
    "width=600,height=300"
  );
}

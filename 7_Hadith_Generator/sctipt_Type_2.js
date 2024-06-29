const quotes = [
  {
    quote:
      "'The best among you are those who have the best manners and character.'",
    writer: "Sahih Bukhari",
  },
  {
    quote:
      "He who believes in Allah and the Last Day should either speak good or keep silent",
    writer: "Muslim",
  },
  {
    quote:
      "Do not disdain a good deed, even if it is your meeting with your brother with a cheerful face",
    writer: "Muslim",
  },
  {
    quote:
      "The strong is not the one who overcomes the people by his strength, but the strong is the one who controls himself while in anger.",
    writer: "Sahih Bukhari",
  },
  {
    quote:
      "Truthfulness leads to righteousness, and righteousness leads to Paradise.",
    writer: "Sahih Bukhari",
  },
  {
    quote: "Paradise lies under the feet of mothers.",
    writer: "Mu'awiyah ibn Jahima ",
  },
  {
    quote:
      "The Hour will not come until time passes quickly, years pass like months, months like weeks, weeks like days, and days like hours",
    writer: "Tirmidhi",
  },
  {
    quote:
      "When authority is given to those who do not deserve it, then wait for the Hour",
    writer: "Sahih Bukhari",
  },
  {
    quote: "Whoever relies upon Allah, then He is sufficient for him.",
    writer: "Quran 65:3",
  },
  {
    quote: "The best among you are those who learn the Qur'an and teach it.",
    writer: "Sahih Bukhari",
  },
  {
    quote: "Seeking knowledge is an obligation upon every Muslim.",
    writer: "Sunan Ibn Majah",
  },
];

let btn = document.querySelector("#getQuote");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = quotes[random].quote;
  author.innerHTML = quotes[random].writer;
  console.log(random);
});

//   https://type.fit/api/quotes

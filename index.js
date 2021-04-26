let quotes;

function getQuotes() {
  return fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    quotes = data;
  })
}

const colors = [
  '#00ADB5',
  '#890596',
  '#CF0000',
  '#F21170',
  '#FA9905',
  '#FF5200',
  '#02475E',
  '#926E6F',
  '#325288',
  '#114E60',
  '#542E71',
  '#FB3640',
  '#FDCA40',
  '#CE1F6A',
  '#FF9A8C',
  '#1B1A17',
  '#A35709',
  '#45526C',
  '#132C33'
];


function newQuote() {
  const quote = quotes[parseInt(Math.random() * quotes.length)];
  const color = colors[parseInt(Math.random() * colors.length)];
  $("#quote-text").html(quote.text);
  $("#quote-author").html(quote.author);

  $("#quote-text").css("color", color);
  $("#quote-author").css("color", color);
  $("body").css("background-color", color);
  $("a").css("color", color);
  $(".button").css("background-color", color);
}

$(document).ready(function() {
  getQuotes().then(() => newQuote());
})

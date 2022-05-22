let a = 0;

function generator() {
  fetch("https://type.fit/api/quotes")
    .then((res) => res.json())
    .then((data) => display(data));
}

function display(data) {
  const quote = document.getElementById("quote");
    quote.innerText = ` "${data[a].text}"`;
    
    a = a + 1;
}

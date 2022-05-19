function generator()
{
    fetch("https://api.kanye.rest")
    .then(res => res.json())
        .then(data => display(data));
    
    
    
    
}


function display(data)
{
    const quote = document.getElementById("quote");
    quote.innerText = ` "${data.quote}"`

}


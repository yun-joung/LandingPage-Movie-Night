let button = document.querySelector("#fetch")
button.addEventListener("click", () => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=8085c11d")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        showData(data.results)
    })
})

const showData = (data) => {
    let ul = document.querySelector("#lista")
    for(let i =0 ; index < data.length; i++){
    let li = document.createElement("li")
    let text = document.createTextNode(data[i].name)
    li.appendChile(text)
    ul.appendChile(li)
}
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
    }

window.onscroll = () => {
    var myNav = document.getElementById("myTopnav");
    if (document.body.scrollTop >= 280 || document.documentElement.scrollTop >= 280) {
    myNav.className += " navScroll";
    } else {
    myNav.className  = "topnav";
    }
};
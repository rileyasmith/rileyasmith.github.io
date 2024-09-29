const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

document.querySelector("hero-text").onmouseover = event => {
    event.target.innerText = event.target.innerText.split("")
    .map(letter => letters[Math.floor(Math.random() * 26)])
    .join("");
}
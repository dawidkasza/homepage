console.log("Hello World! Nadszedł w końcu czas na zabawę z gitem.");

let changeColorButton = document.querySelector(".js-changeColorButton");
let body = document.documentElement;
let colorName = document.querySelector(".js-colorName");
changeColorButton.addEventListener("click", ()=>{
    body.classList.toggle("body--dark");
    colorName.innerText = body.classList.contains("body--dark") ? "jasny":"ciemny";
})
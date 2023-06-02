{
const welcome = () => {
    console.log("Hello World! Nadszedł w końcu czas na zabawę z gitem.");
};

const toggleBackground = () => {
    const body = document.documentElement;
    const colorName = document.querySelector(".js-colorName");

    body.classList.toggle("body--dark");
    colorName.innerText = body.classList.contains("body--dark") ? "jasny":"ciemny";
    
};

const init = () => {
    const changeColorButton = document.querySelector(".js-changeColorButton");
    changeColorButton.addEventListener("click", toggleBackground);

    welcome();
    };

    init();
}
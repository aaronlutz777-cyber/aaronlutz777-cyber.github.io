
// Event Handler
let navElements = document.getElementsByClassName("italicize");

for (let i = 0; i < navElements.length; i++) {
    navElements[i].addEventListener("mouseover", mouseoverHandlerItalicize);
    navElements[i].addEventListener("mouseout", mouseoutHandlerItalicize);
}

function mouseoverHandlerItalicize(event) {
    event.target.style.fontStyle = "italic";
    event.target.style.fontWeight = "bold";
}

function mouseoutHandlerItalicize(event) {
    event.target.style.fontStyle = "normal";
    event.target.style.fontWeight = "normal";
}

// Colour Change
let headerColour = document.getElementsByClassName("header");
let mainColour = document.getElementsByClassName("main");
let navColour = document.getElementsByClassName("sidebar");

const colourButton1 = document.getElementById("colour-scheme-1");
const colourButton2 = document.getElementById("colour-scheme-2");
const colourButton3 = document.getElementById("colour-scheme-3");

colourButton1.addEventListener("click", changeToColourScheme1);
colourButton2.addEventListener("click", changeToColourScheme2);
colourButton3.addEventListener("click", changeToColourScheme3);

function changeToColourScheme1() {
    sessionStorage.setItem("colourScheme", "1");
    colourButton1.style.backgroundColor = "yellow";
    colourButton2.style.backgroundColor = "white";
    colourButton3.style.backgroundColor = "white";

    for (let i = 0; i < mainColour.length; i++) {
        headerColour[i].style.backgroundColor = "rgb(11, 56, 11)";
        headerColour[i].style.color = "rgb(165, 230, 13)";
        mainColour[i].style.backgroundColor = "#78b1bf";
        mainColour[i].style.color = "black";
        navColour[i].style.backgroundColor = "blanchedalmond";
    }
}

function changeToColourScheme2() {
    sessionStorage.setItem("colourScheme", "2");
    colourButton1.style.backgroundColor = "white";
    colourButton2.style.backgroundColor = "yellow";
    colourButton3.style.backgroundColor = "white";

    for (let i = 0; i < mainColour.length; i++) {
        headerColour[i].style.backgroundColor = "red";
        headerColour[i].style.color = "yellow";
        mainColour[i].style.backgroundColor = "orange";
        mainColour[i].style.color = "blue";
        navColour[i].style.backgroundColor = "pink";
    }
}

function changeToColourScheme3() {
    sessionStorage.setItem("colourScheme", "3");
    colourButton1.style.backgroundColor = "white";
    colourButton2.style.backgroundColor = "white";
    colourButton3.style.backgroundColor = "yellow";

    for (let i = 0; i < mainColour.length; i++) {
        headerColour[i].style.backgroundColor = "grey";
        headerColour[i].style.color = "black";
        mainColour[i].style.backgroundColor = "white";
        mainColour[i].style.color = "black";
        navColour[i].style.backgroundColor = "black";
        navColour[i].style.color = "white";
    }
}

window.addEventListener("load", function() {
    if (!sessionStorage.getItem("notification-has-been-seen")) {
        sessionStorage.setItem("notification-has-been-seen", "true");
        changeToColourScheme1();
    } else if (sessionStorage.getItem("colourScheme") == 1) {
        changeToColourScheme1();
    } else if (sessionStorage.getItem("colourScheme") == 2) {
        changeToColourScheme2();
    } else if (sessionStorage.getItem("colourScheme") == 3) {
        changeToColourScheme3();
    }
});





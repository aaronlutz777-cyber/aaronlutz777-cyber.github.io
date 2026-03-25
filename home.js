// Reveals zoomed in versions of world-map using buttons and can reset too
const zoomedImage = document.getElementById("zoom");
const worldMapImage = document.getElementById("world-map");

document.getElementById("reveal-vancouver-island").addEventListener('click', revealVancouverIsland);

function revealVancouverIsland() {
    zoomedImage.src = "Photos/vancouver-island-map.png";
    zoomedImage.classList.remove("hidden");
    zoomedImage.style.height = "60%"
    worldMapImage.classList.add("hidden");
}

document.getElementById("reveal-europe").addEventListener('click', revealEurope);

function revealEurope() {
    zoomedImage.src = "Photos/europe-map.png";
    zoomedImage.classList.remove("hidden");
    zoomedImage.style.height = "90%"
    worldMapImage.classList.add("hidden");
}

document.getElementById("reset-button").addEventListener('click', reset);

function reset() {
    zoomedImage.classList.add("hidden");
    worldMapImage.classList.remove("hidden");
}

// allows locations links to highlight on home page
let elements = document.getElementsByClassName("highlight");

for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", mouseoverHandlerHighlight);
    elements[i].addEventListener("mouseout", mouseoutHandlerHighlight);
}

function mouseoverHandlerHighlight(event) {
    event.target.style.backgroundColor = "yellow";
}

function mouseoutHandlerHighlight(event) {
    event.target.style.backgroundColor = "transparent";
}

// Notofication
function displayNotification() {
    const notification = document.createElement("div");

    notification.innerText = "Hello fellow traveller!\nCome in, stay awhile... ";
    notification.style.position = "fixed";
    notification.style.top = "50%";
    notification.style.left = "50%";
    notification.style.transform = "translate(-50%, -50%)";
    notification.style.border = "3px solid black";
    notification.style.backgroundColor = "white";
    notification.style.padding = "50px";

    const closeButton = document.createElement("span");
    closeButton.innerText = "|X|";
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.border = "2px solid black";
    closeButton.style.cursor = "pointer";

    closeButton.onclick = function() {
        notification.remove(); 
    }

    notification.appendChild(closeButton);

    document.body.appendChild(notification);
}

window.addEventListener("load", function() {
    if (!sessionStorage.getItem("notification-has-been-seen")) {
        sessionStorage.setItem("notification-has-been-seen", "true");
        displayNotification();
    }
});


// Conditional
const yes = document.getElementById("yes-button");
const no = document.getElementById("no-button");
const response = document.getElementById("response");
let choice = "";

if (!sessionStorage.getItem("response-given")) {

    yes.addEventListener("click", function() {
        sessionStorage.setItem("yesOrNo", "yes");
        displayResponse("yes");
    });

    no.addEventListener("click", function() {
        sessionStorage.setItem("yesOrNo", "no");
        displayResponse("no");
    });

} else {
    displayResponse(sessionStorage.getItem("yesOrNo"));
}

function displayResponse(choice) {
    sessionStorage.setItem("response-given", "true");
    
    yes.classList.add("hidden");
    no.classList.add("hidden");

    if (choice === "yes") {
        response.innerText = "Cool! Maybe you can tell me about your trip.";
    } else if (choice === "no") {
        response.innerText = "Maybe we could go there together someday.";
    }
}



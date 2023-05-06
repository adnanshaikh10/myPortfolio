const button = document.querySelector(".stars");

const home = document.querySelector(".home")

button.addEventListener("click", displayStars);

   function displayStars() {
    if (button.innerText == "Turn On Stars") {
        button.innerText = "Turn Off Stars";
        home.style.backgroundImage = `url('./assets/animatedbackground.svg')`
    } else {
        button.innerText = "Turn On Stars";
        home.style.backgroundImage = `url('./assets/staticbackground.png')`
    }
}

// First, we need to go get the hamburger icon from the page (using .querySelector).
const hamburger = document.querySelector(".hamburger");

// Get a second item from the page being the UL of the main nav to manipulate with JS.
const headerMain = document.querySelector(".headerMain");

// Then, we attach an event listener to that icon that listens for the click event.
hamburger.addEventListener("click", showMenu);


function showMenu() {
    headerMain.classList.toggle("headerMainActive");
}

const navRefresh = document.querySelectorAll("#nav");
navRefresh.forEach(function(link){
    link.addEventListener("click", unshowMenu)
});

function unshowMenu() {
    console.log("clicked wow");
}







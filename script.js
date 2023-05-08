const loader = document.querySelector(".preloader");

window.onload = function() {
    setTimeout(function(){
        loader.className = "fadeOut";
    },300)
    setTimeout(function(){
        loader.style.display = "none";
    },300)
}

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

const hamburger = document.querySelector(".hamburger");

const headerMain = document.querySelector(".headerMain");

hamburger.addEventListener("click", showMenu);

function showMenu() {
    headerMain.classList.toggle("headerMainActive");
}

const navRefresh = document.querySelectorAll("#nav");
navRefresh.forEach(function(link){
    link.addEventListener("click", unshowMenu)
});

function unshowMenu() {
    showMenu();
}

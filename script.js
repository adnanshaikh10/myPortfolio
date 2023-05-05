// Get the button and add a click event listener to it
    // when the button is clicked change the background of hero image to the stars one
    // update the text so that it also matches with when the stars is also on or off

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





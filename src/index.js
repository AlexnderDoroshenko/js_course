// Welcome message.
alert("hi man !!! Lets see what I prefer ?")
// Variables definition.
let preference = document.getElementById("plate")
let dishesButton = document.getElementById("b1")
let drinkButton = document.getElementById("b2")
let alcoholButton = document.getElementById("b3")
// Listeners definition.
dishesButton.addEventListener("click", function () {
    preference.innerText = "Borsch";     // change text in preference variable.

});
drinkButton.addEventListener("click", function () {
    preference.innerText = "Sprite";      // change text in preference variable.
});
alcoholButton.addEventListener("click", function () {
    preference.innerText = "Bacardi";     // change text in preference variable.
});


// Variables definition.
let number = document.getElementById("radius");
const numberPi = Math.PI;
let result = document.getElementById("result");
let resultButton = document.getElementById("resultButton");

// function averageCalc implementation
function areaCalc(number1) {
    // console.log("start calc")
    return numberPi * (number1 ** 2);

}

// Listeners definition.
resultButton.addEventListener("click", function() {
    let first_arg = parseInt(number.value);
    if (!isNaN(first_arg)) { // change text in preference variable.
        // console.log(`first ${first_arg}`)
        // console.log(`first type ${typeof(first_arg)}`)
        result.innerText = `${areaCalc(first_arg)}`; // 
    } else { // alerting an error.
        alert("Enter radius and try again!");
    }
});
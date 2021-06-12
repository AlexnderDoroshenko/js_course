// Variables definition.
let number = document.getElementById("dollars");
const rateToGryvna = 28;
let result = document.getElementById("result");
let resultButton = document.getElementById("resultButton");

// function averageCalc implementation
function convert(number1) {
    // console.log("start calc")
    return number1 * rateToGryvna;
}

// Listeners definition.
resultButton.addEventListener("click", function() {
    let first_arg = parseInt(number.value);
    if (!isNaN(first_arg)) { // change text in preference variable.
        // console.log(`first ${first_arg}`)
        // console.log(`first type ${typeof(first_arg)}`)
        result.innerText = `${convert(first_arg)}`; // 
    } else { // alerting an error.
        alert("Enter radius and try again!");
    }
});
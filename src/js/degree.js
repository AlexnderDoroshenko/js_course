// Variables definition.
let number = document.getElementById("number");
let degree = document.getElementById("degree");
let result = document.getElementById("result");
let resultButton = document.getElementById("resultButton");

// function averageCalc implementation
function degreeCalc(number1, number2) {
    // console.log("start calc")
    return number1 ** number2;

}

// Listeners definition.
resultButton.addEventListener("click", function() {
    let first_arg = parseInt(number.value);
    let second_arg = parseInt(degree.value);
    if (!isNaN(first_arg) && !isNaN(second_arg)) { // change text in preference variable.
        // console.log(`first ${first_arg}`)
        // console.log(`first type ${typeof(first_arg)}`)
        // console.log(`second ${second_arg}`)
        // console.log(`second type ${typeof(second_arg)}`)
        // result.innerText = `${degreeCalc(first_arg, second_arg)}`; // 
    } else { // alerting an error.
        alert("Enter both numbers and try again!");
    }
});
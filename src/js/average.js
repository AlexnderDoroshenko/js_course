// Variables definition.
let firstNumber = document.getElementById("firstNumber");
let secondNumber = document.getElementById("secondNumber");
let average = document.getElementById("average");
let averageButton = document.getElementById("averageButton");

// function averageCalc implementation
function averageCalc(number1, number2) {
    console.log("start calc");
    // console.log((number1 + number2) / 2)

    if (number1 == 0 && number2 == 0) {
        // console.log("return result all zero")
        return 0;

    } else {
        // console.log("return result")
        sum = number1 + number2
            // console.log(`sum is ${sum}`)
            // console.log(`result is ${sum / 2}`)
        return sum / 2;
    }

}

// Listeners definition.
averageButton.addEventListener("click", function() {
    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);
    if (!isNaN(first) && !isNaN(second)) { // change text in preference variable.
        // console.log(`first ${first}`)
        // console.log(`first type ${typeof(first)}`)
        // console.log(`second ${second}`)
        // console.log(`second type ${typeof(second)}`)
        average.innerText = `${averageCalc(first, second)}`; // 
    } else { // alerting an error.
        alert("Enter both numbers and try again!");
    }
});
// Variables definition.
let denomination = document.getElementById("denomination");
let quantity = document.getElementById("quantity");
let neededPayments = parseInt(prompt("How many payments do you need ?"));
let allowedPayments = null;
if (isNaN(neededPayments)) {
    allowedPayments = 3;
} else {
    allowedPayments = neededPayments;
}
let payments = document.getElementById("payments");
payments.innerText = `Allowed payments : ${allowedPayments}`;
let result = document.getElementById("result");
let tries = document.getElementById("tries");
let resultButton = document.getElementById("resultButton");
let count = 0;
let currentTotal = 0;

// function averageCalc implementation
function pay(denomination, quantity) {
    // console.log("start calc")
    count += 1;
    currentTotal += denomination * quantity
        // console.log(count)
        // console.log(currentTotal)

    return currentTotal;
}

// Listeners definition.
resultButton.addEventListener("click", function() {
    let first_arg = parseInt(denomination.value);
    let second_arg = parseInt(quantity.value);
    if (!isNaN(first_arg) && !isNaN(second_arg)) { // change text in preference variable.
        // console.log(`first_arg ${first_arg}`)
        // console.log(`first_arg type ${typeof(first_arg)}`)
        // console.log(`second_arg ${second_arg}`)
        // console.log(`second_arg type ${typeof(second_arg)}`)
        if (count < allowedPayments) {
            // console.log("returns total")
            result.innerText = `Total : ${pay(first_arg, second_arg)}`; //
            // console.log("update payment count")
            tries.innerText = `Payment ${count}`;
        } else {
            tries.innerText = `Allowed payments is ${allowedPayments}`;
        }
    } else { // alerting an error.
        alert("Enter denomination and quantity and try again!");
    }
});
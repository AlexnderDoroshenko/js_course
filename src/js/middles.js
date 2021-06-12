// Variables definition.
let value1 = document.getElementById("value 1");
let value2 = document.getElementById("value 2");
let resultButton = document.getElementById("resultButton");

// function averageCalc implementation
function changeMiddle(value1, value2) {
    console.log("start change");
    document.getElementById("value 1").value = setSecondChar(value1, getSecondChar(value2));
    document.getElementById("value 2").value = setSecondChar(value2, getSecondChar(value1));
}

function getSecondChar(value) {
    console.log("start getSecondChar");
    let char = Array.from(String(value), Number)[1];
    console.log(`char is ${char}`);
    return char
}

function setSecondChar(number, char) {
    console.log("start setSecondChar");
    numberArray = Array.from(String(number), Number);
    numberArray[1] = parseInt(char)
    let result = numberArray.join('');
    console.log(`result is ${result}`);
    return result;
}

// Listeners definition.
resultButton.addEventListener("click", function() {
    let first_arg = parseInt(value1.value);
    let second_arg = parseInt(value2.value);
    if (!isNaN(first_arg) && !isNaN(second_arg)) { // change text in preference variable.
        console.log(`first_arg ${first_arg}`)
        console.log(`first_arg type ${typeof(first_arg)}`)
        console.log(`second_arg ${second_arg}`)
        console.log(`second_arg type ${typeof(second_arg)}`)
        if (first_arg.toString().length < 3 || second_arg.toString().length < 3) {
            alert(`Enter values with minimum lenght 3 digits !\n numbers are : ${first_arg} and ${second_arg}`)
        } else {
            changeMiddle(first_arg, second_arg)
        }
    } else { // alerting an error.
        alert("Enter both valid digit values and try again!");
    }
});
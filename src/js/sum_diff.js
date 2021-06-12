// Variables definition.
let value1 = document.getElementById("value 1");
let value2 = document.getElementById("value 2");
let valueMain = document.getElementById("value");
getValue()

function getValue() {
    value = prompt("Enter the number with len 4 digits");
    if (isNumberValid(value)) {
        setValues(value);
    } else {
        alert(`Number is incorrect, value is : ${parseInt(value)}`);
        getValue();
    }

}

function isNumberValid(number) {
    console.log(parseInt(number).toString().length)
    if (isNaN(parseInt(number)) || parseInt(number).toString().length != 4) {
        return false;
    } else {
        return true;
    }
}

function setValues(value) {
    console.log("start change");
    valueMain.innerText = parseInt(value);
    document.getElementById("value 1").value = getSum(value);
    document.getElementById("value 2").value = getDifference(value);
}

function getSum(value) {
    console.log("start getSecondChar");
    let char1 = Array.from(String(value), Number)[0];
    let char2 = Array.from(String(value), Number)[2];
    return char1 + char2
}

function getDifference(value) {
    console.log("start getSecondChar");
    let char2 = Array.from(String(value), Number)[1];
    let char4 = Array.from(String(value), Number)[3];
    return char2 - char4
}
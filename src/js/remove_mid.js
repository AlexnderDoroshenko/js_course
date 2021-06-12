// Variables definition.
let value1 = document.getElementById("value 1");
let valueMain = document.getElementById("value");
getValue()

function getValue() {
    value = prompt("Enter the number with len 3 digits");
    if (isNumberValid(value)) {
        setValues(value);
    } else {
        alert(`Number is incorrect, value is : ${parseInt(value)}`);
        getValue();
    }

}

function isNumberValid(number) {
    console.log(parseInt(number).toString().length)
    if (isNaN(parseInt(number)) || parseInt(number).toString().length != 3) {
        return false;
    } else {
        return true;
    }
}

function setValues(value) {
    console.log("start change");
    valueMain.innerText = parseInt(value);
    document.getElementById("value 1").value = removeMiddle(value);
}

function removeMiddle(str) {
    let splitString = str.split("");
    splitString.splice(1, 1);
    let joinArray = splitString.join("");
    return joinArray;
}
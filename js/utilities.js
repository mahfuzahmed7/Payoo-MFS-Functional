/**
 * common shared function here
 */

// function getInputFieldById() {
//     const addMoney = document.getElementById('input-add-money').value;
//     return addMoney;

// }
function getInputFieldById(id) {
    const inputValue = document.getElementById(id).value;
    return inputValue;
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}
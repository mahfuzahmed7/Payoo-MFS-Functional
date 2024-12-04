/**
 * how to get a number an input field
 * 1. create a variable
 * 2. right side document.getElementById(id)
 * 3. .value 
 * 4. parseFloat
 */

document.getElementById('btn-add-money').addEventListener('click', function (event) {
    event.preventDefault();

    // getInputFieldById();
    // const addMoney = getInputFieldById();
    // console.log('add money value', addMoney);
    // const addMoney = document.getElementById('input-add-money').value;
    // const addMoneyNumber = parseFloat(addMoney);
    const addMoney = getInputFieldById('input-add-money');
    const pinNumber = getInputFieldById('input-pin-number')
    console.log('add money with parameter', addMoney, pinNumber)
})
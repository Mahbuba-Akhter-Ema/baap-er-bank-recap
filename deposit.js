/*
step-1: add event handler to the deposit button
2. get deposit amount from the input field
2.5: convert string deposit to a number type
3. clear the deposit field after getting the value
4. get the previous deposit total
5. calculate new deposit total and set the value to the deposit total
6. get current total balance
7. calculate the new balance and set it to the new total element
*/
// step-1
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('deposit button clicked');
   
    // step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    // console.log(newDepositAmountString);
    const newDepositAmount = parseFloat(newDepositAmountString);
    // console.log(newDepositAmount);
   
    // step-3: clear the value
    depositField.value = '';

    // step-4
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    // step-5
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    // step-6
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceString = balanceTotalElement.innerText;
    const previousBlanceTotalAmount = parseFloat(previousBalanceString);

    // step-7
    const newBalanceTotal = previousBlanceTotalAmount + newDepositTotal;
    balanceTotalElement.innerText = newBalanceTotal;
})
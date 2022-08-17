// console.log('withdraw file');

/*
1. add event handler to the withdraw button
2. get the withdraw amount
3. clear withdraw field
4. get previous withdraw total
5. calculate new withdraw total and set the value to the withdraw total
6. get previous balance
7. calculate new total and set it to the total balance
*/

document.getElementById('btn-withdraw').addEventListener('click', function () {
    // console.log('btn clicked');
    const withdrawField = document.getElementById('withdraw-field');

    // step-2
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // console.log(newWithdrawAmount);
    // step-3
    withdrawField.value = '';

    // step-4
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-5
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = newWithdrawTotal;

    // step-6
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    // step-7
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})
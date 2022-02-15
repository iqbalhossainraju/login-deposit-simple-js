// Deposit
function deposit() {
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = parseFloat(depositInput.value);
    // console.log(depositAmount);

    const depositOutput = document.getElementById('deposit-output');
    depositOutput.innerText =  parseFloat(depositOutput.innerText) + depositAmount;

    // Update On Total Balance
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = parseFloat(totalBalance.innerText) + depositAmount;

    // Clear Input After Type
    depositInput.value = '';
}

// Withdraw
function withdraw(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = parseFloat(withdrawInput.value);
    // console.log(withdrawAmount);

    const withdrawOutput = document.getElementById('withdraw-output');
    withdrawOutput.innerText = parseFloat(withdrawOutput.innerText) + withdrawAmount;

    // Minus On Total Balance
    const totalBalance = document.getElementById('total-balance');
    totalBalance.innerText = parseFloat(totalBalance.innerText) - withdrawAmount;

    // Clear Input After Type
    withdrawInput.value = '';
}
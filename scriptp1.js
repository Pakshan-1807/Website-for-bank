function deposit() {
    performTransaction("Deposit");
}

function withdraw() {
    performTransaction("Withdraw");
}

function checkBalance() {
    alert("Your current balance is: $" + getCurrentBalance());
}

function performTransaction(type) {
    var amountInput = document.getElementById("amount");
    var balanceAmount = document.getElementById("balanceAmount");

    var amount = parseFloat(amountInput.value);

    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
    }

    var currentBalance = getCurrentBalance();

    if (type === "Withdraw" && amount > currentBalance) {
        alert("Insufficient funds!");
        return;
    }

    var newBalance = (type === "Deposit") ? currentBalance + amount : currentBalance - amount;
    
    balanceAmount.textContent = "$" + newBalance.toFixed(2);

    alert(type + " successful! Your new balance is: $" + newBalance.toFixed(2));
}

function getCurrentBalance() {
    var balanceAmount = document.getElementById("balanceAmount");
    return parseFloat(balanceAmount.textContent.slice(1));
}
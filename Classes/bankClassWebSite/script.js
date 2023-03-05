const inputWithdraw = document.getElementById('inputWithdraw')
const inputDeposit = document.getElementById('inputDeposit')
const balanceOutput = document.getElementById('balanceOutput')

console.log(inputWithdraw)

class Bank {
    constructor(balance) {
        this.balance = balance
    }

    withdraw(value) {
        if (isNaN(value) || this.balance < value){
            console.log("Cannot withdraw more than your balance")
            return
        }

        this.balance -= value
        balanceOutput.innerText = this.balance
    }

    deposit(value) {
        if(isNaN(value) || value <= 0) {
            console.log('Cannot deposit a value <= 0')
            return
        }

        this.balance += value
        balanceOutput.innerText = this.balance
    }

}

const userAccount = new Bank(100)

balanceOutput.innerHTML = userAccount.balance

inputWithdraw.addEventListener('input', (event) => {
    const withdrawValue = parseInt(event.target.value)
    console.log(withdrawValue)
    
    userAccount.withdraw(withdrawValue)
})

inputDeposit.addEventListener('input', (event) => {
    const depositValue = parseInt(event.target.value)
    console.log(depositValue)

    userAccount.deposit(depositValue)
})

const totalPerPerson = document.getElementById('totalPerPerson')

totalPerPerson.innerHTML = "0.00"

const getInput1 = () => {
    let bill = document.getElementById("billTotalInput").value
    //document.getElementById("totalPerPerson").innerText = bill
    return bill
}

const getInput2 = () => {
    let tipPercentage = document.getElementById("tipInput").value
    return tipPercentage
}

const tipCalculation = (bill, tipPercentage) => {
    console.log("🚀 ~ file: script.js:14 ~ tipCalculation ~ bill", bill)
    console.log("🚀 ~ file: script.js:14 ~ tipCalculation ~ tipPercentage", tipPercentage)
    
    let tip = (parseFloat(bill) * parseFloat(tipPercentage)) / 100
    let priceWithTip = 0
    console.log("🚀 ~ file: script.js:14 ~ tipCalculation ~ tip", tip)

    priceWithTip = bill + tip
    console.log("🚀 ~ file: script.js:15 ~ tipCalculation ~ priceWithTip", priceWithTip)

    if (isNaN(tipPercentage)){
        totalPerPerson.innerHTML = bill
    }
    else{
        totalPerPerson.innerHTML = parseFloat(priceWithTip)
    }

    if (isNaN(bill)){
        totalPerPerson.innerHTML = "0.00"
    }
    
}

const callbackFunction = () => {
    const bill = getInput1()
    const tipPercetage = getInput2()
    tipCalculation(parseFloat(bill), parseFloat(tipPercetage))
}

















const input = document.querySelector("#test")
console.log(input);

// input.addEventListener('input', (event) => {
//     console.log("Bill", bill)
// })

// document.getElementById("tipInput").addEventListener('input', (event) => {
//     tip.event.value
// })



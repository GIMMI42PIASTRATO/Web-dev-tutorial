const totalPerPerson = document.getElementById('totalPerPerson')
const addPeople = document.getElementById("addPeople")
const removePeople = document.getElementById("removePeople")
const counter = document.getElementById("counter")

let peopleNum = 1

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



//MOLTO IMPORTATE: se incrementi la variabile prima di stamparla nel DOM allora non c'è
//nessun problema, ma se incrementi la variabile mentre nella stessa linea in cui dici
//di andarla a stampare nel DOM es: counter.innerHTML = peopleNum++; qui verrà stampato
//nel dom prima peopleNum e poi verra incrementato di uno, per questo nella console il numero
//era sempre maggiore di 1, se vuoi usare questo metodo devi usare un pre-incremento
//ovvero prima di eseguire la variabile questa viene incrementata 
//es: counter.innerHTML = ++peopleNum; in questo modo la varabile prima di venire stampata nel
//DOM vera incrementata e quindi verra stampata la cifra corrretta

const incrementPeople = () => {
    peopleNum++
    counter.innerHTML = peopleNum
    // console.log("🚀 ~ Aggiungi persone", peopleNum)

    const bill = getInput1()
    const tipPercetage = getInput2()

    tipCalculation(parseFloat(bill), parseFloat(tipPercetage), peopleNum)
}

const decrementPeople = () => {
    if (peopleNum > 1) {
        peopleNum--
        counter.innerHTML = peopleNum
        // console.log("🚀 ~ Rimuovi persone", peopleNum)

        const bill = getInput1()
        const tipPercetage = getInput2()

        tipCalculation(parseFloat(bill), parseFloat(tipPercetage), peopleNum)
    }


}

const tipCalculation = (bill, tipPercentage, numOfPeople) => {
    // console.log("🚀 ~ file: script.js:14 ~ tipCalculation ~ bill", bill)
    // console.log("🚀 ~ file: script.js:14 ~ tipCalculation ~ tipPercentage", tipPercentage)
    
    let tip = (parseFloat(bill) * parseFloat(tipPercentage)) / 100
    let priceWithTip = 0
    // console.log("🚀 ~ file: script.js:14 ~ tipCalculation ~ tip", tip)

    priceWithTip = bill + tip
    // console.log("🚀 ~ file: script.js:15 ~ tipCalculation ~ priceWithTip", priceWithTip)

    //totalDivNumPeople means total divided by the number of people
    let totalDivNumPeople = 0
    totalDivNumPeople = priceWithTip / numOfPeople
    // console.log("🚀 ~ file: script.js:34 ~ tipCalculation ~ numOfPeople", numOfPeople)
    

    if (isNaN(tipPercentage)){
        if (numOfPeople > 1) {
            totalPerPerson.innerHTML = Number.parseFloat(bill / numOfPeople).toFixed(2)
        }
        else{
            totalPerPerson.innerHTML = Number(bill).toFixed(2)
        }
        
    }
    else{
        totalPerPerson.innerHTML = Number.parseFloat(totalDivNumPeople).toFixed(2)
    }

    if (isNaN(bill)){
        totalPerPerson.innerHTML = "0.00"
    }

}

const callbackFunction = () => {
    const bill = getInput1()
    const tipPercetage = getInput2()

    const counterValue = counter.textContent
    
    tipCalculation(parseFloat(bill), parseFloat(tipPercetage), parseInt(counterValue))
}


const input = document.querySelector("#test")
console.log(input);

// input.addEventListener('input', (event) => {
//     console.log("Bill", bill)
// })

// document.getElementById("tipInput").addEventListener('input', (event) => {
//     tip.event.value
// })



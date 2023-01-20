const totalPerPerson = document.getElementById('totalPerPerson')    //totalPerPerson è il totale al fondo della pagina, queseta costante serve per accederci quando chiamata
const addPeople = document.getElementById("addPeople")              //addPeople è il tag con al suo interno il simbolo +, questa cosatante serve per accederci quando chiamata 
const removePeople = document.getElementById("removePeople")        //removePeople è il tag con al suo interno il simbolo -, questa costante serve per accederci quando chiamata
const counter = document.getElementById("counter")                  //counter è il tag con al suo interno il numero di persone che verra incrementanto o decrementanto, questa costante serve per accederci quando chiamata

let peopleNum = 1

totalPerPerson.innerHTML = "0.00"

// getInput1() è una funzione che verra chiamata da una callBack functiono che descriverò dopo, crea una variabile bill che ottiene il valore del tag di input con l'id billTotalInput
const getInput1 = () => {
    let bill = document.getElementById("billTotalInput").value
    //document.getElementById("totalPerPerson").innerText = bill
    return bill
}

//getInput2() è una funzione che verra chiamata da una callBack function che descriverò dopo, crea una variabile tipPercentage che ottiene il valore del tag di input con l'id tipInput
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


//incrementPeople() è una funzione che incrementa di uno la variabile peopleNum e la va a modificare all'interno del DOM, chiama la funzione getInput1 e getInput2 e le salva all'interno di due rispettivamente bill e tipPercentage, dopo di che passa tutte le variabili come argomenti della funzione tipCalculation()
const incrementPeople = () => {
    peopleNum++
    counter.innerHTML = peopleNum
    // console.log("🚀 ~ Aggiungi persone", peopleNum)

    const bill = getInput1()
    const tipPercetage = getInput2()

    tipCalculation(parseFloat(bill), parseFloat(tipPercetage), peopleNum)
}


//decrementPeople se la variabilie peopleNum è maggiore di 1, ovvero il contatore che verra visualizzato nel DOM, decrementa peopleNum di 1 e fa le stesse cose che faceva la funzione incrementPeople()
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


//la fuzione tipCalculation() richiede 3 parametri, salva all'interno della variabile tip la percentuale da aggiungere all'importo finale, somma all'interno della variabile priceWithTip la variabile bill + tip e divide questa somma per il numero di persone e la salva all'interno della variabiletotalDivNumPeople
//se la variabile tipPercentage non è un numero(quindi potrebbe anche essere non stata inserita), se il numero di persone è maggiore di zero stampa la variabile totalDivNumPeople, altrimenti stampa la variabile bill
//in caso la prima condizione non sia accettata stampa la variabile totalDivNumPeople fino alla seconda cifra decimale
// se la variabile bill non è un numero(quindi potrebbe anche solo non essere stata inserita), stampa la stringa "0.00"
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

//callbackFunction() è una funzione che viene chiamata ogni volta che viene cliccato un tasto all'interno del tag di input, essa chiama tutte le sue funzione al suo interno
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



//la seconda parte è collegata con la prima


//array di oggetti

const actors = [
    {name: "Riccardo", netWorth: 10},
    {name: "Vittorio", netWorth: 10000},
    {name: "Gimmi", netWorth: 10000}
]

const obj1 = {name: "Riccardo", netWorth: 10}
const obj2 = {name: "Riccardo", netWorth: 10}
const obj3 = {name: "Riccardo", netWorth: 10}

const objs = [
    obj1,
    obj2,
    obj3 
]

//l'array result ha al suo interno gli oggetti degli attori che hanno un netWorth maggiore di 1000
let result = actors.filter((actor) => actor.netWorth > 1000)
console.log(result)

//l'array names contiene i nomi degli attori all'interno dell'array result
let names = (result.map(actor => actor.name)).join(", ")    //join è il contrario di split, ovvero unisce variabili contenute in un array 
console.log(names)

//scrivo in un file html direttamente da un file js 
//document.getElementById("part2.js").innterHTML = `<h1>${names}</h1>`



//reduce --- 
nums = [1, 2, 5, 7]

let sumArray = nums.reduce((prev, curr) => prev + curr)
console.log(sumArray)



//do a reduce come argomento una funzione che somma o moltiplica due numeri
const sum = (a, b) => {
    return a + b
}

const multiply = (a, b) => {
    return a * b
}

nums2 = [2, 3, 4]

const result2 = nums2.reduce(multiply)

console.log(result2)


//uso reduce per sommare tutti i netWorth all'interno dell'oggetto actors
console.log(actors.reduce((a, b) => a + b.netWorth, 0))




// --- ripasso dopo vacanze ---

const testName = "Gimmi"
const sureName = "Pagliaccio"
const testAge = 6000

const gimmi = {
    testName: testName,
    sureName: sureName,
    testAge: testAge
}

console.log(gimmi.testName, gimmi.sureName, gimmi.testAge);


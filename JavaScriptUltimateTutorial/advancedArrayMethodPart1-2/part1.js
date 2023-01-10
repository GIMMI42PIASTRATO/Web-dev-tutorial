//high order funciont

//.map --- cicla e ritorna un array

[1, 2, 3, 4, 5].map(number =>{
    console.log(number)
})


const doubleNumbers = (numbers) =>{
    return numbers.map((numbers) => numbers * 2) // allora prima che te lo dimentichi la funzione all'interno di .map è una callback function ovvero una funzione all'iterno di un metodo, quindi una funazione che prende come argomento X e ritorna Y e Y viene usato da .map come argomento per farlo funzionare (questo può funzionare con qualcunque altro )
}

console.log(doubleNumbers([1, 2, 3, 4, 5]))


//.filter --- cicla e ritorna un array con delle condizioni

//senza usare .filter 
const filter = (numbers2, greaterThan) =>{
    let filtredNumbers = []
    for(number2 of numbers2){
        if (number2 > greaterThan){
            filtredNumbers.push(number2)
        }
    }
    
    return filtredNumbers
}

console.log(filter([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))


//usando .filter

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13]

console.log(num.filter(num => num > 4 && num < 8))

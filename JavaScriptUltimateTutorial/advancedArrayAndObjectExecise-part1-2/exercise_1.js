let numbers = [2, 2 ,2]

const sumArray = (numbers) => {
    let result = 0

    for(number of numbers){
        result += number
    }
    return {result}
    //uso un oggetto perchè è semplicemente più bello
}

console.log(sumArray(numbers))



//simile all'esercizio di sopra ma fatto con le stringhe
let worlds = ["ciao ","sono ","una ","persona "]
let sentence = ""

const sumWorlds = (worlds) => {
    for(world of worlds){
        sentence += world
    }
    return sentence
} 
console.log(sumWorlds(worlds))



//esercizio che imposta il numero maggiore in un array
let numbers2 = [34, 1, 5, 100, 28, 21]
let max = 0

const maxNumber = (numbers2) =>{
    for(number2 of numbers2){
        if(number2 > max){
            max = number2
        }
    }
    return {max}
}

console.log(maxNumber(numbers2))



//calcola quante volte vengono ripetutti dei caratteri in una frase
const letterFrequency = (phrase) =>{
    let frequency = {}

    for(const letter of phrase){
        if(letter in frequency){
            frequency[letter] = frequency[letter] + 1
        }
        else{
            frequency[letter] = 1
        }
    }
    return frequency
}
console.log(letterFrequency("ciao sono una persona che sa scrivere a battitura"))

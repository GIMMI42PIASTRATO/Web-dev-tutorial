// let telecamera = 'movimento'

// if (telecamera == 'movimento') {
//   console.log('Prendi il ferro 🔫')
// }else {
//   console.log('Nessun problema 🥱')
// }

// const sicurezza = (movimento) => {
//   if (movimento) {
//     console.log('prendi il ferro')
//   } else {
//     console.log('Nessun problema')
//   }
// }
// let movimento = false

// sicurezza(movimento)


// function sayName(name){
//   console.log(name)
// }

// sayName('Vittorio')



// function somma(x , y){
//   return x + y
// }
// Numero1 = somma(1,2)
// console.log(Numero1)


// function calcolaIlTotaleDelCibo(cibo, mancia){
// const percentualeDellaMancia = mancia / 100
// const manciaTotale = cibo * percentualeDellaMancia
// const totale = somma(cibo, manciaTotale)
// return totale
// }

// console.log(calcolaIlTotaleDelCibo(200, 20))










// QUI SOTTO C'è L'ESERCIZIO SULLE FUNZIONI




// function add(a, b) {
//   return a + b
// }

// function sub(a, b) {
//   return a - b
// }

// function div(a, b) {
//   return a / b
// }

// function mul(a, b) {
//   return a * b
// }

// console.log('hello from the SUM exercise')

// function dati(a, b) {
//   console.log(add(a, b))
//   console.log(sub(a, b))
//   console.log(div(a, b))
//   console.log(mul(a, b))
// }

// dati(3, 2);



// const add = (a, b) => a + b

// const sub = (a, b) => a - b

// const div = (a, b) => a / b

// const mul = (a, b) => a * b

// console.log('HELLO WORLD FROM THE SUM EXERCISE')

// const dati = (a, b) =>{
//   console.log(add(a, b))
//   console.log(sub(a, b))
//   console.log(div(a, b))
//   console.log(mul(a, b))
// }
// dati(100, 10)








//PARTE SUGLI ARRAY


// const carrello = ['banana', 'mela', 'pera', 'arancia'];
// console.log(carrello, 'test')

// carrello.push('cioccolato')
// console.log(carrello)

// console.log(carrello.slice(0, 3))

// console.log(carrello.slice(2,5))





//PARTE SUGLI OGGETTI


// const person = {
//   name: 'Vittorio', 
//   sureName: 'Bussano'
// }

// console.log(person.name)
// console.log(person['sureName'])

// person.age = 16

// console.log(person.age)

// console.log(person)

// const person2 = {
//   name : 'quazi',
//   tshirtColor : 'black'
// }

// console.log(person2)





// PICCOLO ESERCIZIO CON GLI OGGETTI

// const introducer = (name, sureName) =>{
//   const person ={
//     name: name,
//     sureName: sureName,
//     assets: 100000,
//     debit: 50000,
//     netWorth: function () {
//       return this.assets - this.debit
//     }
//   }
//   const introdution = `Ciao mi chiamo ${person.name} ${person.sureName} è sono una persona che sa scrivere molto bene a battiitura 150 wpm, il mio networth è di ${person.netWorth()}`
//   return introdution
// }

// console.log(introducer('Pino', 'Pagliaccio'))









//PARTE SUI FOR LOOPS !!!! MOLTO IMPORTANTE !!!! VERAMENTE MOLTO IMOPORTANTE PRATICAMENTE TUTTO QUELLO CHE DEVI SAPERE STA QUI SOTTO QUINDI VEDI DI NO FARE CAZZATE PLS



const fruits = ['banana', 'apple', 'pera', 'anguria', 'banana', 'apple', 'pera', 'anguria', 'banana', 'apple', 'pera', 'anguria', 'banana', 'apple', 'pera', 'anguria', 'banana', 'apple', 'pera', 'anguria', 'banana', 'apple', 'pera', 'anguria',]

// for (let i=0; i < fruits.length; i++){
//   console.log(fruits[i])
// }       //NON USARE MAI QUESTO LOOP CHE NON SI CAPISCE 


// for (const fruit of fruits){
//   console.log(fruit)
// }

// const double = (numbers) => {
//   let result = []

//   for (const number of numbers) {
//     let doubleNumber = number * 2
//     result.push(doubleNumber)
//   }

//   console.log(result)
// }

// double([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])



// const quanteLettereCiSono = () =>{

// const lettere =('Ciao sono una persona che sa scrivere a battitura')

//   for (const lettera in lettere) {
//     console.log(Number(lettera) +1 )
//   }
// }

// quanteLettereCiSono()



// const lunghezzaFrase = (frase) => {
//   return { Risultato: frase.length}
// }

// const frase = prompt("Inserisci la tua frase bro")
// console.log(lunghezzaFrase(frase))



// const sumArray = (numbers) => {
//   let risultato = 0;

//   for (const number of numbers) {
//     console.log(number)
//     risultato = risultato + number
//   }
//   return { risultato }
// }

// const nums = [1, 2, 3, 4]
// console.log(sumArray(nums)) 



// const letterFrequency = (phrase) => {
//   console.log(phrase)

//   let frequency = {}

//   for (const letter of phrase) {
//     frequency[letter] = 0
//     for (const letter in frequency) {
//       frequency[letter] += frequency[letter] + 1
//     }
//   }
//   return frequency
// }

// console.log(letterFrequency('hello'))



const wordFrequency = (phrase) => {
  let Frequency = {}

  let array = phrase.split(' ')

  for (const word of array) {
    console.log(word)
    if (word in Frequency) {
      Frequency[word] += 1
    } else {
      Frequency[word] = 1
    }
  }

  console.log(array)
  return Frequency
}

console.log(wordFrequency('ciao cosa ciao sono io io'))





// COSE A CASO FATTE PER CURIOSITà NON CENTRA CON IN CORSO

// const Vittorio = {
//   name: 'Vittorio',
//   sureName: 'Bussano',
//   netWorth: 100000
// }


// const Riccardo = {
//   name: 'Riccardo',
//   sureName: 'Bussano',
//   netWorth: function (persona) {
//     return 50000 + persona.netWorth
//   }
// }
// console.log(Riccardo.netWorth(Vittorio))








// ARRAY METHODS

const doubleNumber = (numbers) => {
  return numbers.map(number => number * 2)
}

console.log(doubleNumber([1, 2, 3, 4, 5]))




const sottraiNumeri = (numeri) => {
  return numeri.map(numero => numero -3)
}

const input = promt('Iserisci numeri staccati da uno spazio')
console.log(sottraiNumeri(input))


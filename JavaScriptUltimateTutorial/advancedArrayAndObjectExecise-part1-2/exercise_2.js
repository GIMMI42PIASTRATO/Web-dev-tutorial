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
console.log(letterFrequency("ccciii"))




//calcola qunate volte vengono ripetute della parole in una frase
const wordlFrequency = (phrase2) =>{
    let frequency2 = {}
    for(world of phrase2.split(" ")){
        console.log(world)
        if(world in frequency2){
            frequency2[world] ++
        }
        else{
            frequency2[world] = 1
        }
    }

    return frequency2
}

console.log(wordlFrequency("ciao ciao una una una"))



//uso la funzione letterFrequency() per far funzionare il worldFrequency(), è uguale a quello di prima ma sfruttiamo la funzione che abbiamo creato prima letterFreaquency() in modo da non doverlo riscrivere
 const wordlFrequency2 = (phrase3) =>{
    const world = phrase3.split(" ")

    return letterFrequency(world)
}

console.log(wordlFrequency2("bello ma non troppo"))
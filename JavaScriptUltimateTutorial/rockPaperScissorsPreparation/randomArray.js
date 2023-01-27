const fruit = ['Apple', 'Banana', 'Pear', 'Ananas']

randomFruit = fruit[Math.floor(Math.random() * fruit.length)]

console.log(randomFruit)



const wheater = ['rain', 'sun', 'cloud']

const wheaterScoar = (wheater) => {
    let score

    if (wheater === 'rain'){
        console.log('is raining')
        score = 1
        console.log(score)
    }
    else if (wheater === 'sun'){
        console.log('is sunny')
        score = -1
        console.log(score)
    }
    else if (wheater === 'cloud'){
        console.log('is cloudy')
        score = 0
        console.log(score)
    }
}

wheaterScoar(wheater[Math.floor(Math.random() * wheater.length)])
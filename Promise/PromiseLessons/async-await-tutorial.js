const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        isReady = [true, false][console.log(Math.floor(Math.random() * 2))]
        isReady ? resolve('Soup is ready') : reject('No soup today') //condizione, ? significa if, : significa else, if (isReady) {...} else {...}
    }, 2000)
})

const isSoupReady = async() => {
    try{
        const ready = await promise1
        console.log(ready)
        console.log('Ottimo servizio nessun problema')
    }catch(err){
        console.log(err)
        console.log('Pessimo servizio lascerò una recensione negativa')
    }
}

isSoupReady()

promise1
.then(succes => console.log(succes))
.catch(fail => console.log(fail))


const getHero = async() => {
    try{
        const response = await fetch('https://superheroapi.com/api.php/226738509709986/100')
        const json = await response.json()
        image = json.image.url
        console.log(json.image.url)
    }catch(err){
        console.log('In catch', err)
    }
}

const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        isReady = [true, false][Math.floor(Math.random() * 2)]
        isReady ? resolve('user obj') : reject('No user obj') //condizione, ? significa if, : significa else, if (isReady) {...} else {...}
    }, 5000)
})

getHero()

// let copyUser

// const test = async() => {
    
//     try {
//         const user = await getUser
//         copyUser = user
//         console.log(user)
//     } catch(err) {
//         console.log(err)
//     }

//     console.log(copyUser)
// }

// test()


const sum = async (a, b) => a + b

sum().then(console.log(sum()))

const getPromise = async () => {
    const result = await sum(5, 5)
    console.log(result)
}

getPromise()
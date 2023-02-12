console.log('test')

const userLog = true

let isLogged = new Promise((resolve, reject) => {
    if (userLog) {
        resolve('BuonGiorno')
    }
    else{
        reject('Utente non ancora loggato')
    }
})

isLogged.then(message => {
    console.log('Utente loggato correttamnete: ' + message)
}).catch(message => {
    console.log('Error Message: ' + message)
})
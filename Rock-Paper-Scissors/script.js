const rockButton = document.getElementById('rockButton')
const paperButton = document.getElementById('paperButton')
const scissorsButton = document.getElementById('scissorsButton')
const resetButton = document.getElementById('reset')
const resultDiv = document.getElementById('result')
const userDiv = document.getElementById('userWin')
const botDiv = document.getElementById('botWin')

const gameMoves = ['rock', 'paper', 'scissors']

let userWin = 0
let botWin = 0 

rockButton.addEventListener('click', event => {
    const move = gameMoves[0]
    whoWin(move)
})

paperButton.addEventListener('click', event => {
    const move = gameMoves[1]
    whoWin(move)
})

scissorsButton.addEventListener('click', event => {
    const move = gameMoves[2]
    whoWin(move)
})

resetButton.addEventListener('click', event => {
    userWin = 0
    botWin = 0
    userDiv.innerText = 'Your Wins 0'
    botDiv.innerText = 'Bot Wins 0'
})


const whoWin = (chosenMove) => {
    console.log("🚀 ~ file: script.js:29 ~ whoWin ~ chosenMove", chosenMove)
    

    const botMove = gameMoves[Math.floor(Math.random() * gameMoves.length)]
    console.log("🚀 ~ file: script.js:31 ~ whoWin ~ botMove", botMove)


    if (chosenMove === 'rock' && botMove === 'rock') {
        resultDiv.innerText = 'Draw'
        userDiv.innerText = `Your Wins ${userWin}`
        botDiv.innerText = `Bot Wins ${botWin}`
    }
    else if (chosenMove === 'rock' && botMove === 'paper') {
        resultDiv.innerText = 'Bot Win'
        botWin++
        userDiv.innerText = `Your Wins ${userWin}`
        botDiv.innerText = `Bot Wins ${botWin}`
    }
    else if (chosenMove === 'rock' && botMove === 'scissors') {
        resultDiv.innerText = 'You Win'
        userWin++
        userDiv.innerText = `Your Wins ${userWin}`
        botDiv.innerText = `Bot Wins ${botWin}`
    }

    else if (chosenMove === 'paper' && botMove === 'rock') {
        resultDiv.innerText = 'You Win'
        userWin++
        userDiv.innerText = `Your Wins ${userWin}`
        botDiv.innerText = `Bot Wins ${botWin}`
    }
    else if (chosenMove === 'paper' && botMove === 'paper') {
        resultDiv.innerText = 'Draw'
        userDiv.innerText = `Your Wins ${userWin}`
        botDiv.innerText = `Bot Wins ${botWin}`
    }
    else if (chosenMove === 'paper' && botMove === 'scissors') {
        resultDiv.innerText = 'Bot Win'
        botWin++
        userDiv.innerText = `Your Wins ${userWin}`
        botDiv.innerText = `Bot Wins ${botWin}`
    }

    else if (chosenMove === 'scissors' && botMove === 'rock') {
        resultDiv.innerText = 'Bot Win'
        botWin++
        userDiv.innerText = `Your Wins ${userWin}`
        botDiv.innerText = `Bot Wins ${botWin}`
    }
    else if (chosenMove === 'scissors' && botMove === 'paper') {
        resultDiv.innerText = 'You Win'
        userWin++
        userDiv.innerText = `Your Wins ${userWin}`
        botDiv.innerText = `Bot Wins ${botWin}`
    }
    else if (chosenMove === 'scissors' && botMove === 'scissors') {
        resultDiv.innerText = 'Draw'
        userDiv.innerText = `Your Wins ${userWin}`
        botDiv.innerText = `Bot Wins ${botWin}`
    }
}



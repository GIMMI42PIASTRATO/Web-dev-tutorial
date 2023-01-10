console.log("ciao sono io una persona che sa scrivere a battititura")

let title = document.getElementById('title')

let redBox = document.getElementById('red')
let yellowBox = document.getElementById("yellow")
let greenBox = document.getElementById("green")


// redBox.addEventListener("click", (event)  => {
//     event.preventDefault();
//     console.log("hai cliccato il quadrato rosso")
// })

// yellowBox.addEventListener("click", (event) => {
//     event.preventDefault()
//     console.log("hai cliaccto il quadrato giallo")
// })

// greenBox.addEventListener("click", (event) => {
//     event.preventDefault()
//     console.log("hai cliccato il quadrato verde")
// })

const squares = document.querySelectorAll(".square")

console.log(squares)

// console.log(squares[0].value)
// console.log(squares[1].value)
// console.log(squares[2].value)




//forEach è un metodo che itera gli array, quindi pui scrivere .forEach solo sugli array
const timesClicked = {
    red: 0,
    yellow: 0,
    green: 0,
}

squares.forEach(square => {
    square.addEventListener("click",(event) => {
        event.preventDefault()
        timesClicked[square.value] += 1
        square.innerHTML = timesClicked[square.value]
    })
})

const clearGameDiv = document.getElementById("clear")

const clearScores = () => {
    squares.forEach(square => {
        timesClicked[square.value] = 0
        square.innerHTML = "Click Me"
    })
}

clearGameDiv.onclick = () => clearScores()
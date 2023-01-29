const image = document.getElementById('imageContainer')
const hideElement = document.getElementById('error')
const author = document.getElementById('author')
const explanation = document.getElementById('explanation')

const date = new Date()
const year = date.getFullYear()
const month = date.getMonth() + 1
const day = date.getDate()

let fullDate = String(year + '-' + month + '-' + day)
console.log(fullDate)

const inputDate = document.getElementById('input')
console.log(inputDate)

inputDate.addEventListener('keyup', event => {
    inputDate.value = ''
    hideElement.style.display = 'contents'
    hideElement.innerHTML = "*It's only possible to use the day picker."
    setTimeout(() => {
        hideElement.style.display = 'none'
    }, 2000);
})

inputDate.addEventListener('change', event => {
    console.log(inputDate.value)
    fullDate = inputDate.value
    console.log("🚀 ~ file: script.js:16 ~ fullDate", fullDate)

    fetch(`https://api.nasa.gov/planetary/apod?api_key=hf6m2GMeUwBgDtwlNXcP9Ywov9k4dOhihu7IpfeL&date=${fullDate}`)
    .then(response => response.json())
    .then(data => {        
        console.log(data)
        if (data.code == 400) {
            image.innerHTML = `<div style='color: red; font-weight: bold;'>*${data.msg}</div>`
            return
        }
        image.innerHTML = `<img id='image' src='${data.url}'></img>`

        author.innerHTML = data.copyright

        explanation.innerHTML = data.explanation
    })
})

fetch(`https://api.nasa.gov/planetary/apod?api_key=hf6m2GMeUwBgDtwlNXcP9Ywov9k4dOhihu7IpfeL&date=${fullDate}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        image.innerHTML = `<img id='image' src='${data.url}'></img>`

        author.innerHTML = data.copyright

        explanation.innerHTML = data.explanation
    })


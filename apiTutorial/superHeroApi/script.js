const imageContainer = document.getElementById('imgContainer')
const buttom = document.getElementById('button')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('search')

const getHeroById = (id) => {
    console.log(id)

    fetch(`https://superheroapi.com/api.php/226738509709986/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        imageContainer.innerHTML = `<img src="${json.image.url}"/>`


    })
}

const getHeroByName = (heroName) => {
    fetch(`https://superheroapi.com/api.php/226738509709986/search/${heroName}`)
    .then(response => response.json())
    .then(json => {
        if(json.results != undefined) {
            console.log(json.results)
            imageContainer.innerHTML = ''
            json.results.map((image) => {
                console.log(image.image.url)
                const imageElement = `<img src="${image.image.url}"/>`
                imageContainer.innerHTML += imageElement
            })
            
            // imageContainer.innerHTML = `<img src="${json.results.image.url}"/>`
        }else{
            imageContainer.innerHTML = "You must insert a hero name"
        }
    })
}

buttom.onclick = () => {
    const getRandomInt = (min, max) => {
        getHeroById(Math.floor(Math.random() * (max - min + 1)) + min)
    }
    getRandomInt(1, 731)
}

searchButton.onclick = () => {
    const name = searchInput.value
    getHeroByName(name)
}
    


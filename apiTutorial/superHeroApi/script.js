const button = document.getElementById('button')
const searchBar = document.getElementById('search')
const searchButton = document.getElementById('searchButton')

const getRandomHero = (id) => {
    console.log(id)
    fetch(`https://superheroapi.com/api.php/226738509709986/${id}`)
    .then(response => response.json())
    .then(json => {
        
    })
}

button.onclick = () => {
    getRandomHero(Math.floor(Math.random() * (731 + 1)))
}
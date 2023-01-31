const button = document.getElementById('button')
const searchBar = document.getElementById('search')
const searchButton = document.getElementById('searchButton')
const heroImg = document.getElementById('heroImg')
const heroStats = document.getElementById('heroStats')
const heroName = document.getElementById('heroName')

const getRandomHero = (id) => {
    console.log(id)
    fetch(`https://superheroapi.com/api.php/226738509709986/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        heroStats.innerHTML = ''

        heroName.innerHTML = json.name

        heroImg.innerHTML = `<img src="${json.image.url}"</img>`

        const powerStats = json.powerstats
        const arrayPowerStats = Object.entries(powerStats)
        arrayPowerStats.forEach(([key, value]) => {
            heroStats.innerHTML += `${key}: ${value}<br/>`
        })
    })
}


const getSearchHero = (name) => {
    fetch(`https://superheroapi.com/api.php/226738509709986/search/${name}`)
    .then(response => response.json())
    .then(json => {
        
        console.log(json)
    
        const getRandomArray = json.results[Math.floor(Math.random() * json.results.length)] //quando cerchi l'eroe è probabile che ci siano più varianti di quell'ero, quandi all'interno della ricerca dell'eroe vengono salvati all'interno di un array tutti gli oggetti che contengono tutte le proprietà dell'eroe, questo script fa in modo di prendere randomicamente una di queste.
        heroName.innerHTML = getRandomArray.name

        heroImg.innerHTML = `<img src="${getRandomArray.image.url}">`

        heroStats.innerHTML = ""
        const arrayPowerStats = Object.entries(getRandomArray.powerstats)
        arrayPowerStats.forEach(([key, value]) => {
            heroStats.innerHTML += `${key}: ${value}<br/>`
        }) 
    })
    // .catch(response => response.json())
    // .catch(json => {
    //     heroImg.innerHTML = json.error
    // })
}


button.onclick = () => {
    getRandomHero(Math.floor(Math.random() * (731 + 1)))
}

searchButton.onclick = () => {
    const searchName = searchBar.value
    getSearchHero(searchName)
}
const imageContainer = document.getElementById('imgContainer')
const buttom = document.getElementById('button')
const searchButton = document.getElementById('searchButton')
const searchInput = document.getElementById('search')
const heroStats = document.getElementById('heroStats')

// Modifiche riccardo
const heroContainer = document.querySelector(".heroContainer");
// Fine modifichie

const getHeroById = (id) => {
    console.log(id)

    fetch(`https://superheroapi.com/api.php/226738509709986/${id}`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        heroContainer.innerHTML = `<img src="${json.image.url}"/>`
    })

    fetch(`https://superheroapi.com/api.php/226738509709986/${id}/powerstats`)
    .then(response => response.json())
    .then(json => {
        console.log(json)
        let stats = Object.entries(json)
        const descriptionElement = document.createElement('div')
        stats.forEach(([key, value]) => {
            
            heroStats.innerHTML += `${key}: ${value}<br/>`
        })
    })
}

const getHeroByName = (heroName) => {
    fetch(`https://superheroapi.com/api.php/226738509709986/search/${heroName}`)
    .then(response => response.json())
    .then(json => {
        if(json.results != undefined) {
            console.log("Results", json.results)
            heroContainer.innerHTML = ''
            json.results.map((image) => {
                console.log("Image", image);
                const descriptionElement = document.createElement("div")
                console.log(image.image.url)
                const imageElement = `<img src="${image.image.url}"/>`
                heroContainer.innerHTML += imageElement
                descriptionElement.setAttribute("class", "descriptionElement")
                heroContainer.append(descriptionElement)
            })
            
            // imageContainer.innerHTML = `<img src="${json.results.image.url}"/>`
        }else{
            heroContainer.innerHTML = "You must insert a hero name"
        }
    })

    fetch(`https://superheroapi.com/api.php/226738509709986/search/${heroName}/powerstat`)
    .then(response => response.json())
    .then(json => {
        // Rimuovo questo (Riccardo)
        // heroStats.innerHTML = ''
        json.results.map((object) => {
            console.log(object.powerstats)
            let stats = Object.entries(object.powerstats)
            const descriptionsElements = document.getElementsByClassName("descriptionElement")
            console.log("descriptionsElements", descriptionsElements);

            let i = 0;

            // [["forza", "value"], ["inteligenza", "value"]]
            // [1, 2]
            stats.forEach(([key, value], index) => {
                index += 1;
                console.log("Index Array", index);
                if ((index % 6) !== 0) {
                    console.log("Desntro l'if: ")
                    console.log("Value: ", value, "Key: ", key)
                    descriptionsElements[i].innerHTML = `${key}: ${value}<br/>`
                } else {
                    i++
                }
                // heroContainer.innerHTML += `<div>${key}: ${value}</div><br/>`
            })
        })
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
    


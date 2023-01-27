const dogImmage = document.getElementById('dogImmage')

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json)
    .then(json => {
        dogImmage.innerHTML = `<img scr='${json.message}'`
    }) 
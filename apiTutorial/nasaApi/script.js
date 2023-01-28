// const image = document.getElementById('imageContainer')

fetch('https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-01-01&end_date=2023-01-07&api_key=u9i29g1nvwwld876jukZihriAFMdsRM1GBbGKiiO')
.then(response => response.json())
.then(data => {
    console.log(data.near_earth_objects['2023-01-01'])
    // image.innerHTML = `<img id='image' src='${data.hdurl}'></img>`
})


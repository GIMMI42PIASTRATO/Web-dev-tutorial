const input = document.querySelector('.input')
const searchButton = document.querySelector('.button')
const displayCityName = document.querySelector('.cityName')
const wheater = document.querySelector('.wheater')
const temperature = document.querySelector('.temp')
const minTemp = document.querySelector('.minTemp')
const maxTemp = document.querySelector('.maxTemp')

const date = new Date()
let year = date.getFullYear()
let month = date.getMonth() + 1
let day = date.getDate()

console.log(`${year}-${month}-${day}`)

let hours = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()

cityName = undefined

searchButton.addEventListener('click', event => {
    year = date.getFullYear()
    month = date.getMonth() + 1
    day = date.getDate()

    hours = date.getHours()
    minutes = date.getMinutes()
    seconds = date.getSeconds()

    console.log(`${hours}:${minutes}:${seconds}`)

    const cityName = input.value
    console.log(cityName)
    getWeather(year, month, day, cityName)
})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2195fbcec4mshf8da786f701909ep16f7ecjsnb153bd8e18a5',
		'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
	}
};

const getWeather = async(cityName) => {        
    let data
    
    try{
        const response = await fetch(`https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=${year}-${month}-${day}T00%3A00%3A00&aggregateHours=24&location=${cityName}&endDateTime=${year}-${month}-${day}T${hours}%3A${minutes}%3A${seconds}&unitGroup=uk&contentType=json&shortColumnNames=0`, options)
        data = await response.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}
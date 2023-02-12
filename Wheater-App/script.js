const input = document.querySelector('.input')
const searchButton = document.querySelector('.button')
const displayCityName = document.querySelector('.cityName')
const wheater = document.querySelector('.wheater')
const temperature = document.querySelector('.temp')
const minTemp = document.querySelector('.minTemp')
const maxTemp = document.querySelector('.maxTemp')


searchButton.addEventListener('click', event => {
    const cityName = input.value
    console.log(cityName)
})

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2195fbcec4mshf8da786f701909ep16f7ecjsnb153bd8e18a5',
		'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
	}
};

const getWeather = async() => {
    const response = await fetch('https://visual-crossing-weather.p.rapidapi.com/history?startDateTime=2022-12-15T00%3A00%3A00&aggregateHours=24&location=Torino&endDateTime=2022-12-15T23%3A59%3A59&unitGroup=uk&contentType=json&shortColumnNames=0', options)
    const data = await response.json()
    console.log(data)
}

getWeather()
	
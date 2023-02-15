//A class is a template of an object, this means you can create custom object from a single class by only pass the data as argumets of the class
//EXAMPLE: const promise = new Promise(resolve, reject)

//Now i create a new custom class
//For convention the frist letter of the class name is always in upper case

class Car{
    constructor(name, color, model, currentSpeed) {
        this.name = name
        this.color = color
        this.model = model
        this.currentSpeed = 0
    }

    start() {
        console.log('The car is on')
        this.currentSpeed += 50
        console.log(`Driving speed at ${this.currentSpeed} Kmh`)
    }

    stop() {
        console.log('The car is off')
        this.currentSpeed = 0
        console.log(`Current speed ${this.currentSpeed}`)
    }

    getCurrentSped() {
        console.log(this.currentSpeed)
    }
}

const fiat500 = new Car('Fiat','red', 500)

console.log(fiat500.name)
console.log(fiat500.color)
console.log(fiat500.model)

console.log(`Speed car stop ${fiat500.currentSpeed} Kmh`)
fiat500.start()

fiat500.stop()

const ferrai = new Car('Ferrari', 'Yellow', 'I don\'t know.')
console.log(ferrai.name)
console.log(ferrai.color)
console.log(ferrai.model)
//A class is a template of an object, this means you can create custom object from a single class by only pass the data as argumets of the class
//EXAMPLE: const promise = new Promise(resolve, reject)

//Now i create a new custom class
//For convention the frist letter of the class name is always in upper case

class Car{
    constructor(name, color, model) {
        this.name = name
        this.color = color
        this.model = model
        this.currentSpeed = 0
    }

    start(speed) {
        console.log('The car is on')
        this.currentSpeed += speed
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
fiat500.start(50)

fiat500.stop()

const ferrai = new Car('Ferrari', 'Yellow', 'I don\'t know.')
console.log(ferrai.name)
console.log(ferrai.color)
console.log(ferrai.model)

ferrai.start(120)
ferrai.start(50)
ferrai.getCurrentSped()


//Javascdript is an object oriented language, so everything is an onbject created by class, so we can create everything by instantiating an object using the class we need.
//Creating a string by doing const string = 'ciao' is the same thing
const string = new String('ciao')
console.log(string)

const array = new Array(1, 2, 3, 4)
console.log(array)

const object = new Object()
object.key1 = 'ciao'
object.key2 = 42
console.log(object)
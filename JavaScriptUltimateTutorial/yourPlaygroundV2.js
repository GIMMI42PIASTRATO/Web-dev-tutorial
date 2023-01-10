//funzioni + array
/*
const howManyletters = (phrase) => {

    let result = 0 

    for(let letter in phrase){
       result = Number(letter) + 1
    }

    return {result: result}
}
const phrase = prompt("Scrivi la tua frase")
console.log(howManyletters(phrase))
*/

//CLASSI SUPER IMPORTANTE
let password = prompt("Insert a password")

class Car {
    constructor(carName, color, maxSpeed){
        //proprietà, properties
        this.carName = carName
        this.color = color
        this.maxSpeed = maxSpeed
        this.currentSpeed = 0
    }

    //metodi, method (sono delle funzioni all'interno di un'oggetto)

    drive(){
        console.log("just drived 1km")
        this.currentSpeed += 10
        console.log(`Current speed ${this.currentSpeed} kh`)

    }

    passwordController(){
        if(password == "123"){
            console.log("Correct password")
        }
        else{
            console.log("Password wrong, insert another password")
        }
    }
}

const ferrari = new Car("ferrari", "red", 300)
console.log(ferrari.carName)
console.log(ferrari.color)
console.log(ferrari.maxSpeed)
ferrari.drive()
ferrari.passwordController()
console.log(ferrari.currentSpeed)



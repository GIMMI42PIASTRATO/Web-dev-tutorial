//Important part

class MyArray extends Array {
    constructor(...elements) {
        super(...elements)
    }
    
    myPush(item) {
        this[this.length] = item
    }
}

const myArray = new MyArray('🍌', '🍎', '🍍')
myArray.myPush('🍓')
console.log(myArray)


//Hard part

class Test extends Array {
    constructor([key, value], ...elements) {
        super(...elements)
        this.key = key
        this.value = value
    }
    
    myPush(item) {
        this[this.length] = item
    }
}

const test = new Test(["Solebox", myArray])
test.myPush('prova')
console.log(test)
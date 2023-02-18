Array.prototype.myPush = function(item) {
    this[this.length] = item
    return this
}

const array = new Array('🍌', '🥝', '🍍')
console.log(array.myPush('🍎'))
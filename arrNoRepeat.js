// array with no repeat random numbers

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isArray() {
    var arr = [];
    var arrCount = 6;
    var min = 1, max = 9, n;
    for (var i = 0; i < arrCount; i++) {
        n = getRandomInt(min, max);
        if (!arr.includes(n)) {
            arr.push(n);
        } else {
            i--;
        }
    }
    return arr;
}

console.log(isArray());
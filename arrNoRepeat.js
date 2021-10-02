// array with no repeat random numbers

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isRandomArray() {
    var arr = [];
    var arrCount = 6;
    var min = 1, max = 9;
    for (var i = 0; i < arrCount; i++) {
        var n = getRandomInt(min, max);
        while (true) {
            if(!arr.includes(n)) {
                arr.push(n);
                break;
            } else {
                n = getRandomInt(min, max);
            }
        }
    }
    return arr;
}

console.log(isRandomArray());
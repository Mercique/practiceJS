// output of integers from 0 to 100

console.log('Задание 1.');
var i = 2, j;
while (i <= 100) {
    var j = 2;
    while (j < i) {
        if (i % j == 0) {
            break;
        }
        j++;
    }
    if (i == j) console.log(i);
    i++;
}
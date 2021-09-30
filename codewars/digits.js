// Playing with digits

function digPow(n, p){
    n = String(n);
    var a = 0;
    for (let i = 0; i < n.length; i++) {
        a += Math.pow(n[i], p++);
    }
    return a % n == 0 ? a / n : -1
}

console.log(digPow(46288, 3));

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
// Square Every Digit

function squareDigits(num) {
    let n = String(num);
    let count = '';
    for (let i = 0; i < n.length; i++) {
      count += Math.pow(n[i], 2);
    }
    return Number(count);
}
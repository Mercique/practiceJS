// Descending Order

function descendingOrder(n) {
    var n = String(n).split('');
    n.sort(function(a, b) {
        return b - a;
    });
    return Number(n.join(''));
}
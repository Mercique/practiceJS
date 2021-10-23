function solution(string) {
    string = string.split('').map(function (elem) {
        if (elem === elem.toUpperCase()) {
            elem = ' ' + elem;
        }
        return el;
    });
    return string.join('');
}
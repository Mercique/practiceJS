var body = document.getElementsByTagName('body')[0],
    hex = document.querySelector('#hex-code'),
    fullCode = '', num;

var arrayCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
                 'A', 'B', 'C', 'D', 'E', 'F'];

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

document.querySelector('#btn-on').addEventListener('click', function() {
    for (var i = 0; i < 6; i++) {
        num = getRandomInt(arrayCode.length);
        fullCode += arrayCode[num];
    }
    document.getElementById('hex-code').innerText = '#' + fullCode;
    body.style.background = '#' + fullCode;
    fullCode = '';
});

document.querySelector('#btn-off').addEventListener('click', function() {
    document.getElementById('hex-code').innerText = '#050801';
    body.style.background = '#050801';
});
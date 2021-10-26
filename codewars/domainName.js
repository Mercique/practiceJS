// Extract the domain name from a URL

function domainName(url) {
    url = url.replace('https://', '');
    url = url.replace('http://', '');
    url = url.replace('www.', '');

    return url.split('.')[0];
}

console.log(domainName('https://http://www.serega.ru.uk.ggwp'));
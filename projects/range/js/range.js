const progress = range__line.querySelector('.range__progress'),
      scroll = range__line.querySelector('.range__scroll');

scroll.onmousedown = e => {
    e.preventDefault();

    let shiftX = e.clientX - scroll.getBoundingClientRect().left;
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(e) {
        let newLeft = e.clientX - shiftX - range__line.getBoundingClientRect().left;

        if (newLeft < 0) {
            newLeft = 0;
        }

        let rightEdge = range__line.offsetWidth - scroll.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        scroll.style.left = `${newLeft}px`;
        progress.style.width = `${newLeft + 10}px`;
    }
    
    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }
}

scroll.ondragstart = () => {
    return false;
}
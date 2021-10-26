const progress = range.querySelector('.range__progress'),
      scroll = range.querySelector('.range__scroll');

scroll.onmousedown = e => { // Кнопка мыши нажата над элементом.
    e.preventDefault(); // предотвратить запуск выделения (действие браузера)

    let shiftX = e.clientX - scroll.getBoundingClientRect().left; // позиционирование по X, от левой стороны БЛОКА
    // shiftY здесь не нужен, слайдер двигается только по горизонтали
    // clientX - n пикселей слева от окна
    // getBoundingClientRect() - позиционирование элемента, .left слева на n пикселей
    document.addEventListener('mousemove', onMouseMove); // (генерит каждое движение мыши над элементом)
    document.addEventListener('mouseup', onMouseUp); // (Кнопка мыши отпущена над элементом.)

    function onMouseMove(e) { // функция движения скролла
        let newLeft = e.clientX - shiftX - range.getBoundingClientRect().left;

        if (newLeft < 0) { // курсор вышел из слайдера СЛЕВА => оставить бегунок в его границах.
            newLeft = 0;
        }

        let rightEdge = range.offsetWidth - scroll.offsetWidth; // Самая правая позиция ШИРИНА RANGE минус ШИРИНА БЕГУНКА
        if (newLeft > rightEdge) { // курсор вышел из слайдера СПРАВА => оставить бегунок в его границах.
            newLeft = rightEdge;
        }

        scroll.style.left = `${newLeft}px`;
        progress.style.width = `${newLeft + 10}px`;
    }
    
    function onMouseUp() { // функция для удаления обработчиков
        document.removeEventListener('mouseup', onMouseUp); // удаление обработчика
        document.removeEventListener('mousemove', onMouseMove); // удаление обработчика
    }
}

scroll.ondragstart = () => { // чтобы не раздваивался элемент
    return false;
}
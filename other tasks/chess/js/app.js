function getFigureID(numJ, array) {
    switch(numJ) {
        case 1:
            return array[1];
        case 2:
            return array[2];
        case 3:
            return array[3];
        case 4:
            return array[4];
        case 5:
            return array[5];
        case 6:
            return array[3];
        case 7:
            return array[2];
        case 8:
            return array[1];
    }
}

function getFigureInput(numRow, numCol, arr, td) {
    switch(numRow) {
        case 1: // 1я линия фигур черных
            td.classList.add('black');
            td.innerHTML = getFigureID(numCol, arr); // функция возвращает фигуру из массива, далее записывается в h2
            break;
        case 2: // 2я линия пешек черных
            td.classList.add('black');
            td.id = numRow + '_' + numCol;
            td.innerHTML = arr[0];
            f.push(td);
            td.onclick = function() {
                checkChoose(f);
                td.classList.add('active');
                figure = this;
            }
            break;
        case 7: // 7я линия пешек белых
            td.classList.add('white');
            td.innerHTML = arr[0];
            td.id = numRow + '_' + numCol;
            f.push(td);
            td.onclick = function() {
                checkChoose(f);
                td.classList.add('active');
                figure = this;
            }
            break;
        case 8: // 8я линия фигур черных
            td.classList.add('white');
            td.innerHTML = getFigureID(numCol, arr);
            break;
        default:
            if (numRow > 0 && numRow < 9 || numCol > 0 && numCol < 9)
                td.id = numRow + '_' + numCol;
            td.onclick = function() {
                var a = figure.id.split('_'),
                    c = this.id.split('_');

                if (a[1] == c[1]) {
                    this.id = figure.id;
                    this.innerHTML = figure.textContent;
                    if (a[0] == 2) {
                        if (this.classList.contains('white'))
                            this.classList.remove('white');
                        this.classList.add('black');
                    } else if (a[0] == 7) {
                        if (this.classList.contains('black'))
                            this.classList.remove('black');
                        this.classList.add('white');
                    }
                    checkChoose(f);
                    figure.innerHTML = '';
                    figure = undefined;
                }
            }
            break;
    }
}

function checkChoose(arr) {
    for (var item of arr) {
        if (item.classList.contains('active'))
            return item.classList.remove('active');
    }
}

function getBgColor(numRow, numCol, td) {
    if ((numRow > 0 && numRow < 9) && (numCol > 0 && numCol < 9)) {
        td.style.fontSize = '50px';
        if (numCol % 2 == numRow % 2) {
            td.className = 'chess__red';
        } else {
            td.className = 'chess__yellow';
        }
    }
    return td;
}

function realizeChess() {
    var table = document.createElement('table'),
        row = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
        col = ['8', '7', '6', '5', '4', '3', '2', '1'],
        figure = ['&#9817;', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;']; // изображение фигур спец. символами для HTML

    for (var i = 0; i < 10; i++) {
        var tr = document.createElement('tr');
        table.append(tr);
        for (var j = 0; j < 10; j++) {
            var td = document.createElement('td');
            if (i == 0) {
                td.style.transform = 'rotate(180deg)';
                td.innerHTML = '<h3>' + row[j] + '</h3>';
            } else if (i > 0 && i < 9) {
                if (j == 0) {
                    td.innerHTML = '<h3>' + col[i - 1] + '</h3>';
                } else if (j == 9) {
                    td.style.transform = 'rotate(180deg)';
                    td.innerHTML = '<h3>' + col[i - 1] + '</h3>';
                }
            } else if (i == 9) {
                td.innerHTML = '<h3>' + row[j] + '</h3>';
            }
            tr.append(td);

            getBgColor(i, j, td); // данная функция закрашивает клетки шахматной доски
            if ((i > 0 && i < 9) && (j > 0 && j < 9))
                getFigureInput(i, j, figure, td); // Вызываю функцию для задания №3
        }
    }
    return table;
}

var chessboard = document.querySelector('#chess'),
    chessboardText = document.querySelector('#chess__text'),
    chessboardFigure = document.querySelector('#chess__figure');

var f = [], figure;

chessboardFigure.append(realizeChess());
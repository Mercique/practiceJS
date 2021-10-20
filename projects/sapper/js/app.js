var FIELD_SIZE_X = 16,
    FIELD_SIZE_Y = 16,
    bomb = 40,
    arrOpen = [];

function init() {
    creatingPlayingField();

    startGame();
}

function creatingPlayingField() {
    var sapper = document.getElementById('sapper'),
        sapper_field = document.createElement('table');

    sapper_field.className = 'sapper__field';
    for (var i = 1; i < FIELD_SIZE_X + 1; i++) {
        var row = document.createElement('tr');

        row.className = 'sapper__field-row row-' + i;
        for (var j = 1; j < FIELD_SIZE_Y + 1; j++) {
            var cell = document.createElement('td');

            cell.className = 'sapper__field-cell cell-' + i + '-' + j;
            row.append(cell);
        }
        sapper_field.append(row);
    }
    sapper.append(sapper_field);
}

function startGame() {
    var cell_btn = document.querySelectorAll('.sapper__field-cell');

    for (var i = 0; i < cell_btn.length; i++) {
        cell_btn[i].onclick = function() {
            this.classList.remove('sapper__field-cell');
            this.classList.add('sapper__field-open');
            if (this.classList.contains('bomb')) {
                var bomb = document.querySelectorAll('.bomb');

                for (var i = 0; i < bomb.length; i++) {
                    bomb[i].classList.remove('sapper__field-cell');
                    bomb[i].classList.add('sapper__field-open');
                }
                alert('You Lose!!!');
            }
            if (!this.innerText) {
                openCell(this);
            }
        }
        cell_btn[i].addEventListener('contextmenu', function() {
            if (this.classList.contains('context')) {
                this.classList.remove('context');
                this.classList.remove('sapper__field-open');
                this.classList.add('sapper__field-cell');
            } else {
                this.classList.add('context');
                this.classList.remove('sapper__field-cell');
                this.classList.add('sapper__field-open');
            }
        });
    }

    setBomb();
}

function openCell(id) {
    var arr_openCell = id.classList[0].split('-'),
        openCell_x = +arr_openCell[2],
        openCell_y = +arr_openCell[1];
    
    setOpen(openCell_y - 1, openCell_x); // сверху
    setOpen(openCell_y + 1, openCell_x); // снизу
    setOpen(openCell_y, openCell_x - 1); // слева
    setOpen(openCell_y, openCell_x + 1); // справа
    setOpen(openCell_y - 1, openCell_x - 1); // сверху-слева
    setOpen(openCell_y - 1, openCell_x + 1); // сверху-справа
    setOpen(openCell_y + 1, openCell_x - 1); // снизу-слева
    setOpen(openCell_y + 1, openCell_x + 1); // снизу-справа
}

function setOpen(y, x) {
    var checkOpen = document.querySelector('.cell-' + y + '-' + x);

    if (checkOpen != undefined && !checkOpen.classList.contains('bomb')) {
        checkOpen.classList.remove('sapper__field-cell');
        checkOpen.classList.add('sapper__field-open');
    }
}

function setBomb() {
    for (var i = 0; i < bomb; i++) {
        var bomb_coord_x = getRandomInteger(1, FIELD_SIZE_X),
            bomb_coord_y = getRandomInteger(1, FIELD_SIZE_Y);
            cell_bomb = document.querySelector('.cell-' + bomb_coord_y + '-' + bomb_coord_x);
        
        if (!cell_bomb.classList.contains('bomb')) {
            cell_bomb.classList.add('bomb');
            cell_bomb.innerText = 'M';
        } else {
            i--;
        }
    }
    setNumbers();
}

function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setNumbers() {
    var bomb_count = document.querySelectorAll('.bomb'),
        bomb_arr,
        bomb_x,
        bomb_y;

    for (var i = 0; i < bomb_count.length; i++) {
        bomb_arr = bomb_count[i].classList[1].split('-');
        bomb_x = +bomb_arr[2];
        bomb_y = +bomb_arr[1];

        getNumber(bomb_y - 1, bomb_x); // сверху
        getNumber(bomb_y + 1, bomb_x); // снизу
        getNumber(bomb_y, bomb_x - 1); // слева
        getNumber(bomb_y, bomb_x + 1); // справа
        getNumber(bomb_y - 1, bomb_x - 1); // сверху-слева
        getNumber(bomb_y - 1, bomb_x + 1); // сверху-справа
        getNumber(bomb_y + 1, bomb_x - 1); // снизу-слева
        getNumber(bomb_y + 1, bomb_x + 1); // снизу-справа
    }
}

function getNumber(y, x) {
    var cell_count = document.querySelector('.cell-' + y + '-' + x);
    
    if (cell_count != undefined && !cell_count.classList.contains('bomb')) {
        switch(+cell_count.innerText) {
            case 1:
                cell_count.innerText = 2;
                cell_count.style.color = '#0f0';
                break;
            case 2:
                cell_count.innerText = 3;
                cell_count.style.color = '#f00';
                break;
            case 3:
                cell_count.innerText = 4;
                cell_count.style.color = '#00f';
                break;
            case 4:
                cell_count.innerText = 5;
                cell_count.style.color = '#f0f';
                break;
            case 5:
                cell_count.innerText = 6;
                cell_count.style.color = '#f0f';
                break;
            default:
                cell_count.innerText = 1;
                cell_count.style.color = '#00f';
                break;
        }
    }
}

document.oncontextmenu = function (){return false};
window.onload = init;
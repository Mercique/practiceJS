var btn = document.querySelector('.todo__btn'),
    svg = document.getElementsByTagName('svg')[0],
    menu = document.querySelector('#todo__menu'),
    clear = document.querySelector('.clear__btn'),
    countP = document.querySelector('.todo__counter'),
    spanCheck = document.querySelector('.todo__check-clear'),
    counterCheckColor = document.querySelector('.todo__counter-color-check'),
    count = 0, degCount = 0;

function addTask() {
    var input = document.querySelector('.todo__input'),
        div = document.createElement('div'),
        p = document.createElement('p');
    
    if (input.value != '') {
        div.className = 'menu__task';
        p.className = 'task';
        
        menu.appendChild(div);
        div.appendChild(p);
        p.innerHTML = input.value;

        input.value = '';

        input.classList.remove('todo__input-place__color');
        input.placeholder = 'Write your task';

        degCount += 360;
        svg.style.transform = 'rotate(' + degCount + 'deg)';
        countP.innerHTML = 'Counter tasks: ' + ++count;

        counterCheckColor.style.color = '#260026';
        clear.style.background = '#260026';
        spanCheck.style.display = 'none';
    } else {
        input.classList.add('todo__input-place__color');
        input.placeholder = 'ERROR! Write task!';
    }
}

clear.addEventListener('click', function() {
    var allLists = document.querySelectorAll('.menu__task');
    if (count != 0) {
        for (var i = allLists.length - 1; i >= 0; i--) {
            allLists[i].remove();
        }
        count = 0;
        countP.innerHTML = 'Counter tasks: ' + count;
    } else {
        counterCheckColor.style.color = '#f00';
        clear.style.background = '#f00';
        spanCheck.style.display = 'block';
    }
});
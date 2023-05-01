const add = document.querySelector('#add');
const sort = document.querySelector('#sort');
const list = document.querySelector('#list');
let sorted = false;

function addListItem(info, list) {
    const li =document.createElement('li');
    const input =document.createElement('input');
    input.classList.add('input');
    input.value = info;

    const del = document.createElement('button');
    del.classList.add('li-btn');
    del.addEventListener('click', e => {
       e.target.parentElement.remove();
    });

    li.append(input, del);
    list.append(li);
}

add.addEventListener('click', e=> {
    addListItem('', list);
});

sort.addEventListener('click', e => {
    const arr = new Array();
    const items = document.querySelectorAll('#list li');
    items.forEach(li => {
        arr.push(li.firstElementChild.value);
    });
    arr.sort();
    if(sorted) {
        arr.reverse();
        e.target.classList.add('s-low');
        e.target.classList.remove('s-high');
    } else {
        e.target.classList.remove('s-low');
        e.target.classList.add('s-high');
    }
    sorted = !sorted;
    list.innerHTML = '';
    arr.forEach(item => {
        addListItem(item, list);
    });
});


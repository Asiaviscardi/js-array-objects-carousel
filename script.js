const items = document.querySelector('items');
const buttonprecedente = document.querySelector('sopra');
const buttonsuccessivo = document.querySelector('sotto');
const img = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

for(let i = 0; i < img.length; i++){
    const img = img [i];
    items.innerHTML += '<img src="${img}" class "item hide">';
    }

const itemscol = document.getElementsByClassName ('item');
itemscol [counterimg]
classlist.remove ('hide')
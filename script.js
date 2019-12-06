let field = document.createElement('div');
field.classList.add('container-field');

for(let i=1; i<160; i++){
    let exel = document.createElement('div');
    exel.classList.add('exel');
    field.appendChild(exel);
}

let container = document.getElementsByClassName('container')[0];
container.appendChild(field);

let exel = document.getElementsByClassName('exel');
let i = 0;

for (let y=16; y>0; y--) {
    for (let x=1; x<9; x++){
        exel[i].setAttribute('posX', x);
        exel[i].setAttribute('posY', y);
        i++;
    }
}
    
let x= 5, y = 10;
let mainArr = [
    [1, 0],
    [0, 1],
    [1, 1]
]

let currentFigure = 0;
    square = 0;

function create(){
    function getRandom(){
        return Math.round(Math.random()*(mainArr.length-1))
    }
}

currentFigure = getRandom();

square = [
    document.querySelector(`[posX = "${x}"] [posY = "${y}"] `),
    document.querySelector (`[posX = "${x + mainArr[currentFigure][0]}"][posY = "${y + mainArr[currentFigure][0]}"]`),
    document.querySelector (`[posX = "${x + mainArr[currentFigure][1]}"][posY = "${y + mainArr[currentFigure][0]}"]`),
    document.querySelector (`[posX = "${x + mainArr[currentFigure][0]}"][posY = "${y + mainArr[currentFigure][1]}"]`),
    document.querySelector (`[posX = "${x + mainArr[currentFigure][1]}"][posY = "${y + mainArr[currentFigure][1]}"]`),
]

for (let i=0; i<square.length; i++) {
    square[i].classList.add('figure');
}


create();

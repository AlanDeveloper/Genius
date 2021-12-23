let order = [], clickedOrder = [], score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const green = document.querySelector('.green');
const red = document.querySelector('.red');
const yellow = document.querySelector('.yellow');
const blue = document.querySelector('.blue');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order) {
        let elementColor = createColorElement(order[i]); 
        lightColor(elementColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    }, number + 200);
}

let checkOrder = () => {
    for (const i in clickedOrder) {
        if (clickedOrder[i] !== order[i]) {
            lose();
            break;
        } 
    }

    if (clickedOrder.length === order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando o próximo nível!`);
        nextLevel();
    }
}

let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');
    
    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
    }, 250);
    setTimeout(() => {
        checkOrder();
    }, 300);
}

let createColorElement = (color) => {
    if (color === 0) return green;
    if (color === 1) return red;
    if (color === 2) return yellow;
    if (color === 3) return blue;
}

let nextLevel = () => {
    score++;
    shuffleOrder();
}

let lose = () => {
    alert(`Pontuação: ${score}\nVocê perdeu o jogo! Clique em OK para iniciar um novo jogo!`);
    order = [];
    clickedOrder = [];

    play();
}

let play = () => {
    alert('Bem vindo ao Gênesis! Iniciando novo jogo!');
    score = 0;

    nextLevel();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

play();
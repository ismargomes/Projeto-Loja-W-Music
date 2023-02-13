let count = 1;
let timerId;
document.getElementById('radio1').checked = true;

function stopTimer() {
    clearInterval(timerId);
}

function startTimer() {
    debugger;
    timerId = setInterval(function () {
        nextImage();

    }, 4000)
}

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;

    }
    document.getElementById('radio' + count).checked = true;
}

startTimer();

/********************************************/  
// Prompt e alert de Boas vindas  
/********************************************/  

let nome = window.prompt('Qual é o seu nome?'); // Cria ( 'Qual o seu nome?');

window.alert('Seja bem vindo(a) ao Site World Music, ' + nome + '!'); // No alert, vai aparecer as BOAS VINAS, com o nome da pessoa, que a var nome = "RECEBER"
    
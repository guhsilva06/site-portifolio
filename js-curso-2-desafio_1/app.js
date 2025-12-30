let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarConsole() {
    console.log ('Cliquei');
}

function verificarAlerta() {
    console.log ('Alerta: Deu certo');
}

function verificarPrompt() {
    let nomeCidade = prompt ('Qual o nome de sua cidade');
    let mensagem = `Legal! Sua cidade e ${nomeCidade}`;
    alert (mensagem);
}

function verificarSoma() {
    let numero1 = parseInt(prompt (`Diga um numero:`));
    let numero2 = parseInt(prompt (`Diga mais um numero para soma:`));
    let resultado = numero1 + numero2;
    let mensagem = `${numero1} + ${numero2} = ${resultado}`;
    alert (mensagem);
}
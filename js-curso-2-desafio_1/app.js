//Criei uma variavel "titulo" que conecta junto ao documento h1 (dentro da index.html), este codigo me permitiu a alterar o nome do titulo do site
let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do Desafio';

//Este comando liga a um botao, no qual fiz a conexao colocando "verificarConsole()" no botao dentro da index.html e chamei para essa funcao, adicionando um clique no console.log
function verificarConsole() {
    console.log ('Cliquei');
}
//Parecido com o verificarConsole, mas criei um alert dentro do console.log
function verificarAlerta() {
    console.log ('Alerta: Deu certo');
}
//Criei uma funcao para o botao, onde ele cria um prompt perguntando o nome da cidade e em seguida um alert
function verificarPrompt() {
    let nomeCidade = prompt ('Qual o nome de sua cidade');
    let mensagem = `Legal! Sua cidade e ${nomeCidade}`;
    alert (mensagem);
}
//Adicionei uma funcao de soma para o botao
function verificarSoma() {
    let numero1 = parseInt(prompt (`Diga um numero:`));
    let numero2 = parseInt(prompt (`Diga mais um numero para soma:`));
    let resultado = numero1 + numero2;
    let mensagem = `${numero1} + ${numero2} = ${resultado}`;
    alert (mensagem);

}

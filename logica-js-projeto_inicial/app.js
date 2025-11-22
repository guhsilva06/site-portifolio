//shift + { para dar o espacamento correto
//Cria um alerta ao acessar a page desejando boas vindas
alert("Boas vindas ao meu projeto!");
//Define uma variavel, mostrando no Console (F12)
let numeroMaximo = 1000;
let numeroSecreto = parseInt (Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let tentativas = 1;
let chute;
//Enquanto chute nao for igual, faca:
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 0 e ${numeroMaximo}`);
    //Realiza uma comparacao entre o valor digitado pelo usuario e o valor da primeira variavel, criando condicoes "Se" e "Se nao"
    if (chute == numeroSecreto) {
      // Se o numero estiver certo, pare de rodar.
     break;
     //se o numero estiver incorreto, de uma dica
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        //tentativas = tentativas + 1 (some +1 tentativa a cada chute)
        tentativas++
    }
}
//: = "Se nao" para armazenar variaveis
let palavaTentativa = tentativas > 1 ? `Tentativas` : `Tentativa`;
alert(`Boa! Você acertou o número secreto (${numeroSecreto}) com ${tentativas} ${palavaTentativa}`)
//if (tentativas > 1) {
    //alert (`Boa! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
//} else {
    //alert (`Boa! Você acertou o número secreto ${numeroSecreto} com ${tentativas} tentativa!`);
//}
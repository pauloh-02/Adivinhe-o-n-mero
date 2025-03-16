let numeroMaximo = prompt("Digite um número máximo");
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let escolha;
let tentativas = 1;
console.log (numeroSecreto)
console.log (tentativas)
alert("Boas vindas ao jogo do número secreto.");


while (numeroSecreto != escolha) {
    escolha = prompt(`Digite um número de 0 a ${numeroMaximo}`);

    if (numeroSecreto == escolha) {
        alert("Você acertou. Parabéns!");
        break;
    } else if (numeroSecreto > escolha) {
        alert("Você errou, o número é maior.");
        tentativas++;
    } else {
        alert("Você errou, o número é menor.");
        tentativas++;
    }

}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert (`Você acertou em ${tentativas} ${palavraTentativa}`)

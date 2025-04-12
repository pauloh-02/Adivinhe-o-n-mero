let listaNumerosSorteados = [];
let numeroLimite = 100
let numeroSecreto = gerarNumero();
let tentativas = 1;

// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo de adivinhação.';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10.';

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;        
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function mensagemInicial () {
    exibirTextoNaTela('h1', 'Jogo de Adivinhação');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 100');
    
}

mensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Parabéns! Você acertou o número em ${tentativas} ${palavraTentativa}.`;
        exibirTextoNaTela ('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chutar').setAttribute('disabled', true);
    } else if (chute < numeroSecreto) {
        exibirTextoNaTela ('p', 'O número secreto é maior!');
    } else {
        exibirTextoNaTela ('p', 'O número secreto é menor!');
    }
    tentativas++;
    limparCampo();
}

function gerarNumero() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosLista = listaNumerosSorteados.length;

    if (quantidadeDeElementosLista == numeroLimite) {
        listaNumerosSorteados = [];
    }
    if (listaNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumero();
    } else {
        listaNumerosSorteados.push(numeroEscolhido)
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo () {
    numeroSecreto = gerarNumero();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('chutar').removeAttribute('disabled');
}
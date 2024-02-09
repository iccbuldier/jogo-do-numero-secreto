let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela (tag, texto) {
    let campo = document.querySelector (tag);
    campo.innerHTML = texto;
    responsiveVoice.speak (texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemIniciar () {
    exibirTextoNaTela ('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemIniciar ();

function verificarChute() {
    let chute = document.querySelector ('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = (`Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`);
        exibirTextoNaTela ('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute(`disabled`); 
    }  else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O número secreto é menor');
            } else {
                exibirTextoNaTela ('p','O número secreto é maior');
            }
            tentativas ++;
            limparCampo ();
        }
    }

function gerarNumeroAleatorio() { // ela é diferente, ela me fornece um informação no fim do processo.
    let numeroEscolhido = parseInt(Math.random () * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) { //para esvaziar 
        listaDeNumerosSorteados =[];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio ();
    } else {
        listaDeNumerosSorteados.push (numeroEscolhido);
        console.log (listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo() {
    numero =gerarNumeroAleatorio ();
    limparCampo ();
    tentativas = 1;
    exibirMensagemIniciar ()
    document.getElementById ('reiniciar').setAttribute ('disabled', true);
}
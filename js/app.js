let jogosAlugados = 0;

function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(numero) {
    let gameClicado = document.getElementById(`game-${numero}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nome = gameClicado.querySelector('.dashboard__item__name');

    if(imagem.classList.contains('dashboard__item__img--rented')) {
        let confirmacao = parseInt(prompt(`Devolver: ${nome.textContent}? Digite: 1(SIM) 2(NAO)`));
        
        if(confirmacao == 1){
            devolverJogo(imagem,botao,nome);
        } else {
            alert('Devolução cancelada!');
            return;
        }
    } else {
        alugarJogo(imagem,botao,nome);
    }
    contarEExibirJogosAlugados();
}

function devolverJogo(imagem,botao,nome) {
    imagem.classList.remove('dashboard__item__img--rented');
    botao.classList.remove('dashboard__item__button--return');
    botao.textContent='Alugar';
    alert(`${nome.textContent}: DEVOLVIDO COM SUCESSO`);
    jogosAlugados--;
}

function alugarJogo(imagem,botao,nome) {
    imagem.classList.add('dashboard__item__img--rented');
    botao.classList.add('dashboard__item__button--return');
    botao.textContent='Devolver';
    alert(`${nome.textContent}: ALUGADO COM SUCESSO`);
    jogosAlugados++;
}

//inicia a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});


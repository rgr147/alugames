let jogosAlugados = 1;

function contarEExibirJogosAlugados(){
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}

function alterarStatus(numero) {
    let gameClicado = document.getElementById(`game-${numero}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nome = gameClicado.querySelector('.dashboard__item__name');

    if(imagem.classList.contains('dashboard__item__img--rented')) {
        let confirmacao = parseInt(prompt(`Devolver: ${nome.textContent}? Digite: 1(SIM) 2(NAO)`));
        if(confirmacao){
            imagem.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.textContent='Alugar'
            alert(`${nome.textContent}: DEVOLVIDO COM SUCESSO`);
            jogosAlugados--;
        } else {
            alert('Devolução cancelada!')
            return;
        }
    } else {
        imagem.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.textContent='Devolver'
        alert(`${nome.textContent}: ALUGADO COM SUCESSO`);
        jogosAlugados++;
    }
    contarEExibirJogosAlugados();
}

//inicia a contagem considerando que os jogos já começam alugados
document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});
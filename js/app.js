function alterarStatus(numero){
    let id = `game-${numero}`;
    if(document.getElementById(id).querySelector('a').classList.contains('dashboard__item__button--return')){
        document.getElementById(id).querySelector('div').classList.remove('dashboard__item__img--rented');
        document.getElementById(id).querySelector('a').classList.remove('dashboard__item__button--return');
        document.getElementById(id).querySelector('a').innerHTML = 'Alugar';
    } else {
        document.getElementById(id).querySelector('div').classList.add('dashboard__item__img--rented');
        document.getElementById(id).querySelector('a').classList.add('dashboard__item__button--return');
        document.getElementById(id).querySelector('a').innerHTML = 'Devolver';
    }
}
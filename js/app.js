function alterarStatus(numero){
    let id = `game-${numero}`;

    let tagLi = document.getElementById(id) 
    let tagA = tagLi.querySelector('a');
    tagA.classList.add('dashboard__item__button');
    tagA.classList.add('dashboard__item__button--return');
    tagA.innerHTML = 'Devolver';
    
    let tagDiv = tagLi.querySelector('div');
    tagDiv.classList.add('dashboard__item__img');
    tagDiv.classList.add('dashboard__item__img--rented');   
}
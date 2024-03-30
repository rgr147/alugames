//Crie um programa que verifica se uma palavra ou frase é um palíndromo.
function verificaPalindromo() {
    texto = prompt('digite um texto');
    texto = texto.replace(/ /g,'');
    texto_invertido = texto.split('').reverse().join();
    texto_invertido = texto_invertido.replace(/,/g,'');
    if(texto == texto_invertido) {
        console.log('é palindromo');
    } else {
        console.log('não é palindromo');
    }
}
verificaPalindromo();

//Crie um programa com uma função que receba três números como argumentos 
//e os retorne em ordem crescente. Exiba os números ordenados.

function ordemNumerica(n1,n2,n3) {
    let vr = 0;
    let v1 = n1;
    let v2 = n2;
    let v3 = n3;

    if(n3<n1) {
        vr = v1;
        v1 = v3;
        v3 = vr;
    }

    if(n2<n1) {
        vr = v1;
        v1 = v2;
        v2 = vr;
    }

    if(n3<n2) {
        vr = v2;
        v2 = v3;
        v3 = vr;
    }

    console.log(v1,v2,v3);
}

ordemNumerica(3,1,2);

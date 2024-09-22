/*1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA?*/


var indice = 13, K = 0, soma = 0;// Declaração do indice, do número e da variável que será a soma


//aqui está sendo usado o laço de repetição WHILE para fazer o cálculo da soma e a alteração de valores nas variáveis.
// WHILE (K < indice) é responsável por dizer a condição, que no caso é: enquanto K for menor que o indice.
// Já o bloco de código dentro das chaves será executado enquanto a condição do WHILE for verdadeira. Então, ele é o FAÇA.
// K++ -> Pegar o valor de K e incrementar mais um || soma+= -> Pegar o valor atual da variável soma e somar com o valor de K. 
while(K < indice){
    K++
    soma+= K;
}

/*  
var soma = 0;
for(var K=0; K < 13; K++){
soma+= K
}

Também tem como fazer utilizando o for, acho que pode ser até mais prático pela redução de código. Porém decidi fazer da maneira que pedia no enunciado.

*/

alert(`O valor final é: ${soma}`)
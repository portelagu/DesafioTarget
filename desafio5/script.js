/* 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; */

// Aqui é criada uma variável que armazenará a palavra que deve ter os caracteres invertidos e outra onde a palavra será armazenada depois de invertida.
var palavra = prompt("Digite uma palavra");
var palavraInvertida = "";

// Criação da função onde a palavra será invertida.
function inverterPalavra(string){
// Utilização do laço de repetição For, onde criamos uma variável chamada i, que receberá como valor a quantidade de caracteres que a palavra tem. Esse código será executado até que o valor de i seja igual a 0, e a cada repetição do bloco de código o i será decrementado
    for(var i=string.length - 1; i >=0; i--){
        // aqui a palavra invertida ira armazenar a letra da string conforme o indice, que nesse caso é o i.
        palavraInvertida+=string[i];
    }

    // após o laço de repetição, esse alerta será exibido ao usuário.
    alert(`a palavra invertida fica: ${palavraInvertida}`)
}

// aqui a função está sendo chamada tendo a palavra que o usuário digitou como parâmetro
inverterPalavra(palavra);
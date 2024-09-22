//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

let numero = parseInt(prompt("Informe um número")); // aqui estamos pedindo para o usuário informar um número que será guardado em uma variável.
let a = 0, b = 1; // variáveis dos números que iniciam a sequência de Fibonacci 
let somaNumero; // variável que ira gerar a sequência


// Aqui o while está sendo usado para declarar a condição e criar o laço de repetição, então basicamente esse bloco de código será executado enquanto b for menor que o numero digitado pelo usuário.
while(b < numero){
    somaNumero = a + b; // aqui a sequencia está somando o valor de a + b
    a = b; // aqui a variável A recebe o valor de B
    b = somaNumero; // aqui a variável B recebe o valor da soma dos dois números(a+b)
}

// Logo após o while ter sido executado, teremos o if. Que será responsável por checar se o número que o usuário digitou pertence a sequência ou não
// A condição do IF é basicamente: Se B for igual o número digitado OU o número digitado for igual a 0 OU 1 então ele está na sequência, caso contrário, não está.
if(b === numero || numero === 0 || numero === 1){
    alert(`O número ${numero} está na sequência de Fibonacci! :)`);
} else {
    alert(`O número ${numero} não está na sequência de Fibonacci. :(`);
}
/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  */

// Aqui foi criado um objeto para separar o faturamento por estado que será armazenado dentro da variável faturamentoPorEstados
var faturamentoPorEstados = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
}

// Criação da variável onde o valor do faturamento total será armazenado e também há a criação do objeto onde será armazenado o percentual de representação de cada estado.
var faturamentoTotal = 0;
var percentualEstados = {}

// Aqui estamos utilizado o laço de repetição for in, que se parece com o forEach, a única diferença é que o for in é para objetos e forEach para array. 
// Esse primeiro for in é responsável por calcular o faturamento total. Então basicamente ele está executando como: para cada estado que há em faturamentoPorEstados, será pego o valor e adicionado a variavel de faturamentoTotal.
for (var estado in faturamentoPorEstados) {
    faturamentoTotal += faturamentoPorEstados[estado];
}

// Logo após o primeiro laço ter sido concluído, possuimos então valor do faturamento total. Agora com o faturamentoTotal, podemos calcular o percentual de cada estado e adicionar no objeto percentualEstados.
for (var estado in faturamentoPorEstados) {
    // Nesse for in, o percentualEstados[estado] receberá o valor do faturamento do estado atual, que será dividido pelo faturamento total e logo depois será multiplicado por 100. Após essa conta, temos o percentual, que será guardado no objeto percentualEstados.
    percentualEstados[estado] = (faturamentoPorEstados[estado] / faturamentoTotal) * 100;
}

// E por último, temos o for in responsável de exibir ao usuário cada estado e sua porcentagem.
for (var estado in percentualEstados) {
    //Aqui foi preciso adicionar o toFixed(2) para reduzir as casas decimais que serão exibidas ao usuário.
    alert(`${estado} percentual de: ${percentualEstados[estado].toFixed(2)}%`);
}
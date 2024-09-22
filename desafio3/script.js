/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.*/

//aqui estamos pegando o arquivo .json, e logo após todos os dados dentro dele serem lidos, usamos o then() que é responsável por retornar os dados 
fetch("dados.json").then((response) =>

    // Nesta parte, estamos pegando o retorno dos dados e transformando em json e logo após usamos outro then() para começar a lidar com os dados do arquivo. Dentro do *dados* há o array/objeto que será usado.
    response.json().then((dados) => {
        
    // Aqui estamos criando um array onde todos os valores acima de 0 será armazenado. O metodo filter é responsável por percorrer todo o array e filtrar conforme a condição do código, neste caso, é pedido para retornar todos os valores de faturamento acima de 0;
        var faturamento = dados.filter(dia => {
            return dia.valor > 0;
        });
        
    // Aqui foi declarado duas variáveis, onde o menor e maior faturamento são o primeiro indice do array (já filtrado).
    // Também temos a variável da soma de faturamento, que nesse momento, possui o valor de 0;
        var menorFaturamento = faturamento[0].valor;
        var maiorFaturamento = faturamento[0].valor;
        var somaFaturamento = 0;

        // Aqui está sendo utilizado o laço de repetição forEach. O forEach irá percorrer todo item do array, e em cada um dos itens, o bloco de código será executado.
        // No bloco de código temos if else com condições para verificar qual é o menor e maior faturamento do arquivo dados.json
        faturamento.forEach(dia => {

            //Se o valor do dia for MENOR que o valor atual da variável menorFaturamento, então o novo valor da variável será o valor do dia.
            if (dia.valor < menorFaturamento){
                menorFaturamento = dia.valor;

            //Se o valor do dia for MAIOR que o valor atual da variável maiorFaturamento, então o novo valor da variável será o valor do dia.
            } else if (dia.valor > maiorFaturamento){
                maiorFaturamento = dia.valor;
            }

            //Cada vez que o forEach for executado, o valor do dia será somado a variável somaFaturamento.
            somaFaturamento+=dia.valor;
        })

        // Aqui a média mensal está sendo calculada, onde pegamos o valor total do faturamento e dividimos pela quantidade total de dias.
        var mediaMensal = somaFaturamento / faturamento.length;

        // Essa variável irá armazenar a quantidade de dias onde o faturamento foi maior que a média mensal. Também está sendo utilizado o metodo filter de array (com o .length no final para pegar a quantidade), para filtrar e retornar apenas os dias onde a condição é verdadeira.
        var qntdDiasAcimaMedia = faturamento.filter(dia => {
            return dia.valor > mediaMensal;
        }).length;

        // Aqui é criado alerts para mostrar ao usuário os dias de menor e maior faturamento, além de mostrar a quantidade de dias onde o faturamento diário foi acima da média mensal.
        alert(`O menor valor de faturamento em um dia foi de ${menorFaturamento}`);
        alert(`O maior valor de faturamento em um dia foi de ${maiorFaturamento}`);
        alert(`O número de dias em que o faturamento diário foi acima da média mensal é ${qntdDiasAcimaMedia}`)

    })
)
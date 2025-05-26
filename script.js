function exce4(){
      let numero = Number(prompt(`Informe um número ${conta}`))
      for (let conta = 0; conta <= 10; conta ++){
      console.log((`${numero} x ${conta} = ${numero * conta}`))
    }
}


// exercicio 5 
function exce5(){
    for (let conta1 = 0; conta1 <= 10; conta1 ++) {
        for (let conta2 = 1; conta2 <= 10; conta2 ++){
        } 
        console.log((` ${conta1} x ${conta2} = ${conta1 * conta2}`))
    }
}
// execercicio 6
function exce6() {
    let totalVista = 0;
    let totalPrazo = 0;

    for (let i = 1; i <= 15; i++) {
        let codigo = prompt("Digite V para à vista ou P para a prazo:");
        let valor = Number(prompt("Digite o valor da transação:"));

        if (codigo === 'V' || codigo === 'v') {
            totalVista = totalVista + valor;
        } else if (codigo === 'P' || codigo === 'p') {
            totalPrazo = totalPrazo + valor;
        } else {
            console.log("Código inválido. Digite apenas V ou P.");
            i = i - 1; 
        }
    }

    let totalGeral = totalVista + totalPrazo;
    let primeiraParcela = totalPrazo / 3;

    console.log("Total das compras à vista: " + totalVista);
    console.log("Total das compras a prazo: " + totalPrazo);
    console.log("Total geral das compras: " + totalGeral);
    console.log("Valor total da primeira prestação das compras a prazo: " + primeiraParcela);
}

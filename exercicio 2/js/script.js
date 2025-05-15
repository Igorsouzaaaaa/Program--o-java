function exce2(){
    let preco = 5.0
    let qtde = 120
    const despesa = 200
    let  lucro , maiorLucro = 0
    let aux = ""

    while(preco >= 1.0){
       lucro =(preco * qtde) - despesa
       if (lucro > maiorLucro){
          maiorLucro = lucro
       }
       aux = aux + '\n' + (`${preco} - ${qtde} - ${lucro}`)
       qtde = qtde + 26
       preco = preco - 0.5
    }
    alert(aux)
    alert(maiorLucro)
}
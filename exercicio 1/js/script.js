function exce1(){
    let aux, a, b, c, d
    let grupo = 1
    while(grupo <= 5){
    a = Number(prompt(`Informe o valor da a`))
    b = Number(prompt(`Informe o valor de b`))
    c = Number(prompt(`Informe o valor de c`))
    d = Number(prompt(`Informe o valor de d`)) 
    let conta 
     while( conta <= 3){
    if(a > b){
        aux = a
        a = b
        aux = b
    }
    if (b > c){
        aux = b
        b = c 
        aux = c
    }
    if (c > d){
        aux = c
        c = d
        aux = d
    }
    conta++
  }
    alert (`Ordem Crescenter ${a} || ${b} || ${c} || ${d} || Ordem Decrescente ${d} || ${c} || ${b} || ${a}||`)
      grupo++
 }
}
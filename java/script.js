function pesquisaSatisfacao(){
let nota // guarda as notas do participante 
let conta = 1 // contar de 1 a 10
let satisfeito = 0 // temos 0 satisfeito inicialmente
let insatisfeito = 0 // temos 0 insatisfeito inicialmente
let soma = 0
while (conta <=10){
    nota = Number(prompt(`Informe a nota do participante ${conta} `))
    if(nota < 0 || nota > 10 || isNaN(nota)){
        alert(`Nota invalida`)
        continue // volta para o inicio do loop
    }
    else if (nota >= 8){
        satisfeito++
    } else if(nota <= 5){
        insatisfeito++
    }
    conta++ // conta = conta + 1 (incialmente conta)
    soma = soma + nota
  }
  // alert
  alert(`satisfeitos: ${satisfeito} e insatisfeitos ${insatisfeito}`)
  let media = soma / 10
  alert(`A média das notas é : ${media.toFixed(1)}`)
}     


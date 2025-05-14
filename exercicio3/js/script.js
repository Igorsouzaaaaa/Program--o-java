function excer3(){
    let conta, idade, f1, f2, f3, f4, f5 
    conta = 1
     f1 = 0 
     f2 = 0
     f3 = 0
     f4 = 0
     f5 = 0
     idade = 0

    while (conta <= 8){
    idade= Number(prompt (`Informe uma idade ${conta} `))
    if ( idade >= 100 || idade < 0){
      alert (` A idade ta Inválida`)
      continue // volta para o inicio do while 
    }
     else if (idade >= 0 && idade <= 15 ){
       f1 ++
       }
       else if (idade >= 16 && idade <= 31){
       f2++
       }
       else if (idade >= 31 && idade <= 45){
       f3++
       }
       else if (idade >= 46 && idade <= 60 ){
        f4++
       }
       else if (idade >= 46 && idade <= 60){
        f4++
       }
      else if (idade >= 60){
        f5++
      }
      
      conta++
    }
    alert(`F1: ${f1} F2: ${f2} F3: ${f3} F4: ${f4} F5: ${f5}`)
    alert(`%F1 ${f1/8*100} %F5 ${f5/8*100}`)
  }
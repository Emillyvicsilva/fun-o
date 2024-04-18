function apresentacao(nome){
    return `meu nome é ${nome}`
}
console.log(apresentacao("emilly"))

 const apresentarArrow = nome => `meu nome é ${nome}`
 console.log(apresentarArrow("emilly"))
 
 const soma = function(valor1, valor2){
    return valor1 + valor2 
 }
console.log(soma(10,5))

 const soma2 = (valor3, valor4) => valor3 + valor4
 console.log(soma2(10,19))
 

 const somaNumerosPequenos = (numero1, numero2) =>{
  if (numero1 > 10 || numero2 > 10){
     return("Somente números de 1 a 10");
  }else{
     return numero1 + numero2; 
  }
}
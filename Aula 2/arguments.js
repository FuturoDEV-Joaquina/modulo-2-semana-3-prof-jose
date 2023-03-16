function concatenador(separador){
  var resultado = '';

  for(var i=1; i<arguments.length; i++){
    resultado += arguments[i] + separador;
  }

  return resultado;
}

console.log(concatenador('.', 'laranja', 'banana'))

//Ex 3

function criaArray(){
  var resultado = [];

  for(var i=0; i<arguments.length; i++){
    resultado.push(arguments[i]);
  }

  return resultado;
  
}

console.log(criaArray(1, 2, 3, 4, 5));
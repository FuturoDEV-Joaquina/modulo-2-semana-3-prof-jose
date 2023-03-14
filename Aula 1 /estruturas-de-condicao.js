//IF
const date = new Date();
const time = date.getHours();

if(time < 12){
  console.log("Bom dia!");
}else if(time >= 12 && time < 19){
  console.log("Boa tarde!");
}else {
  console.log("Boa noite!");
}

//Ex 1

const valor = 51;

if(valor % 2 == 0){
  console.log('PAR');
}else{
  console.log('ÍMPAR');
}

//Operador ternário
const a = 10;
const b = 11;

const resultado = (a > b) ? "a é maior que b" : "b é maior que a";
console.log(resultado);

//Ex 2

const valor2 = 10;

const resultadoEx2 = (valor2 % 2 == 0) ? 'PAR' : 'ÍMPAR';
console.log(resultadoEx2);

// Switch
const date2 = new Date();
const day = date2.getDay();

switch(day){
  case 1: console.log('Boa semana!'); break;
  case 5: console.log('Sextou'); break;
  default: console.log('Outro dia');
}

const valorSwitch = 11;

switch(true){
  case (valorSwitch % 2 == 0) : console.log('PAR'); break;
  default: console.log('ÍMPAR');
}

//Ex 3

const media = 3;

switch(true){
  case (media < 4) : console.log('Reprovado'); break;
  case (media >= 4 && media < 7) : console.log('Recuperação'); break;
  default: console.log('Aprovado');
}

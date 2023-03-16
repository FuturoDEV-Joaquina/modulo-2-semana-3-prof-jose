function geraTitulo(titulo){
  var h1 = document.createElement('h1');
  h1.innerHTML = titulo;
  document.body.appendChild(h1);
}
geraTitulo('Hello World');

function soma(a, b){
  var valor = a + b;
  return valor;
}
document.write(soma(3, 7));

const global = 'Sou global';
function testaEscopo(){
  document.write(global);
}
testaEscopo();

// Ex 1
function media(valor1, valor2){
  return (valor1 + valor2) / 2;
}
console.log(media(10, 5));






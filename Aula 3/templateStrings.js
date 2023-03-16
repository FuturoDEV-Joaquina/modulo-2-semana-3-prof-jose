const dia = 'Quarta';
const frase = `Boa ${dia}!`;
console.log(frase);

//Ex 1

function nomeSobrenome(){
  const nome = 'José Pedro';
  const sobrenome = 'Schardosim Simão';

  const frase = `Sou ${nome} ${sobrenome} e estou no FuturoDEV!!!`;

  const p = document.createElement('p');
  p.innerHTML = frase; <body>INNER HTML</body>
  document.body.appendChild(p);
}

nomeSobrenome();
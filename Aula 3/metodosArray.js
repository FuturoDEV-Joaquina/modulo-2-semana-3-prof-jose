const personalidades = ['Xuxa', 'Bozo', 'Hebe', 'Faustão'];
const alunos = [
  {aluno: 'João', idade: '18'},
  {aluno: 'Maria', idade: '14'},
  {aluno: 'José', idade: '16'},
  {aluno: '', idade: '17'}
]
const numeros = [1, 2, 3, 4, 5];


for(var i=0; i<personalidades.length; i++){
  console.log(`${i+1}: ${personalidades[i]}`);
}

//forEach
personalidades.forEach(function(personalidade, index){
  console.log(`${index+1}: ${personalidade}`);
})

//Ex

numeros.forEach(function(numero){
  console.log(numero*2);
})

//map
const personalidadesMaiusculas = personalidades.map(function(personalidade){
  return personalidade.toUpperCase();
})

console.log(personalidadesMaiusculas);

//Ex
const booleanArray = [true, true, true, false, false];

const contrario = booleanArray.map(function(item){
  //return (item) ? false : true;
  return !item;
})

console.log(contrario);

//filter
const alunosMaiores = alunos.filter(function(aluno){
  return aluno.idade >= 18;
})

console.log(alunosMaiores);

//Ex
const pares = numeros.filter(function(numero){
  return numero % 2 == 0;
})
console.log(pares);

//find
const joao = alunos.find(function(aluno){
  return aluno.aluno == 'João';
})
console.log(joao);

//Ex
const aluno18 = alunos.find(function(aluno){
  return aluno.idade == 18;
})
console.log(aluno18);

//every
const todosMaioresDeIdade = alunos.every(function(aluno){
  return aluno.idade >= 18;
});
console.log(todosMaioresDeIdade);

//Ex
const todosPreenchidos = alunos.every(function(aluno){
  return aluno.aluno && aluno.idade;
})
console.log(todosPreenchidos);

//some
const algumMaiorDeIdade = alunos.some(function(aluno){
  return aluno.idade >= 18;
});
console.log(algumMaiorDeIdade);

//for of

for(var numero of numeros){
  console.log(numero);
}

//Ex
for(let aluno of alunos){
  console.log(`Nome: ${aluno.aluno} Idade: ${aluno.idade}`);
}
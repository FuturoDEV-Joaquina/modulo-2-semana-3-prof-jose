var criaPet = function (nomePet){
  var nome = nomePet;
  var especie = '';
  var sexo = '';
  var castrado = '';
  
  return {
    setNome: function (novoNome){
      nome = novoNome;
    },
    setEspecie: function (novaEspecie){
      especie = novaEspecie;
    },
    setSexo: function (novoSexo){
      sexo = novoSexo;
    },
    setCastrado: function (novoCastrado){
      castrado = novoCastrado;
    },
    getNome: function(){
      return nome;
    },
    getEspecie: function(){
      return especie;
    },
    getSexo: function(){
      return sexo;
    },
    getCastrado: function(){
      return (castrado) ? 'Sim' : 'Não';
    }
  }
}
var retorno = '';//window.prompt('Insira o nome do pet:');
var pet1 = criaPet(retorno);
console.log(pet1.getNome());
pet1.setNome('Louro José');
console.log(pet1.getNome());
pet1.setEspecie('papagaio')
console.log(pet1.getEspecie());
console.log(retorno);

//Ex 2
var mathModule = function(){
  const pi = 3.1415;
  return {
    circleArea: function(raio){
      return pi * (raio * raio);
    }
  }
}
var calculadora = mathModule();
console.log(calculadora.circleArea(10))


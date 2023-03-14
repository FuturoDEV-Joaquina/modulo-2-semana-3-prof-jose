for(var i = 1; i <= 10; i++){
  //console.log(i);
}

// Ex For
for(var i = 1; i <= 10; i++){
  //console.log('5 x ' + i + ': ' + i*5);
}

//While
var contador = 1;

while(contador <= 10){
  //console.log(contador);
  contador++;
}

//Ex While
var cont = 1;
while(cont <= 10){
  //console.log('5 x ' + cont + ': ' + cont*5);
  cont++;
}

//Do While
var cont2 = 0;
do{
  //console.log(cont2);
  cont2 ++;
}while(cont2 <= 10)

//Ex Do While

var cont3 = 1;
do{
  //console.log(cont3*5);
  cont3 ++;
}while(cont3 <= 10)

//Break

var array = [1, 2, 3, 4, 5];

for(var i=0; i < array.length; i++){
  if(array[i] > 3){
    break;
  }
  //console.log(array[i]);
}

//Continue

var array2 = [1, 2, 3, 4, 5];

for(var i=0; i < array2.length; i++){
  if(array2[i] == 2){
    continue;
  }
  console.log(array2[i]);
}
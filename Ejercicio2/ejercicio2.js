'use strict'
//A a partir del array ages=[15, 50, 45] agregue su edad. 
//Usando un for con un if, muestre en pantalla  solo las edades mayores a 25

let numeros=[15,45,50]

numeros.unshift(18)

for(let i = 0; i < numeros.length; i++){
    if(numeros >= 25){
     alert(numeros[i]);
    }
   
   
}


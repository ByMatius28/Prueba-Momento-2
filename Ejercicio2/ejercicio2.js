'use strict'
//A a partir del array ages=[15, 50, 45] agregue su edad. 
//Usando un for con un if, muestre en pantalla  solo las edades mayores a 25

let numeros=[15,50,45]

numeros.unshift(18)

for(let i = 0; i < numeros.length; i++){
    alert( `${numeros[i]}`);
    if(numeros >= 25){
        alert(numeros)
    }
    else{
        alert(numeros)
    }
}


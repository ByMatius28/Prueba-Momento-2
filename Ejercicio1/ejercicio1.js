'use strict'
//Crear una función constructora para crear un Estudiante con las siguientes propiedades:

/*nombre, 
correo
promedio.
Una Funcion validarPromedio Que devuelva "Aprobado" si el promedio es mayor a 70 y "Reprobado" si es menor.
Una Función obtenerUsuario que devuelva únicamente el nombre de usuario del email
 Crear un objeto a partir de la función anterior y comprobar funciones */

 function Estudiante(nombre, correo, promedio) { 
    this.nombre = nombre; 
    this.correo = correo; 
    this.promedio = promedio;

    this.validarPromedio = function() 
    { if (this.promedio > 70) 

        { return "Aprobado"; } 

        else { return "Reprobado"; } 
    };
    
    this.obtenerUsuario = function() 
    { return this.correo.split("@")[0]; }; 
}
    
    var estudiante1 = new Estudiante("Juan", "juan@gamil.com", 80);
     let val = estudiante1.validarPromedio();
     let user = estudiante1.obtenerUsuario();
    
    console.log(estudiante1.validarPromedio()); 
     console.log(estudiante1.obtenerUsuario()); 

     alert(val)
     alert(user)
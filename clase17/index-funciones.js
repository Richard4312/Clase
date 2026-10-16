// console.log('Hola JS')
// numero cadena boleano


// variables y constantes

// let nombre = 'Andres'

// nombre = 
/*

const nombre = 'Andres'
*/
// Operaciones

// + - * / %

/* 
const numero1 = 15
const sume = numero1 + 20  // --> expresion

*/
// true / false
/*

const edad = 18
const mayoriaDeEdad = 18
let esMayordeEdad = edad >= mayoriaDeEdad
*/
// > < >= <= == === != !==

/*
if(edad>mayoriaDeEdad){
    console.log('Es mayor de edad')
}else if(edad === '18'){
    console.log('Tiene 18 años')

}else{
    console.log('Es menor de edad')
}

*/


// Arreglos
//no primitivos(se almacenan como referencia)
// primitivos (se almacenan como literales)


/*
const numeros = [
    1,
    [21,20],
    3,
    4,
    5,
    true,
    'Hola']

    console.log(numeros[1][2][0])


    for(let i = 0; i<= numeros.length;i++){
        console.log(i)
    }

*/

// Objetos (siempre con llaves)
/*
const persona = {
nombre: 'Nacho',
edad: 24,
estudia: true,
redes:[
    'Instagram',
    'Twitter'
],
otros: {
    mascotas: 1
}

}

console.log(persona.nombre)



console.log(persona.otros.mascotas)
*/



//        16/10      ---   Funciones



//Declaracion

function suma(a, b){
return a + b
}

 



const resultado= suma(10,20) 

console.log(resultado)

//Flecha o Arrow


const resta = (a,b)=> {
 return a-b
}

const resultado2 = resta(30,15)

console.log(resultado2)




const modulo = function(a,b) {
    return a%b
}

//al usar el nombre definicion o constante se muestra solo el codigo
console.log(modulo)



//se considera que hay un return implicito al no usar corchetes con la flecha
const multiplicar = (a,b) => a * b
    
const resultado3 = multiplicar(2,6)

console.log(resultado3)


// sin parametros
const saludo = ()=> 'Hola'


//Callback, es retorno de llamada que se puede hacer en js con funciones
//Es cuando se pasa un argumento de una funcion a otra funcion



const b = (cb)=> {
    console.log('se ejecuta b')
    cb()
}

//funcion a pasar como argumento de b
const cb= () =>{
    console.log('se ejecuto el callback')
}

//ejecuta b y cb con el argumento que tengan
b(cb)
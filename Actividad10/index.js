

// Ejercicio 1A
const mayoriaDeEdad= 18

edad=10
if(edad>mayoriaDeEdad){
    console.log('Es mayor de edad')
}else if(edad === '18'){
    console.log('Tiene 18 años')

}else{
    console.log('Es menor de edad')
}

//Ejercicio 1B
numero=5
if(numero % 2 == 0 ){
      console.log('Es par')
}
else {
    console.log('Es impar')
}

//Ejercicio 1C
nota=6
minimo=4
alto=7

if(nota <minimo  ){
    console.log('Reprobado')
}
else if(nota>minimo && nota<alto){
    console.log('Aprobado')
}
else {
    console.log('Excelente')
}

//Ejercicio 2A

const numeros= [1,2,3,4,5,6,7,8,9,10]

for( let i=1 ;i <= numeros.length; i++){
    console.log(i)
}

//Ejercicio 2B

for( let i=10 ; i>=1; i--)
   { console.log(i)}


//Ejercicio 2C

for( let i=0 ; i <= 20; i++){
    if(i % 2 == 0 ){
      console.log('Es par')
}
else {
    console.log('Es impar')
}
}


//Ejercicio 2D


    for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(`El número ${i} es par`);
  } else {
    console.log(`El número ${i} es impar`);
  }
}



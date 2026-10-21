//1A
const saludar = 'Hola,bienvenido'

   console.log(saludar)


//1B

function saludarPersona(nombre) {
  console.log(`¡Hola ${nombre}, bienvenido!`)
}

saludarPersona('Ignacio')

//1C

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true
    } else {
        return false
    }
}

const resultadoEdadFuncion = esMayorDeEdad(20)
console.log(resultadoEdadFuncion)


//2A

const resultadoEdad = (edad) => {
    if (edad >= 18) {
        return true
    } else {
        return false
    }
}

console.log(resultadoEdad(20))

//2B

const numeroMayor = (numero1, numero2) => {

    if (numero1> numero2) {
        console.log('El numero mayor es ${numero1}')
    } 
    else if (numero2> numero1){
        console.log('El numero mayor es ${numero2}')

    }
}

//3A

const operacion = (numero1, numero2, callback) => {
    const resultado = callback(numero1, numero2)
    return resultado
}



const suma = (numero1,numero2) => {
    const resultado = numero1 + numero2
    console.log(`El resultado de la suma es ${resultado}`)
    return resultado
    
}

const resta = (numero1,numero2) => {
    const resultado = numero1 - numero2
    console.log(`El resultado de la resta es ${resultado}`)
    return resultado
}

operacion(10, 5, suma)
operacion(10, 5, resta)


//3B

if( isnumeric(numero1) && isnumeric(numero2)){
    const resultado = callback(numero1, numero2)
    return resultado
}
const suma2 = (numero1,numero2) => {
    const resultado = numero1 + numero2
    console.log(`El resultado de la suma es ${resultado}`)
    return resultado
    
}

const resta2 = (numero1,numero2) => {
    const resultado = numero1 - numero2
    console.log(`El resultado de la resta es ${resultado}`)
    return resultado
}

operacion(10, 5, suma2)
operacion(10, 5, resta2)


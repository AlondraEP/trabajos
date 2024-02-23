let nombreVariable = 'valor variable'
var nombreVariable2= 10

let object = {
    propiedad:10,
    propiedad2: 'valor propiedad 2',
    propiedadObjeto: {
         propiedad4: ['valor','valor2','valor3'],
         propiedad5: 'valor propiedad 5',
    }
}

// imprimir valores
// console.log(object)
// console.log(object.propiedad)
// console.log(object.propiedadObjeto.propiedad5)
// declarar funciones
function nombrefuncion(){
    console.log('Ejecutando funcion "nombre funcion"')
}

function nombreConParametros(nombre,apellido,edad){
    let text = "Nombre: "+nombre+ ",apellido: "+apellido + ", edad: "+edad
    console.log(text)
 }


nombrefuncion();
nombreconParametros('alo','elguera',26);

/**
 * 
 * @param Number number
 * @returns 
 */
function square(){
    return number* number;
}
/**
 * 
 * Retorna el cubo del numero dado
 * 
 * @param Number number
 * @returns 
 */

function cube(){ 
    return number * number * number;
}

let array = 2;
let squareValue = square(8);
console.log(squareValue);
console.log(cube(8));



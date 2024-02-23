//Comentario

/**
 * 
 * Multiples lineas 
 * 
 */


var nombre = "Alondra";
var string = 'string 2'
var edad = 23;

let apellidos ="Elguera";
let estatura = 1.50;

const ESCUELA = 'TECNM ROQUE'

console.log ("Nombre: " + nombre);
console.log("Edad: "+ edad);
console.log('String 2 '+ string );

console.log('Apellidos' + apellidos);
console.log('Estatura'+ estatura);
console.log(ESCUELA);

let string='Cadenas de texto'
let booleans= true;
let bolleans2= false;
let number = 10;
let number2= 20.5;
let bigInt = BigInt(10);
let symbols= Symbol('Simbolo 1');
let arrays = [1,20,30,40];
let arrays2 = [1,"otros datos", false];
let object = {};

console.log(string,booleans,bolleans2,number,number2,bigInt,symbols,arrays,arrays2,object);

//propiedades 

let student = {
    name: 'Alo',
    lastName: 'Elguera',
    age: 23,
    topics: ['Programacion Web', 'Bases de Datos',],
        
    assesments:{
        webDevelopmern: 10,
        math: 9,
    },
};

//delete student.name;

let nombre= student.name;
let edad = student.age;

let obj1 = {
    propObj1: 'value1',
}

let obj2 ={
    propObj2:'value2'
}

let obj3 ={
    propObj3:'value3',
    ...obj1,
    ...obj2,
}

console.table(obj3)
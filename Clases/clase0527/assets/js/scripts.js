console.log("wena wena")

// let a = "hola"
// const c = 3000000

// var numero = 333
// function funcion(){
//     let a = 1;
//     console.log("a",a)
//     const c = 200000
//     console.log("c", c)
//     var numero = 33;
//     console.log(numero)
// }
// funcion();

// console.log("numero", numero)
// console.log("Const", c)
// console.log("a por fuera", a)

// Arreglos se definen con corchetes
const miArreglo = []
miArreglo[0] = "perro"
console.log(miArreglo)
miArreglo[1] = "gato"
console.log(miArreglo)
miArreglo[2] = 2
console.log(miArreglo)

// objetos se definen con llaves
const miObjeto = {}

console.log("Objeto:", miObjeto)

miObjeto.saludo = "Hola"
miObjeto.saludar = function (){
    console.log(this.saludo)
}

console.log("Objeto:", miObjeto)
miObjeto.saludar()
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
miObjeto.despedida = "Adios"
miObjeto.saludar = function (){
    console.log(this.saludo)
}
miObjeto.despedir = () => {
    console.log(miObjeto.despedida)
}
miObjeto.lista = [1,2,3,4,5]

console.log("Objeto:", miObjeto)
miObjeto.saludar()
miObjeto.despedir()
console.log("ElementoArreglo", miObjeto.lista[2])
console.log("UltimoElementoArreglo", miObjeto.lista[miObjeto.lista.length-1])

miObjeto.lista.splice(0,0,0)
console.log("Arreglo", miObjeto.lista)

const arr = [1,2,3]
arr[4] = 5
console.log("ARr", arr)

//// input con prompt
// const entrada = prompt("Ingrese nombre")
// console.log("entrada", entrada)

/// tipos y conversiones de número
let doce = "12"
console.log("tipo numero", typeof doce)
console.log("tipo numero", typeof +doce)
console.log("tipo numero", typeof Number(doce))
console.log("tipo numero", typeof parseInt(doce))

// tarea
let sumaArreglo = (notas) => {
    let s = 0
    for(let i=0; i<notas.length; i++)
        s = s + notas[i]
    return s
}

let promedio = (sumador, notas) => {
    return sumador(notas)/notas.length
}

nots = [6,8,9,2,5,10]
console.log(suma(nots))
console.log(promedio(suma,nots))

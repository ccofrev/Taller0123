// console.log("wena choro")
// for(let i=0; i<10; i++)
//     console.log(`wena ${i+1}`)

// function suma(a,b){
//     return a+b;
// }
// //console.log(suma(5,4))

// //console.log((10/3).toFixed(4))
// n=0
// for(let i=0; i<10; i++){
//     n+=i;
//     console.log(n)
// }

// let a = '45'
// console.log( typeof a === '')

// var salida = console.log("hola")

// console.log(salida)

// a = 6
// a = true ? 1: 2;
// console.log(a)


// document.getElementById("texto").innerHTML = "Que pasa";


// variables: ojo con var porque es 'peligrosa' porque es global y puede redefinirse. 
// Eventualmente podría volver a definirse pero estaría cambiando el valor original. 
// Discrepo. Todavía no cacho bien el problema con var

// var test1 = 1
// let test2 = 6
// const test3 = 3


// function t(){
//     test2 = 2
//     console.log(test1)
// }

// t()
// console.log(test2)

// i=0
// const jsonArr = ["pera", "manzana", "platano", "naranja", "frutilla"]
// jsonArr.map((fruta)=>{
//     console.log(fruta)
//     console.log(fruta.toUpperCase())
// })


let nombres = ["Hugo", "Mateo", "Martín", "Lucas", "Leo", "Daniel", "Alejandro", "Manuel", "Pablo", "Álvaro", "Adrián", "Enzo", "Mario", "Diego", "David", "Oliver", "Marcos", "Thiago", "Marco", "Álex", "Javier", "Izan", "Bruno", "Miguel", "Antonio", "Gonzalo", "Liam", "Gael", "Marc", "Carlos", "Juan", "Ángel", "Dylan", "Nicolás", "José", "Sergio", "Gabriel", "Luca", "Jorge", "Darío", "Íker", "Samuel", "Eric", "Adam", "Héctor", "Francisco", "Rodrigo", "Jesús", "Erik", "Amir", "Jaime", "Ian", "Rubén", "Aarón", "Iván", "Pau", "Víctor", "Guillermo", "Luis", "Mohamed", "Pedro", "Julen", "Unai", "Rafael", "Santiago", "Saúl", "Alberto", "Noah", "Aitor", "Joel", "Nil", "Jan", "Pol", "Raúl", "Matías", "Martí", "Fernando", "Andrés", "Rayan", "Alonso", "Ismael", "Asier", "Biel", "Ander", "Aleix", "Axel", "Alan", "Ignacio", "Fabio", "Neizan", "Jon", "Teo", "Isaac", "Arnau", "Luka", "Max", "Imran", "Youssef", "Anas", "Elías"]
let salida = ''
const col = Math.floor(255/nombres.length)

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

nombres.map((nombre)=>{
    let color = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`
    // console.log(color)
    salida += `<p style="color:${color}"> ${nombre} </p>`
})

let texto = document.getElementById("texto")
texto.innerHTML = salida

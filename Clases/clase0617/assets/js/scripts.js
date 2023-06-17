// console.log("wena choro")
// arrTest = [1,2,3,4,5,666,3]
// arrTest.forEach(element => {
//     console.log(element*10)
// });


// arrx10 = arrTest.map((el,i,arr)=>{
//     return el*10
// })

//console.log(arrTest.filter(el=>el<0))
//console.log(arrTest.find(el=>el==0))
//console.log(arrTest.every(el=>el>0))

const pokemones = async () => {
    try{
        const URL = "https://pokeapi.co/api/v2/pokemon/mewtwo"
        const dataRow = await fetch(URL)
        const data = await dataRow.json()
        console.log(data)
    }catch(error){
        console.log("hubo error", error)
    }finally{
        console.log("esto siempre se ejecuta")
    }
}

pokemones()
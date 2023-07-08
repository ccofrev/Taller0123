### Clase 08 Julio

REACT
por qué usar un framework?
homologar: maneras de trabajar
unificar: no "reinventar la rueda"

comando para crear proyecto react con otra cosa
npm create vite@latest  


**hoy se introduce proyecto final


export: 

en los jsx se exportan las funciones, con default

function App(){}
export default App

o se puede exportar así

function app() {}
export {App}            <-- esto se usa para la exportación múltiple
luego se debe importar de la misma forma {App}

en los return de los componentes se debe iniciar y cerrar con <>
("fragment" ?)
entonces se inicia y se termina con eso 
return (<> </>) *a veces no es estrictamente necesario, pero se usa como buena práctica.


# COMPILACION SUBIDA

gh sirve para subir un directorio con un proyecto a git

en scripts del package json, hay ccomandos, entre estos "build" este sirve para compilar, previo a la subida.
se usa con 
npm run <nombre-script>

la salida queda en "dist"

presenta "Vercel" que tiene la gracia de integrarse con github.
es un hosting simplón. Se puede asociar al repo :D







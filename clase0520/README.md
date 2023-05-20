Clase 20/05


repaso SASS (wena porque me fui temprano la clase anterior)

se instala sass con 
npm install -g sass

sass compila archivos tipo sass (.sass o .scss)
y genera css

entonces en la html uno indica un archivo css (como siempre)



el comando para generar ese css es:

sass rutaorigen.scss:rutadestino.css

Ejemplo:
sass .\assets\SCSS\main.scss:.\assets\css\styles.css


cual es la gracia de sass
-permite modularizar, ahorra la importación de múltiples archivos de estilo 
-agrega características de un lenguaje de programación


la manera de usar varios archivos es iportando en la principal, los "parciales" en otras ubicaciones (hay arquitecturas bien definidas incluso). 

para la clase se usó una "arquitectura" con una carpeta base y una de variables.

en el archivo main solo se importan estos otros dos archivos

variables/_variables.scss
$principal_color: blue;

base/_base.scss
h1{color: $principal_color;}

ojo que los parciales se nombran con _ al principio. (pero se importan sin eso y sin extensión.)

main.scss
@import 'variables/variables'
@import 'base/base'

acá el main sólo está importando los parciales.

ojo con el orden cuando se usen variables. Como se está usando la variable $principal_color en base, en el main primero debe importarse el archivo de variables y luego el de base, si no, tira un error de variable que no existe.




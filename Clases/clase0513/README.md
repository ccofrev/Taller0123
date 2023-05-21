### CLASE

CSS Grid


la idea es hacer un layout de este tipo

______________________________
|____________________________|
|____________________________|
|            |               |
|            |               |
|            |               |
|____________|_______________|
|____________________________|


nomenclatura

bloque >> layout
elementos del bloque >> bloque__elemento

truco:
instalar plugin BEM Helper
luego se selecciona el bloque, ctrl+p, generar estilo desde seleccion (o algo así) y se tira al portapapeles y se pega en la hoja de estilos y todo ok


se pueden setear los anchos de columna con 
grid-template-columns

se puede usar ancho fijo en pixeles   xxxx px
y está este tipo fr que denota fracción.   xxxfr xxfr

si se pone un valor al lado de otro, denota dos columnas
ejemplo 2 columnas de 100px
grid-template-columns: 100px 100px;


lo mismo aplica para filas
grid-template-rows

repeat puede servir para definir lo mismo muchas veces, ejemplo:
repeat(4, 1fr);
es equivalente a escribir 1fr 1fr 1fr 1fr;


en el hijo, se puede definir cuanto espacio de las colunmas usa
se usa grid-column-start: columna_inicio; grid-column-end: columna_fin; (resumido con grid-column columna_inicio/ columna_fin)
 grid-column: 1 / 3; 
 importante que el fin es no-inclusivo entonces si quiero que ocupe columna 1 y 2 hay que setear 3 en el fin.

 span es lo mismo, pero hace el valor end inclusivo. ?
 ejemplo: 
 grid-column: 1 / span 2; // hace lo mismo que el anterior

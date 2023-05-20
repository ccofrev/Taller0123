Clase 06/05

Maquetado
tipos de etiqueta:
    -etiquetas de bloque: usan el ancho total, produce salto de linea. (ej. contenedores: header, p, div, h, nav)
    -etiquetas de linea: se adaptan al ancho del contenido (ej. span, img, a, list)

modelo de cajas
considerar esquema que aparece al final de la parte de los estilos en el inspector de elementos.

se muestra un recuadro con múltiples recuadros alrededor.

se parte del elemento más interno que es lo más chico dentro del elemento y luego va creciendo  desde: contenido-padding-border-margin

contenido: ej texto
padding: "borde interno"
border: El borde de cada elemento también tiene propiedades como color, ancho, tipo, etc.
margin: el "margen exterior". 

se pueden cambiar tipos de etiqueta de un bloque?
sí, con "display". Ej. nav es una etiqueta de bloque por defecto, tiene display: block. 

hay estilos por defecto, el "user agent stylesheet": el navegador setea valores por defecto para los estilos.
Inicialmente los estilos eran muy distintos dependiendo de los desarrolladores. Pero se han ido estandarizando, según normas de instituciones.

display: cambia el tipo de etiqueta. 

antes del modelo de cajas, se hacía el "layout" con "position". 
El layout no se hace con position, se hace con grid u otras.
El position se usa para ubicar elementos particulares.

**estudiar html "semántico".

si sep pone .nombre clase en vsc te ofrece un div.

o nombre etiqueta.clase y también ofrece autocompletar.


*** liveserver es un complomento para autorefrescar el html
*** prettier es un beautify

LAYOUT
css tricks buen sitio para CSS 
acá se revisa flex box.

las etiquetas inline no permiten modificar height y width, pero si se necesita, se puede usar inline-block
y eso libera propiedades de block.
ojo que los % son relativos al padre.

si se da un ancho mayor de lo que tiene de espacio, se baja.

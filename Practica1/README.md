# Practicas_SA_201404134

Andrea María López Flores

Token Go Rest. df5c9e0d3d3acffba80f810135ffc66dde0dd924ef66f052405f04f5eb099239

Lenguaje Node JS

## npm start

Se ejecutarán todas las instrucciones del archivo index.js. 
En la consola se muestran los resultados de cada accion.
Dentro del código se encuentan separados cada uno de los métodos.
El método get se muestra en localhost:8089/listado

En el pdf dentro de la carpeta se muestran capturas de los resultados y el fragmento de código.

Ya que todo está en el mismo archivo, se deben comentar las siguientes líneas (en put, patch y delete):

        req2.on('error', error => {
        console.error(error)
        })

        req2.write(data2) 

Para que se ejecute solamente uno de ellos y se pueda ver bien que si funciona correctamente.
    
    Si se quiere probar el PUT comentar esas líneas de patch y delete, así sucesivamente.
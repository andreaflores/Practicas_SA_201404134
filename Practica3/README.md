# Práctica 6
Las pruebas unitarias se realizaron con mocha y chai
Se realizaron sobre el servicio del Cliente (Crear pedido y enviarlo al restaurante, ver estado del pedido en el restaurante y ver estado del envío).

Para ejecutar las pruebas se debe estar en la carpeta de Cliente y en la terminar escribir 

    npm run test

Automáticamente se ejecutarán las pruebas y el resultado se muestra en consola.
En la documentación se muestra a detalle el funcionamiento.

## Practica 4
El serivicio ESB se encuentra en la carpeta con el mismo nombre.
Dentro se encuentra un archivo index.js donde se realizan todas las llamadas a los otros serivicios.

	- localhost:8089

## Practica 3 (servicios anteriores)
Cada servicio está en una carpeta diferente
    - Cliente
    - Restaurante
    - Repartidor

Dentro de cada uno de ellos está la carpta de las rutas y los controladores. Y una extra para la conecxión con MySQL.

Para ejecutar cada servicio solo es necesario iniciarlo con nodemon.
En el video se muestra el funcionamiento completo.
En la documentación se muestra a detalle el desarrollo.

    - Cliente
    	Localhost:8090/cliente
    - Restaurante
    	Localhost:8092/restaurante
    - Repartidor
       	Localhost:8091/repartidor

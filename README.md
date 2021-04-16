# Practicas_SA_201404134
##Practica 9

En el archivo de documentación se explica lo que se hizo en la práctica.
En el docker compose se muestra la creación del volumen.

*Volúmen MySQL*

###FORMA MANUAL DE REALIZAR EL VOLUMEN

Bajar la imagen de MySQL

	docker pull mysql/mysql-server:latest

Crear volumen

	docker create -v /var/lib/mysql --name mysqldata mysql/mysql-server:latest

Iniciar contenedor MySQL con volumen

	docker run -p 3306:3306 -d -e MYSQL_ROOT_PASSWORD=secret --volumes-from mysqldata --name=mysqldb mysql/mysql-server:latest

Entrar en el contenedor
	
	docker exec -it mysql bash

Borrar el contenedor
	
	docker rm -f mysqldb

Crear de nuevo el contenedor

	docker run -p 3306:3306 -d -e MYSQL_ROOT_PASSWORD=secret --volumes-from mysqldata --name=mysqldb1 mysql/mysql-server:latest
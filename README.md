# Practicas_SA_201404134
## Practica 8

Dentro de la carpeta cliente se encuentra el Docker file y dentro de la carpeta principal el Docker Compose.

*COMANDOS UTILIZADOS*
	
Creación de imagen practica8

	sudo docker login 
	sudo docker build -t practica8 .
	sudo docker tag practica8 andreaflores/practica8
	sudo docker push andreaflores/practica8


Imagen MySQL
	
	docker run -d -p 3306:3306 --name=mysql-db -e MYSQL_ROOT_PASSWORD= 	secret mysql 
	docker exec -it mysql-db mysql -p


IP pública de la máquina de los ocntenedores
	
	192.168.0.101


Imágenes y contenedores
	
	docker images
	docker ps

Video de demostración

https://youtu.be/H9NobCyJXHw


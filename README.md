# pruebatecnica-web
Prueba técnica Web -  Consumer Satisfaction v .1.1 

### Pre-requisitos para ejecutar el App

_Tener instalado Docker o Node.js_
_Esta aplicación puede ser ejecutada de manera local o puede ser dockerizada_

### Primero, se deben instalar los paquetes mediante el siguiente comando###
```
$  yarn install 
```

### Ejecutar la web de manera local ###

```
$  npm start
```
### Pasos para dockerizar la aplicación ###
_1) Generar el build_

```
$  yarn run build
```
_2) Generar la imagen de docker

```
$  docker build -t edumoreno/pruebatecnica-web .
```
_3) Instalar y ejecutar la imagen de docker_

```
$  docker run -it -p 3005:80 edumoreno/pruebatecnica-web
```

### URL Dockerizada ###

[http://localhost:3005/](http://localhost:3005/)








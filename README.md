# Sistema de inventario y ventas en desarrollo

## Basado en Angular v16.16.0 NodeJS v18.16.0

### El api se encuentra desarrollado en Node, consume servicios de MySQL v8.0 mientras que la interface para los usuarios finales en Angular v16.16.0

Para instalar se requiere el agregado de 2 archivos en el API/rest para las configuraciones particulares de cada usuario como lo son el usuario de la base de datos y la base de datos en si misma.

## Archivos que se deben crear para el funcionamiento de la API/rest

Archivo /inventario2023/apinew/src/database.ts

```
import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection().then((connection) => {
  pool.releaseConnection(connection);
  console.log('MySQL Conectado exitosamente!'); // Este mensje sale por la ventanita de coandos igual que el servidor conectado.
});

export default pool;

```

Archivo /inventario2023/apinew/src/keys.ts

```
export default {

    database: {
        host: 'localhost', // O el host donde se encuentra la database mysql
        user: 'root',   // El usuario de la base de datos
        password: 'passwrong', // El password
        database: 'ecom'  // La base de datos
    }

}
```

Estos archivos corresponden a la configuracion de la conexion con la base de datos mysql.

## Creación del entorno para desarrollo

### Instalación de los componentes:

#### Pre-Requisitos:

Se debe contar con una instalación de Node y de Angular para esto verificar la documentación de cada uno en la página correspondiente. También tiene que contarse con una versión de Mysql ya sea local o por intermedio de un servidor a la cual se le deben ingresar las tablas por medio de una restauracion de las tablas que se encuentran en la carpeta /apinew/dataMysqlBackup

#### Instalación API:

En linea de comandos ingresar a la carpeta /inventario2023/apinew y ejecutar el comando "npm i" para instalar todas las dependencias necesarias para la ejecución del API.

#### Instalación del Front-End de Angular:

En linea de comandos ingresar a la carpeta /inventario2023/cliente y ejecutar el comando "npm i" para instalar todas las dependendencias necesarias para la ejecucion del Front-End.

## Ejecución de entorno desarrollo:

Dentro de Visual Studio code se deben tener 3 terminales abiertas, en la primera vamos a ejecutar dentro de la carpeta /apinew el comando

`npm run watch`

En otro terminal ejecutar dentro de la carpeta /apinew el comando

`npm run dev`

Estos dos comandos van a iniciar por un lado un traspilador de codigo Typscript a Javascript (watch) lo que quedara en memoria y estará verificando cualquier cambio realizado al código de la aplicación. El comando run dev ejecuta el servidor en si mismo quedando operativo el API normalmente en la dirección localhost:3000 Se puede ver en el archivo de index.ts la definición de las diferentes rutas que puede tener. También desde aqui se pueden agregar mas rutas al servidor.

En el terminal numero 3 que se encuentra abierto vamos a ir a la carpeta /cliente y desde alli ejecutar:

`ng serve -o `

Con este comando se ejecuta el front-end creando un servidor habitualmente en la direccion localhost:4200 yendo a esta direccion se ve el aplicativo de front el cual consumirá la API creada con los pasos anteriores.

## Contacto con el desarrollador

Para consultas, sugerencias por favor contactar a

Mail: marcelo.lavandeira@gmail.com Whatsapp: +54-11-2747-8500

@Hecho en Buenos Aires, Enero de 2023

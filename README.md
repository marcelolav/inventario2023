# Sistema de inventario y ventas en desarrollo

## Basado en Angular v16.16.0 NodeJS v18.16.0

### El api se encuentra desarrollado en Node, consume servicios de MySQL v8.0 mientras que la interface para los usuarios finales en Angular v16.16.0

Para instalar se requiere el agregado de 2 archivos en el API/rest para las configuraciones particulares de cada usuario como lo son el usuario de la base de datos y la base de datos en si misma.

Ejemplo de estructura y nombres de cada archivo necesario:

Archivo /inventario2023/apinew/src/database.ts

```
import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection().then((connection) => {
  pool.releaseConnection(connection);
  console.log('MySQL Conectado exitosamente!');
});

export default pool;

```

Archivo /inventario2023/apinew/src/keys.ts

```
export default {

    database: {
        host: 'localhost',
        user: 'root',
        password: 'Nxt3005F1',
        database: 'ecom'
    }

}
```

Estos archivos corresponden a la configuracion de la conexion con la base de datos mysql.

13-06-2023

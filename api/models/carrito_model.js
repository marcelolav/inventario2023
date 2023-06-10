const conexion = require('../conexion');

module.exports = {


    agregarItem(producto, cantidad, precio) {
        return new Promise((resolve, reject) => {
            conexion.query(`insert into carrito (producto, cantidad, precio) values (?, ?, ?)`,
            [producto, cantidad, precio], (err, resultados) => {
                if (err) reject(err);
                else resolve (resultados.insertId);
            });
        })
    },

    obtenerItems() {
        return new Promise((resolve, reject) => {
            conexion.query(`select id, producto, cantidad, precio from carrito`,
            (err,resultados)=>{
                if(err) reject(err);
                else resolve(resultados);
            })
        })
    },

    elimnarCarrito() {
        return new Promise((resolve, reject) => {
            conexion.query(`delete * from carrito`,
            (err,resultados)=>{
                if(err) reject(err);
                else resolve(resultados);
            })
        })
    },

    obtenerTotal() {
        return new Promise((resolve, reject) => {
            conexion.query(`select SUM(precio) from carrito`,
            (err,resultados) => {
                if(err) reject(err);
                else resolve(resultados);
            })
        })
    },

    cambiarCantidad(id, cantidadNueva, precioNuevo) {
        return new Promise((resolve, reject) => {
            conexion.query(`update carrito set cantidad =?, precio=? where id =?`,
            [cantidadNueva, precioNuevo, id], (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados);
            });
        })
    },

    elimnarItemCarrito(id) {
        return new Promise((resolve, reject) => {
            conexion.query(`delete from carrito where id =?`, [id], 
            (err,resultados)=>{
                if(err) reject(err);
                else resolve(resultados);
            })
        })
    },

    getRegistros() { 
        consulta = conexion.query(`select * from carrito`)
        console.log(consulta.producto);
        return ({consulta});
    }

   

}
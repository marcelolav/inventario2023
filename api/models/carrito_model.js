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
            conexion.query(`select producto, cantidad, precio from carrito`,
            (err,resultados)=>{
                if(err) reject(err);
                else resolve(resultados);
            })
        })
    },

    elimnarCarrito() {
        return new Promise((resolve, reject) => {
            conexion.query(`delete from carrito`,
            (err,resultados)=>{
                if(err) reject(err);
                else resolve(resultados);
            })
        })
    }
   
    


}
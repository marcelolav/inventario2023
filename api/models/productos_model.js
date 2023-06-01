const conexion = require("../conexion")
const fs = require("fs");
const path = require("path");

module.exports = {

    // Agrega un producto a la base de datos mysql
    agregarProducto(codigobarra, nombre, descripcion, precio, preciocompra, existencia, refdolar, rubroid) { 
        return new Promise((resolve, reject) => {
            conexion.query(`insert into productos
            (codigobarra, nombre, descripcion, precio, preciocompra, existencia, preciorefdolar, rubroid) values (?, ?, ?, ?, ?, ?, ?, ?)`,[
                codigobarra, nombre, descripcion, precio, preciocompra, existencia, refdolar, rubroid], (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                });
    })},

    // Eliminar un producto 
    eliminarProducto(id) {
        return new Promise(async (resolve, reject) => {
          conexion.query(`delete from productos where id = ?`, [id], (err) => {
              if (err) reject(err);
              else resolve();
            });
        });
      },

      // Actualizar un producto 
      actualizar(id, codigobarra, nombre, precio, preciocompra, existencia, preciorefdolar, idrubro) {
        return new Promise((resolve, reject) => {
          conexion.query(`update productos
                set codigobara = ?,
                nombre = ?,
                precio = ?,
                preciocompra = ?,
                existencia,
                preciorefdolar = ?,
                idrubro = ?
                where id = ?`,
            [codigobarra, nombre, precio, preciocompra, existencia, preciorefdolar, idrubro, id],
            (err) => {
              if (err) reject(err);
              else resolve();
            });
        });
      },

      // Obtener todos los productos
      obtenerProductos() {
        return new Promise((resolve, reject) => {
          conexion.query(`select id, codigobarra, nombre, descripcion, precio, preciocompra, existencia, preciorefdolar, rubroid from productos`,
            (err, resultados) => {
              if (err) reject(err);
              else resolve(resultados);
            })
        })
      },

      // Obtener producto por codigo de barras
      obtenerPorCodigoBarra(codigobarra) {
        return new Promise((resolve, reject) => {
          conexion.query(`select id, codigobarra, nombre,descripcion, precio, preciocompra, existencia, preciorefdolar, idrubro from productos where codigobarra = ?`,
            [id],
            (err, resultados) => {
              if (err) reject(err);
              else resolve(resultados[0]);
            });
        });
      },

      // Obtener todos los rubtos 
      obtenerRubros() {
        return new Promise((resolve, reject) => {
            conexion.query(`select id, nombre from rubros`, 
            (err, resultados) => {
                if (err) reject(err);
                else resolve(resultados);
                });
      });
    },


}
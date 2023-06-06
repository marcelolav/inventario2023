const conexion = require('../conexion');

module.exports = {


    agregoItemVenta(fecha, producto, cantidad, precio) {
        return new Promise((resolve, reject) => {
          let fecRep = Date.parse(fecha);
          let fechareplace = new Date(fecRep);
          conexion.query(`insert into ventas (fecha, producto, cantidad, precio) values (?, ?, ?, ?)`,
            [fechareplace, producto, cantidad, precio], (err, resultados) => {
                if (err) reject(err);
                else resolve (resultados.insertId);
            });
        })
    },

    obtenerVentas() {
        return new Promise((resolve, reject) => {
            conexion.query(`select * from ventas`,
            (err,resultados)=>{
                if(err) reject(err);
                else resolve(resultados);
            })
        })
    }
   


}
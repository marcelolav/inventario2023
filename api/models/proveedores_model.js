const conexion = require('../conexion');

module.exports = {


    obtenerProveedores() {
        return new Promise((resolve, reject) => {
            conexion.query(`select * from proveedores`,
            (err,resultados)=>{
                if(err) reject(err);
                else resolve(resultados);
            })
        })
    }

}
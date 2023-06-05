const conexion = require('../conexion');


module.exports = {

    obtenerRubros() {
        return new Promise((resolve, reject) => {
            conexion.query(`select * from rubros`,
            (err,resultados)=>{
                if(err) reject(err);
                else resolve(resultados);
            })
        })
    }

    
}
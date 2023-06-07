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
    },

    obtenerRubro(id) {
        return new Promise((resolve, reject) => {
          conexion.query(`select rubroid, nombrerubro from rubros where rubroid = ?`,
            [id],
            (err, resultados) => {
              if (err) reject(err);
              else resolve(resultados[0]);
            });
        });
      },
    modificaRubro(rubroid, nombrerubro) {
      return new Promise((resolve, reject) => {
          console.log('rubrosModel: ', rubroid, nombrerubro);
            conexion.query(`update rubros set nombrerubro = ? where rubroid = ?`,
            [nombrerubro, rubroid],
            (err) => {
              if (err) reject(err);
              else resolve();
            });
        });
      },


    eliminaRubro(id) {
        return new Promise(async (resolve, reject) => {
            conexion.query(`delete from rubros where rubroid = ?`, [id], (err) => {
                  if (err) reject(err);
                  else resolve();
                });
            });
          },

    agregaRubro(nombreRubro) {
        return new Promise((resolve, reject) => {
            conexion.query(`insert into rubros (nombrerubro) values (?)`,
                [nombreRubro], (err, resultados) => {
                    if (err) reject(err);
                    else resolve(resultados.insertId);
                });
    })},

}
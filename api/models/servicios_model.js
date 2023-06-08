const conexion = require("../conexion");

module.exports = {
  agregoServicio(
    cliente,
    telefono,
    fechaingreso,
    articulo,
    falla,
    observaciones,
    fechasalida,
    precioreparacion
  ) {
    return new Promise((resolve, reject) => {
      const fecIng = Date.parse(fechaingreso);
      const fecSal = Date.parse(fechasalida);
      conexion.query(
        `insert into servicios (cliente, telefono, fechaingreso, articulo, falla, observaciones, fechasalida, precioreparacion) values (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          cliente,
          telefono,
          fecIng,
          articulo,
          falla,
          observaciones,
          fecSal,
          precioreparacion,
        ],
        (err, resultados) => {
          if (err) reject(err);
          else resolve(resultados.insertId);
        }
      );
    });
  },

  obtenerServicios() {
    return new Promise((resolve, reject) => {
      conexion.query(`select * from servicios`, (err, resultados) => {
        if (err) reject(err);
        else resolve(resultados);
      });
    });
  },
};

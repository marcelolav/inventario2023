const express = require("express"),
      app = express(),
      PUERTO = 3000,
      productoModel = require("./models/productos_model")

app.use(express.json())

app.get("/productos", async (req,res) => {
    const productos = await productoModel.obtenerProductos();
    res.json(productos);

    console.log(productos);
  });
  

app.listen(PUERTO, err => {
    if (err) {
      console.error("Error escuchando: ", err);
      return;
    }
    console.log(`Escuchando en el puerto :${PUERTO}`);
  });
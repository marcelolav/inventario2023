const express = require("express"),
  app = express(),
  path = require("path"),
  session = require("express-session");
// Modelos para funciones
const proveedores_model = require("./models/proveedores_model");
const productoModel = require("./models/productos_model");
const ventasModel = require("./models/ventas_model");
const carritoModel = require("./models/carrito_model");
const rubrosModel = require("./models/rubros_model");
const serviciosModel = require("./models/servicios_model");

// Manejo de dominios cruzados para evitar errores en navegador
const DOMINIO_PERMITIDO_CORS = "http://localhost:4200",
  DIRECTORIO_FOTOS = path.join(__dirname, "fotos_productos"),
  DIRECTORIO_DIST = path.join(__dirname, "dist"),
  PUERTO = 3000;

app.use(express.json());
app.use(
  session({
    secret: "testclave1",
    saveUninitialized: true,
    resave: true,
  })
);

app.use((req, res, next) => {
  res.set("Access-Control-Allow-Credentials", "true");
  res.set("Access-Control-Allow-Origin", DOMINIO_PERMITIDO_CORS);
  res.set("Access-Control-Allow-Headers", "Content-Type");
  res.set("Access-Control-Allow-Methods", "DELETE");
  next();
});

// ****** Funciones para recuperar tablas ******

// Recupera todos los productos
app.get("/productos", async (req, res) => {
  const productos = await productoModel.obtenerProductos();
  res.json(productos);
});
// Recupera un producto por numero de id
app.get("/producto", async (req, res) => {
  if (!req.query.id) {
    res.end("not found");
    return;
  }
  const producto = await productoModel.obtenerPorId(req.query.id);
  res.json(producto);
});

// Recupera todos los rubros (Se encuentra en el model producto)
app.get("/rubros", async (req, res) => {
  const rubros = await productoModel.obtenerRubros();
  res.json(rubros);
});

// Agrega un producto
app.post("/producto", async (req, res) => {
  const producto = req.body;
  const respuesta = await productoModel.agregarProducto(
    producto.codigobarra,
    producto.nombre,
    producto.descripcion,
    producto.precio,
    producto.preciocompra,
    producto.existencia,
    producto.refdolar,
    producto.rubroid
  );
  res.json(respuesta);
});

// Elimina un producto por numero de id
app.delete("/producto", async (req, res) => {
  if (!req.query.id) {
    res.end("No se encuentra el id del producto.");
    return;
  }
  const idProducto = req.query.id;
  await productoModel.eliminarProducto(idProducto);
  res.json(true);
});

// Recupera todos los proveedores
app.get("/proveedores", async (req, res) => {
  const proveedores = await proveedores_model.obtenerProveedores();
  res.json(proveedores);
});

// Recupera todos los rubros
app.get("/rubros", async (req, res) => {
  const rubros = await rubrosModel.obtenerRubros();
  res.json(rubros);
});

// Recupera un rubro por numero de id
app.get("/rubro", async (req, res) => {
  if (!req.query.id) {
    res.end("not found");
    return;
  }
  const rubro = await rubrosModel.obtenerRubro(req.query.id);
  res.json(rubro);
});

// Agrega un Rubro
app.post("/rubro", async (req, res) => {
  const rubro = req.body;
  const respuesta = await rubrosModel.agregaRubro(rubro.nombrerubro);
  res.json(respuesta);
});

// Elimina un Rubro
app.delete("/rubro", async (req, res) => {
  if (!req.query.id) {
    res.end("No se encuentra el id del rubro.");
    return;
  }
  const idRubro = req.query.id;
  await rubrosModel.eliminaRubro(idRubro);
  res.json(true);
});

// Modifica un Rubro
app.put("/rubro", async (req, res) => {
  const rubro = req.query;
  const respuesta = await rubrosModel.modificaRubro(
    rubro.rubroid,
    rubro.nombrerubro
  );
  res.json(respuesta);
});

// CARRITO VIEJO VER ARCHIVO APARTE CARRITO_VIEJO.JS

// Mostrar registros de carrito
app.get("/carrito", async (req, res) => {
  const carrito = await carritoModel.obtenerItems();
  res.json(carrito);
});
// Agrega un item de carrito
app.post("/carrito/agregar", async (req, res) => {
  const regCarrito = req.body;
  const agregar = await carritoModel.agregarItem(
    regCarrito.producto,
    regCarrito.cantidad,
    regCarrito.precio
  );
  res.json(agregar);
});
// Eliminar todo el carrito
app.delete("/carrito/eliminar", async (req, res) => {
  const elimnaCarrito = await carritoModel.elimnarCarrito();
  res.json(elimnaCarrito);
});
// Obtener el total del carrito
app.get("/carrito/total", async (req, res) => {
  const totalcarrito = await carritoModel.obtenerTotal();
  res.json(totalcarrito);
});
// Modificar cantidad en un item del carrito
app.put("/carrito/cantidad", async (req, res) => {
  const id = req.query.id;
  const cantidad = req.query.cantidad;
  const precio = req.query.precio;

  const respuesta = await carritoModel.cambiarCantidad(
    id,
    cantidad,
    precio
  );
  res.json(respuesta);
});
// Eliminar un item del carrito
app.delete("/carrito/eliminaitem", async (req, res) => {
  if (!req.query.id) {
    res.end("No se encuentra el id del item de carrito.");
    return;
  }
  const idRubro = req.query.id;
  await carritoModel.elimnarItemCarrito(idRubro);
  res.json(true);
});

// test con async await en variable 
app.get("/carrito/test", (req, res) => {
  const carrito = carritoModel.getRegistros()
  .then((res) => res.json(carrito))
  .catch((err) => err.json(err));
})


// Manejo de Tabla ventas

// Ventas - Ver todos los registros de ventas
app.get("/ventas", async (req, res) => {
  const ventas = await ventasModel.obtenerVentas();
  res.json(ventas);
});
// Ventas - Agrega un registro  de ventas
app.post("/ventas/agregar", async (req, res) => {
  const venta = req.body;
  const respuesta = await ventasModel.agregoItemVenta(
    venta.fecha,
    venta.producto,
    venta.cantidad,
    venta.precio
  );
  res.json(respuesta);
});

// Tabla Servicios

app.get("/servicios", async (req, res) => {
  const servicios = await serviciosModel.obtenerServicios();
  res.json(servicios);
});
// Inicializar el servidor (Siempre al final de todas las anteriores definiciones y constantes)
app.listen(PUERTO, (err) => {
  if (err) {
    console.error("Error al escuchar petición: ", err);
    return;
  }
  // Si no hay error,  poner mensaje en consola escuchando...
  console.log(`Escuchando en el puerto :${PUERTO}`);
});

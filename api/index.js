const express = require("express"),
      app = express(),
      path = require("path"),  
      session = require("express-session")
// Modelos para funciones     
const proveedores_model = require("./models/proveedores_model");
const productoModel = require("./models/productos_model");
const ventasModel = require("./models/ventas_model");
const carritoModel = require('./models/carrito_model');

// Manejo de dominios cruzados para evitar errores en navegador
const DOMINIO_PERMITIDO_CORS = "http://localhost:4200",
  DIRECTORIO_FOTOS = path.join(__dirname, "fotos_productos"),
  DIRECTORIO_DIST = path.join(__dirname, "dist"),
  PUERTO = 3000;

app.use(express.json());
app.use(session({
  secret: 'testclave1',
  saveUninitialized: true,
  resave: true,
 }));

app.use((req, res, next) => {
   res.set("Access-Control-Allow-Credentials", "true");
   res.set("Access-Control-Allow-Origin", DOMINIO_PERMITIDO_CORS);
   res.set("Access-Control-Allow-Headers", "Content-Type");
   res.set("Access-Control-Allow-Methods", "DELETE");
   next();
});

// ****** Funciones para recuperar tablas ******

// Recupera todos los productos
app.get('/productos', async (req, res) => {
  // console.log('get productos...');
  const productos = await productoModel.obtenerProductos();
  res.json(productos);
});
// Recupera todos los rubros (Se encuentra en el model producto)
app.get('/rubros', async (req, res) => {
  console.log('get rubros.-');
  const rubros = await productoModel.obtenerRubros();
  res.json(rubros);
});

// Recupera todos los proveedores
app.get('/proveedores', async (req, res) => {
  const proveedores = await proveedores_model.obtenerProveedores();
  res.json(proveedores);
});


// CARRITO VIEJO VER ARCHIVO APARTE CARRITO_VIEJO.JS

// Mostrar registros de carrito

app.get("/carrito", async (req, res) => {
  const carrito = await carritoModel.obtenerItems();
  res.json(carrito);
});

app.post("/carrito/agregar", async (req,res) => {
  const regCarrito = req.body;
  const agregar = await carritoModel.agregarItem(regCarrito.producto, regCarrito.cantidad, regCarrito.precio);
  res.json(agregar);
})



// Ventas - Ver todos los registros de ventas
app.get('/ventas', async (req, res) => {
  const ventas = await ventasModel.obtenerVentas();
  res.json(ventas);
});
// Ventas - Agrega un registro de ventas
app.post('/ventas/agregar', async (req, res) => {
  const venta = req.body;
  const respuesta = await ventasModel.agregoItemVenta(venta.fecha, venta.producto, venta.cantidad, venta.precio);
  res.json(respuesta);
});

// Inicializar el servidor (Siempre al final de todas las anteriores definiciones y constantes)
app.listen(PUERTO, err => {
  if (err) {
    console.error("Error al escuchar petición: ", err);
    return;
  }
  // Si no hay error,  poner mensaje en consola escuchando...
  console.log(`Escuchando en el puerto :${PUERTO}`);
});
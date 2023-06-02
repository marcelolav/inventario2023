const express = require("express"),
      app = express(),
      path = require("path"),  
      session = require("express-session")
// Modelos para funciones     
const proveedores_model = require("./models/proveedores_model");
const productoModel = require("./models/productos_model");
// CORS ¿Funcionara????
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

app.get("/carrito", (req, res) => {
  const carrito = req.session.carrito;
  res.json(carrito || []);

});

app.post("/carrito/agregar", async (req, res) => {
  const idProducto = req.body.id;
  const producto = await productoModel.obtenerPorId(idProducto);
  let total = 0;
  if (!req.session.carrito) {
    req.session.carrito = [];
  }
  req.session.carrito.push(producto);
  req.session.carrito.forEach(p => total += p.precio);
  res.json(req.body);
  console.log(total);
});

app.get("/carrito/limpiar", (req,res) => {
  req.session.carrito = [];
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
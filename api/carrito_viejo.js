app.get("/carrito", (req, res) => {
    const carrito = req.session.carrito;
    const totalVenta = req.session.totalVenta;
    res.json(carrito || []);
  });
  
  app.post("/carrito/agregar", async (req, res) => {
    const idProducto = req.body.id;
    const producto = await productoModel.obtenerPorId(idProducto);
    let total = 0;
    if (!req.session.carrito && !req.session.totalVenta) {
      req.session.carrito = [];
      req.session.totalVenta = 0;
    }
    req.session.carrito.push(producto);
    req.session.totalVenta = Number(req.session.totalVenta) + Number(producto.precio);
    res.json(req.body);
  });
  
  app.get("/carrito/total", (req,res) => {
    const totalVenta = req.session.totalVenta || 0;
    res.json(totalVenta);
  })
  
  app.get("/carrito/limpiar", (req,res) => {
    req.session.carrito = [];
    req.session.totalVenta = 0 ;
    res.json(true);
  });
  
import express, { Application } from "express";
import morgan from "morgan";
import cors from "cors";
// Rutas de API y desde route va a tomar del controller
import indexRoutes from "./rutas/indexRoute";
import productosRoute from "./rutas/productosRoute";
import rubrosRoute from "./rutas/rubrosRoute";
import ventasRoute from "./rutas/ventasRoute";
import proveedoresRoute from "./rutas/proveedoresRoute";
import serviciosRoute from "./rutas/serviciosRoute";
import clientesRoute from "./rutas/clientesRoute";

class Server {
     public app: Application;

     constructor() {
          this.app = express();
          this.config();
          this.routes();
     }

     config(): void {
          this.app.set("port", process.env.PORT || 3000);
          this.app.use(morgan("dev"));
          this.app.use(cors());
          this.app.use(express.json());
          this.app.use(express.urlencoded({ extended: false }));
     }

     // aca irian las rutas de la api
     routes(): void {
          this.app.use("/", indexRoutes);
          this.app.use("/api/productos", productosRoute);
          this.app.use("/api/rubros", rubrosRoute);
          this.app.use("/api/clientes", clientesRoute);
          this.app.use("/api/proveedores", proveedoresRoute);
          this.app.use("/api/servicios", serviciosRoute);
          this.app.use("/api/ventas", ventasRoute);
     }

     start() {
          this.app.listen(this.app.get("port"), () => {
               console.log("Server on port", this.app.get("port"));
          });
     }
}

const server = new Server();
server.start();

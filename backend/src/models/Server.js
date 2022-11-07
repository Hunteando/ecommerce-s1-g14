import express from "express";
import productos from "../routes/productos.js";
import sequelize from "../config/mysql.js";
import cors from "cors";
import Producto from "./Producto.js";
import Categoria from "./Categoria.js";
import Marca from "./Marca.js";

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.path = {
      productos: "/api/productos",
    };

    this.middlewares();
    this.conectarDB();
    this.routes();
  }

  async conectarDB() {
    try {
      await sequelize.authenticate();
      console.log("Database online");
      //await sequelize.sync({ force: true });
    } catch (error) {
      console.log(error + "Error al conectar con la base de datos");
    }
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use(cors());
  }

  routes() {
    this.app.use(this.path.productos, productos);
  }
  listen() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on http://localhost:${this.port}`);
    });
  }
}

export default Server;

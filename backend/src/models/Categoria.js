import { DataTypes } from "sequelize";
import sequelize from "../config/mysql.js";
import Producto from "./Producto.js";

const Categoria = sequelize.define("category", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  img_url: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
});

Categoria.hasMany(Producto, {
  foreignKey: "categoria_id",
  sourceKey: "id",
});

Producto.belongsTo(Categoria, {
  foreignKey: "categoria_id",
  targetKey: "id",
});

export default Categoria;

import { DataTypes } from "sequelize";
import sequelize from "../config/mysql.js";
import Producto from "./Producto.js";

const Marca = sequelize.define("marca", {
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

Marca.hasMany(Producto, {
  foreignKey: "marca_id",
  sourceKey: "id",
});

Producto.belongsTo(Marca, {
  foreignKey: "marca_id",
  targetKey: "id",
});

export default Marca;

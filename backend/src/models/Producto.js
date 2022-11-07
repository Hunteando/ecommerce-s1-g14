import { DataTypes } from "sequelize";
import sequelize from "../config/mysql.js";

const Producto = sequelize.define("producto", {
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
  cantidad: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  precio: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  descuento: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: true,
  },
  img_url: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  estado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  marca_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default Producto;

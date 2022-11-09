import Categoria from "../models/Categoria.js";
import Marca from "../models/Marca.js";
import Producto from "../models/Producto.js";
import { Op } from "sequelize";

export const existeCategoriaPorId = async (id) => {
  const categoria = await Categoria.findByPk(id);
  if (!categoria) {
    throw new Error(`La categoria con id ${id} no existe`);
  }
};

export const existeMarcaPorId = async (id) => {
  const marca = await Marca.findByPk(id);
  if (!marca) {
    throw new Error(`La marca con id ${id} no existe`);
  }
};

export const existeProductoPorId = async (id) => {
  const producto = await Producto.findOne({
    where: { [Op.and]: [{ id }, { estado: true }] },
  });
  if (!producto) {
    throw new Error(`El producto con id ${id} no existe`);
  }
};

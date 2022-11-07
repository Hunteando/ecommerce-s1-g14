import httpMessage from "../helpers/httpMessage.js";
import Productos from "../models/Producto.js";

export const getProductos = async (req, res) => {
  const { skip = 0, limite = 10 } = req.query;
  const query = { estado: true };
  try {
    const [productos, total] = await Promise.all([
      Productos.findAll({
        where: query,
        offset: Number(skip),
        limit: Number(limite),
      }),
      Productos.count({ where: query }),
    ]);
    const pagination = {
      skip,
      limite,
    };

    res.json({ total, pagination, productos });
  } catch (error) {
    httpMessage(
      res,
      500,
      "Error al obtener la data, contacte al administrador"
    );
  }
};

export const getProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const producto = await Productos.findByPk(id);
    res.json(producto);
  } catch (error) {
    httpMessage(
      res,
      500,
      "Error al obtener la data, contacte al administrador"
    );
  }
};

export const createProducto = async (req, res) => {
  const {
    nombre,
    descripcion,
    cantidad,
    precio,
    img_url,
    categoria_id,
    marca_id,
  } = req.body;
  try {
    const producto = await Productos.create({
      nombre,
      descripcion,
      cantidad,
      precio,
      img_url,
      categoria_id,
      marca_id,
    });
    res.json(producto);
  } catch (error) {
    httpMessage(res, 500, "Error al crear la data, contacte al administrador");
  }
};

export const updateProducto = async (req, res) => {
  const { id } = req.params;
  const {
    nombre,
    descripcion,
    cantidad,
    precio,
    img_url,
    categoria_id,
    marca_id,
  } = req.body;

  const producto = await Productos.findByPk(id);
  await producto.update(
    {
      nombre,
      descripcion,
      cantidad,
      precio,
      img_url,
      categoria_id,
      marca_id,
    },
    {
      where: { id },
    }
  );
  res.json(producto);
  try {
  } catch (error) {
    httpMessage(
      res,
      500,
      "Error al actualizar la data, contacte al administrador"
    );
  }
};

export const deleteProducto = async (req, res) => {
  const { id } = req.params;

  try {
    const producto = await Productos.findByPk(id);
    await producto.update(
      {
        estado: false,
      },
      {
        where: { id },
      }
    );
    res.json({ msg: `Producto ${id} eliminado` });
  } catch (error) {
    httpMessage(
      res,
      500,
      "Error al eliminar la data, contacte al administrador"
    );
  }
};

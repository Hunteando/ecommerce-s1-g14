import { Router } from "express";
import {
  createProducto,
  deleteProducto,
  getProducto,
  getProductos,
  updateProducto,
} from "../controllers/productos.js";
import {
  validacionCrearProducto,
  validacionDeleteProducto,
  validacionGetProducto,
  validacionUpdateProducto,
} from "../helpers/middleValidations.js";

const router = Router();

router.get("/", getProductos);
router.get("/:id", validacionGetProducto, getProducto);
router.post("/", validacionCrearProducto, createProducto);
router.put("/:id", validacionUpdateProducto, updateProducto);
router.delete("/:id", validacionDeleteProducto, deleteProducto);

export default router;

import { check } from "express-validator";
import { validationData } from "../middlewares/validationData.js";
import {
  existeCategoriaPorId,
  existeMarcaPorId,
  existeProductoPorId,
} from "./dbValidations.js";

// TODO: Validacion de los campos de productos
export const validacionCrearProducto = [
  check("nombre", "El nombre es obligatorio").not().isEmpty(),
  check("descripcion", "La descripcion es obligatoria").not().isEmpty(),
  check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
  check("cantidad", "La cantidad debe ser un entero").isInt(),
  check("precio", "El precio es obligatorio").not().isEmpty(),
  check("img_url", "La imagen es obligatoria").not().isEmpty(),
  check("categoria_id").custom(existeCategoriaPorId),
  check("categoria_id", "La categoria es obligatoria").not().isEmpty(),
  check("marca_id").custom(existeMarcaPorId),
  check("marca_id", "La marca es obligatoria").not().isEmpty(),
  validationData,
];

export const validacionGetProducto = [
  check("id").custom(existeProductoPorId),
  validationData,
];

export const validacionUpdateProducto = [
  check("id").custom(existeProductoPorId),
  check("nombre", "El nombre es obligatorio").not().isEmpty(),
  check("descripcion", "La descripcion es obligatoria").not().isEmpty(),
  check("cantidad", "La cantidad es obligatoria").not().isEmpty(),
  check("cantidad", "La cantidad debe ser un entero").isInt(),
  check("precio", "El precio es obligatorio").not().isEmpty(),
  check("img_url", "La imagen es obligatoria").not().isEmpty(),
  check("categoria_id").custom(existeCategoriaPorId),
  check("categoria_id", "La categoria es obligatoria").not().isEmpty(),
  check("marca_id").custom(existeMarcaPorId),
  check("marca_id", "La marca es obligatoria").not().isEmpty(),
  validationData,
];

export const validacionDeleteProducto = [
  check("id").custom(existeProductoPorId),
  validationData,
];

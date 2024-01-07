import { Router } from "express";
import {
  addProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
} from "../controllers/productController.js";

const productRouter = Router();

productRouter
  .get("/", getAllProduct)
  .post("/", addProduct)
  .patch("/:id", updateProduct)
  .delete("/:id", deleteProduct);

export default productRouter;

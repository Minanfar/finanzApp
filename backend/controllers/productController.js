import productModel from "../model/productModel.js";

export const getAllProduct = async (req, res) => {
  try {
    const products = await productModel.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send("Server error" + error);
  }
};

export const addProduct = async (req, res) => {
  const newProduct = new productModel(req.body);
  try {
    await newProduct.save();
    res.send("some products added!");
  } catch (error) {
    res.send(error, "new product was not added!");
  }
};

export const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const deleteProduct = await productModel.findByIdAndDelete(productId);
    res.send("product was deleted" + deleteProduct);
  } catch (error) {
    res.send("there is no such Product!");
  }
};

export const updateProduct = async (req, res) => {
  const productId = req.params.id;
  const newProduct = req.body;
  try {
    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      newProduct,
      {
        new: true,
      }
    );
    res.status(201).send("order was updated!" + updatedProduct);
  } catch (error) {
    res.status(500).send("server not found");
  }
};

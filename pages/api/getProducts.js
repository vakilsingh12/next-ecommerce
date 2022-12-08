import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";
const handler = async (req, res) => {
  let product = await Product.find();
  res.status(200).json(product);
};
export default connectDb(handler);

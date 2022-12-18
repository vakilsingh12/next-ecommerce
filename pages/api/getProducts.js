import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";
const handler = async (req, res) => {
  const cat = req.query.cat;
  let product = await Product.find({ category: cat });
  res.status(200).json(product);
};
export default connectDb(handler);

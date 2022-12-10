import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";
import { Mongoose } from "mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      let products = new Product({
        title: req.body[i].title,
        slug: req.body[i].slug,
        desc: req.body[i].desc,
        img: req.body[i].img,
        category: req.body[i].category,
        size: req.body[i].size,
        color: req.body[i].color,
        price: req.body[i].price,
        availableQty: req.body[i].availableQty,
      });
      await products.save();
    }
    return res.status(200).json({ success: true });
  } else {
    return res.status(400).json({ error: false });
  }
};
export default connectDb(handler);

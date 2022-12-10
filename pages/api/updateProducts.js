import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";
import { Mongoose } from "mongoose";
const handler = async (req, res) => {
  if (req.method == "POST") {
    for (let i = 0; i < req.body.length; i++) {
      await Product.findByIdAndUpdate(req.body[i]._id,req.body[i])
    }
    return res.status(200).json({ success: true });
  } else {
    return res.status(400).json({ error: false });
  }
};
export default connectDb(handler);

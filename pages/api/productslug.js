// http://localhost:3000/api/productvariants

import Product from "../../models/Product";
import connectDb from "../../middleware/mongoose";
const handler = async (req, res) => {
  const slug=req.query.slug;
  let products = await Product.findOne({slug:slug});
  let variants=await Product.find({title:products.title})
  console.log(variants)
  let colorSizeslug = {};
  for (let item of variants) {
   if(Object.keys(colorSizeslug).includes(item.color)){
    colorSizeslug[item.color][item.size]={slug:item.slug}
   }else{
    colorSizeslug[item.color]={};
    colorSizeslug[item.color][item.size]={slug:item.slug}
   }
  }
  res.status(200).json({products,variants:colorSizeslug});
};
export default connectDb(handler);

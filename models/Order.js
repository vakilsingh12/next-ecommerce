const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  product: [{
      productId: { type: String },
      quantity: { type: Number, default: 1 },
    }],
  address:{type:String,required:true},
  amount:{type:Number,required:true},
  status:{type:Number,default:'Pending',required:true},
},{timestamps:true});
mongoose.models={}
export default mongoose.model('Order',orderSchema)
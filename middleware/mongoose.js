import mongoose from 'mongoose';    
const connectDb=handler=>async(req,res)=>{
    if(mongoose.connections[0].readyState){
        return handler(req,res)
    }
    await mongoose.connect('mongodb://localhost:27017/codeswear', {
        useNewUrlParser: "true",
        useUnifiedTopology: "true"
      })
    return handler(req,res)
}
export default connectDb 
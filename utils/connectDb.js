// import mongoose from "mongoose";

// async function ConnectDb(){
//     try{
//         const client = await mongoose.connect(process.env.MONGODB_URI);
//         console.log("Connect to mongodb");
//     }
//     catch(err){
//         console.log(err.message)
//     }
// }
// export default ConnectDb;
import mongoose from "mongoose";

const ConnectDb = async () => {
    try{
        const connect = await mongoose.connect("mongodb://127.0.0.1:27017/cms");
    }
    catch(e){
        throw new Error("db connection failed "+e)
    }
}
export default ConnectDb;
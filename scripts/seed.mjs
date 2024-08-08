import CategoryModel from "@/models/CategoryModel";
import ConnectDb from "@/utils/connectDb";
import mongoose from "mongoose";

export async function main(){
    try{
        await ConnectDb();
        await CategoryModel.insertMany([
            {name:"Web Development", description:"testing"},
            {name:"Machine Learning", description:"testing"},
            {name:"Data Science", description:"testing"},
            {name:"Engineering", description:"testing"},
            {name:"Accounting", description:"testing"},
            {name:"Computer Science", description:"testing"},
            {name:"Fitness", description:"testing"},
            {name:"Music", description:"testing"},
        ]);
        console.log("seed successfully")
    }
    catch(error){
        console.log("Error seeding the database category model");
    }
    finally{
        mongoose.connection.close();
    }
}

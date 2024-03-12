import mongoose from "mongoose";


const mongodbConnection = async () => {

    mongoose.connect("mongodb://localhost:27017/demo12").then(() => {
        console.log("mongodb connection")
    });

}
export default mongodbConnection
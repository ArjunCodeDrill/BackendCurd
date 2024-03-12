import mongoose from "mongoose";


const mongodbConnection = async () => {

    mongoose.connect(process.env.DATABASE_URL).then(() => {
        console.log("mongodb connection")
    });

}
export default mongodbConnection
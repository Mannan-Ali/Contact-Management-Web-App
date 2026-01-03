import mongoose from "mongoose";

let DB_NAME = "ContactManagementApp"
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `MongDB connection done!!!! :- DB HOST ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("Mongo DB Connection error : ", error);
    process.exit(1); //read about this process and exit in js ,same as thorw error;
  }
};

export default connectDB;

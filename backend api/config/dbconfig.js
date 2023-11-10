import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    // local mongodb compass url with name ntdl
    const apiUrl = "mongodb://localhost:27017/ntdl";
    const conn = await mongoose.connect(apiUrl);

    //securing connection with the url path for the backend and the database
    conn.connections && console.log("Mongo connected");
  } catch (error) {
    console.log(error);
  }
};

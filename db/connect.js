import mongoose from "mongoose";

const connectDB = (uri) => {
  try {
    const connectDataBase = mongoose.connect(uri, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
      dbName: "HireFree",
    });
    console.log("Connected with DB");
    return connectDataBase;
  } catch (error) {
    console.log(error);
    throw new Error("Error connecting with DB");
    process.exit(1); // stop the app if there is an error connecting with DB
    return; // return undefined if there is an error connecting with DB
  }
};

export default connectDB;

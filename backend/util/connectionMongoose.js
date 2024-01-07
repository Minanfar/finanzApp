import mongoose from "mongoose";
import "dotenv/config";

async function connectMongoose() {
  const _pwd = "Oy76811148";
  const _database = "products";
  const _user = "omar";
  const _cluster = "cluster0.taehtxj.mongodb.net";
  const _uri = `mongodb+srv://${_user}:${_pwd}@${_cluster}/${_database}?retryWrites=true&w=majority`;
  try {
    await mongoose.connect(_uri);
    const collections = (
      await mongoose.connection.db.listCollections().toArray()
    ).map((el) => el.name);
    console.log("connected to db: ", collections);
    return true;
  } catch (err) {
    console.error("could not connect to mongoose", err);
    return false;
  }
}

export { connectMongoose };

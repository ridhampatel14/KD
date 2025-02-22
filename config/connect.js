const { MongoClient } = require("mongodb");
require("dotenv").config();

//const uri = process.env.MONGO_URI;
const uri = "mongodb+srv://<rajkoladiya>:<rajkoladiya>@kd.mkdw3.mongodb.net/KD?retryWrites=true&w=majority&appName=KD";

const client = new MongoClient(uri);

let db;
let data;

async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB Atlas");

    db = client.db("KD"); 
    data = db.collection("Data"); 
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
}

// Export users collection directly
module.exports = { connectDB, data };

const { MongoClient,ServerApiVersion} = require("mongodb");
require("dotenv").config();

//const uri = process.env.MONGO_URI;
const uri = process.env.MONGO_URI;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

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

const getDataCollection = () => {
  if (!data) throw new Error("Database not initialized yet");
  return data;
};

module.exports = { connectDB, getDataCollection };

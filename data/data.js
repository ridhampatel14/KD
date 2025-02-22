const { getDataCollection } = require("../config/connect");

async function getData() {
  try {
    const data = getDataCollection();    
    return await data.find().toArray();
  } catch (error) {
    throw new Error("Error fetching data: " + error.message);
  }
}

// async function insertUser(name, email) {
//   try {
//     const result = await users.insertOne({ name, email });
//     return { id: result.insertedId };
//   } catch (error) {
//     throw new Error("Error inserting user: " + error.message);
//   }
// }

module.exports = { getData };

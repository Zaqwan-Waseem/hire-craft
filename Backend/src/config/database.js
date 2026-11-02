const mongoose = require("mongoose");

async function connectToDB() {
  const mongoUri = process.env.MONGO_URI;

  if (!mongoUri) {
    throw new Error(
      "MONGO_URI is not set. Add your MongoDB connection string to Backend/.env.",
    );
  }

  const connectionUri = new URL(mongoUri);
  if (
    connectionUri.hostname.endsWith(".mongodb.net") &&
    !connectionUri.searchParams.has("authSource")
  ) {
    connectionUri.searchParams.set("authSource", "admin");
  }

  await mongoose.connect(connectionUri.toString());
  console.log("Connected to Database");
}

module.exports = connectToDB;

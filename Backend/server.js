require("dotenv").config();
const app = require("./src/app");
const connectToDB = require("./src/config/database");

async function startServer() {
  try {
    await connectToDB();
    app.listen(process.env.PORT || 5000, () => {
      console.log(`Server is running on port ${process.env.PORT || 5000}`);
    });
  } catch (err) {
    console.error("Failed to start server:", err.message);
    process.exitCode = 1;
  }
}

startServer();

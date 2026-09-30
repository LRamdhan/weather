import app from "./config/expressConfig.js";
import poolPg from "./config/postgreConfig.js";

// pg
poolPg
  .connect()
  .then((client) => {
    console.log("Connected to PostgreSQL");
    client.release();
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// express
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
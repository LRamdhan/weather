import app from "./config/expressConfig.js";
import poolPg from "./config/postgreConfig.js";
import express from "express";
import cityRoutes from "./routes/cityRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";

const app = express();

// routes
app.use("/api/city", cityRoutes)

// error middlware
app.use(errorMiddleware)

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
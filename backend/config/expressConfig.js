import express from "express";
import cityRoutes from "../routes/cityRoutes.js";
import errorMiddleware from "../middleware/errorMiddleware.js";

const app = express();

// routes
app.use("/api/city", cityRoutes)

// error middlware
app.use(errorMiddleware)

export default app
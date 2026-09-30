import express from "express";
import cityModel from "../model/cityModel.js";

const app = express();

app.post("/", async (req, res) => {
  await cityModel.createTable()
  return res.json({ message: "OK" });
})

app.post("/users", async (req, res) => {
  await cityModel.insertUser()
  return res.json({ message: "OK" });
})


export default app
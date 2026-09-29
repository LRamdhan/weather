import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  return res.json({ message: "Okelah" });
});

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
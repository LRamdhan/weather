import fs from "fs";

const inputFile = "city-all-converted.json";
const outputFile = "cities.json";

const data = fs.readFileSync(inputFile, "utf8");

const convertedData = data
  .replace(/'/g, "\"")
  .replace(/{/g, "[")
  .replace(/}/g, "]");

fs.writeFileSync(outputFile, convertedData, "utf8");

console.log("File berhasil dikonversi.");
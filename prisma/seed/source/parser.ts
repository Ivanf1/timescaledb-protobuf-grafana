import fs from "fs";
import path from "path";
import Papa from "papaparse";
import { Prisma } from ".prisma/client";

interface Data<T> {
  [tbName: string]: T;
}

let parsedData: Data<any[]> = {};

Object.values(Prisma.ModelName).forEach((tbName) => {
  const file = fs.readFileSync(path.join(__dirname, "csv", `${tbName}.csv`), "utf-8");
  const data = Papa.parse(file, { header: true, dynamicTyping: true }).data;
  parsedData[tbName] = data;
});

export default parsedData;

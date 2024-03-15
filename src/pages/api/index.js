// pages/api/index.js
import fs from "fs";
import path from "path";

export default (req, res) => {
  const filePath = path.resolve("./public/wa-sender.html");
  const htmlContent = fs.readFileSync(filePath, "utf8");
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(htmlContent);
};

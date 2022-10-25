import express from "express";
import fs from "fs";

const images = express.Router();
images.get("/", (req, res) => {
  fs.readFile("./public/images/palmtunnel.jpg", (err, data) => {
    if (err) throw err;
    res.writeHead(200, { "Content-Type": "image/jpeg" });
    res.end(data); // Send the file data to the browser.
  });
});
export default images;

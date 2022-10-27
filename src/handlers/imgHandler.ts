import fs from 'fs';
import express from 'express';
import SaveImage from '../services/image';
const Callback = async (
  req: express.Request,
  res: express.Response
): Promise<void> => {
  const widthStr = req.query?.width;
  const heightStr = req.query?.height;
  const imgName = req.query?.filename as string;
  const width = Number(widthStr);
  const height = Number(heightStr);
  if (Number.isNaN(width) || Number.isNaN(height)) {
    res.status(400);
    res.end('Enter valid width and height ! (use numbers please)');
    return;
  }
  if (width <= 0 || height <= 0) {
    res.status(400);
    res.end(
      'Enter valid width and height ! (you can not use negative or zero values)'
    );
    return;
  }
  if (!imgName) {
    res.status(400);
    res.end('Enter an image name please');
    return;
  }
  const { outPath, result } = await SaveImage(imgName, width, height);
  if (result && outPath != '') {
    fs.readFile(outPath, (err, data) => {
      if (err) throw err;
      res.status(200);
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(data); // Send the file data to the browser.
    });
  } else {
    res.status(400);
    res.end('No file with such name exists');
  }
};

export default Callback;

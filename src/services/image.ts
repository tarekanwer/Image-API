import sharp from 'sharp';
import existCheck from './existCheck';
import fs from 'fs';
const SaveImage = async (imgName: string, width: number, height: number) => {
  const name = imgName.replace(/\.[^/.]+$/, '');
  if (!existCheck('./public/images/thumb')) {
    fs.mkdir('./public/images/thumb', (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('Directory created successfully!');
    });
  }
  const outPath = `./public/images/thumb/${name}-${width}-${height}.jpg`;
  const path = `./public/images/${imgName}`;
  const result = existCheck(path);
  if (result) {
    await sharp(path).resize(width, height).toFormat('jpeg').toFile(outPath);
  }
  return { outPath, result };
};

export default SaveImage;

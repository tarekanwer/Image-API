import sharp from 'sharp';
import existCheck from './existCheck';
import fs from 'fs';
type obj = {
  outPath: string;
  result: boolean;
};
const SaveImage = async (
  imgName: string,
  width: number,
  height: number
): Promise<obj> => {
  const name = imgName.replace(/\.[^/.]+$/, '');
  if (!existCheck('./public/images/thumb')) {
    fs.mkdir('./public/images/thumb', (err) => {
      if (err) {
        return console.error(err);
      }
      console.log('Directory created successfully!');
    });
  }
  let outPath = '';
  const path = `./public/images/${imgName}`;
  const result = existCheck(path);
  if (result) {
    outPath = `./public/images/thumb/${name}-${width}-${height}.jpg`;
    await sharp(path).resize(width, height).toFormat('jpeg').toFile(outPath);
  }
  return { outPath, result };
};

export default SaveImage;

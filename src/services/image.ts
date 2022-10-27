import sharp from "sharp";
import existCheck from "./existCheck";
const SaveImage = async (imgName: string, width: number, height: number) => {
  const name = imgName.replace(/\.[^/.]+$/, "");
  const outPath = `./public/images/thumb/${name}-${width}-${height}.jpg`;
  const path = `./public/images/${imgName}`;
  const result = existCheck(path);
  if (result) {
    await sharp(path).resize(width, height).toFormat("jpeg").toFile(outPath);
  }
  return { outPath, result };
};

export default SaveImage;

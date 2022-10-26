import sharp from "sharp";

const SaveImage = async (imgName: string, width: number, height: number) => {
  const name = imgName.replace(/\.[^/.]+$/, "");
  const outPath = `./public/images/thumb/${name}-${width}-${height}.jpg`;
  const path = `./public/images/${imgName}`;
  await sharp(path).resize(width, height).toFormat("jpeg").toFile(outPath);
  return outPath;
};

export default SaveImage;

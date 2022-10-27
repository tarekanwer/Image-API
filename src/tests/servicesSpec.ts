import existCheck from '../services/existCheck';
import SaveImage from '../services/image';

describe('Image Services test', () => {
  it('check if the file directory exists for known file', () => {
    expect(existCheck('./public/images/fjord.jpg')).toBeTrue();
  });
  it('check if the file directory exists for unknown file', () => {
    expect(existCheck('./public/images/unknown.jpg')).toBeFalse();
  });
  it('check if the image is shaped', async () => {
    const targetWidth = 300;
    const targetHeight = 300;
    const filename = 'fjord.jpg';
    const { outPath, result } = await SaveImage(
      filename,
      targetWidth,
      targetHeight
    );
    expect(result).toBeTrue();
  });
  it('check if the shaped image is saved', async () => {
    const targetWidth = 300;
    const targetHeight = 300;
    const filename = 'fjord.jpg';
    const { outPath, result } = await SaveImage(
      filename,
      targetWidth,
      targetHeight
    );
    expect(outPath).not.toBe("");
  });
  it('check if the shaped image is saved in proper directory', async () => {
    const targetWidth = 300;
    const targetHeight = 300;
    const filename = 'fjord.jpg';
    const name = filename.replace(/\.[^/.]+$/, '');
    const { outPath, result } = await SaveImage(
      filename,
      targetWidth,
      targetHeight
    );
    expect(outPath).toBe(
      `./public/images/thumb/${name}-${targetWidth}-${targetHeight}.jpg`
    );
  });
});

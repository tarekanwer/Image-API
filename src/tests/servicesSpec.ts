import existCheck from '../services/existCheck';

describe('Image Services test', () => {
  it('check if the file directory exists for known file', () => {
    expect(existCheck('./public/images/fjord.jpg')).toBeTrue();
  });
  it('check if the file directory exists for unknown file', () => {
    expect(existCheck('./public/images/unknown.jpg')).toBeFalse();
  });
});

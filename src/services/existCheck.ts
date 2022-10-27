import fs from 'fs';

const existCheck = (path: string) => {
  if (fs.existsSync(path)) {
    return true;
  } else {
    return false;
  }
};

export default existCheck;

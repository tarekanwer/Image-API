import fs from 'fs';

const existCheck = (path: string) : boolean => {
  if (fs.existsSync(path)) {
    return true;
  } else {
    return false;
  }
};

export default existCheck;

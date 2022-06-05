import fs from "fs";

export const list = async () => {
  const dir = "files";
  fs.stat(dir, function (err, stats) {
    if (err) {
      throw new Error("FS operation failed");
    } else {
    }
  });

  fs.readdir(dir, (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach((file) => {
        console.log(file);
      });
    }
  });
};

list();

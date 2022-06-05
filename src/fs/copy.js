import fs from "fs";
import path from "path";

export const copy = async () => {
  const dir = "files";
  const newdir = "files_copy";
  fs.stat(newdir, function (err, stats) {
    if (err) {
      console.log(newdir, "Folder not found");
    } else {
      throw new Error("FS operation failed");
    }
  });
  fs.stat(dir, function (err, stats) {
    if (err) {
      throw new Error("FS operation failed");
    } else {
      console.log(dir, "Folder found!");
    }
  });

  fs.mkdir(newdir, (err) => {
    if (err) throw err;
    console.log(newdir, "Folder create");
  });

  fs.readdir(dir, (err, files) => {
    if (err) console.log(err);
    else {
      files.forEach((file) => {
        fs.copyFile(
          path.join(dir, file),
          path.join(newdir, file),
          function (err) {
            if (err) throw err;
          }
        );
      });
    }
    console.log("Copying to", newdir, "completed");
  });
};

copy();

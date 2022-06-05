import fs from "fs";
import path from "path";

export const rename = async () => {
  const dir = "files";

  fs.stat(path.join(dir, "properFilename.md"), function (err, stats) {
    if (err) {
      console.log("properFilename.md", "File not found");
    } else {
      throw new Error("FS operation failed");
    }
  });

  fs.rename(
    path.join(dir, "wrongFilename.txt"),
    path.join(dir, "properFilename.md"),
    (err) => {
      if (err) throw new Error("FS operation failed");
      console.log("Rename complete!");
    }
  );
};

rename();

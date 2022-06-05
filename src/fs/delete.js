import fs from "fs";
import path from "path";

export const remove = async () => {
  const dir = "files";
  fs.unlink(path.join(dir, "fileToRemove.txt"), (err) => {
    if (err) {
      throw new Error("FS operation failed");
    }
  });
};

remove();

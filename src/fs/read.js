import fs from "fs";
export const read = async () => {
  const file = "./files/fileToRead.txt";

  fs.readFile(file, "utf8", function (error, fileContent) {
    if (error) throw new Error("FS operation failed");
    console.log(fileContent);
  });
};

read();

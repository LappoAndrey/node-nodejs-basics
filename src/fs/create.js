import fs from "fs";

export const create = async () => {
  fs.stat("./files/fresh.txt", function (err, stats) {
    if (err) {
      console.log("File not found");
    } else {
      throw new Error("FS operation failed");
    }
  });
  fs.open("./files/fresh.txt", "w", (err) => {
    if (err) throw err;
    console.log("File created");
  });
  fs.appendFile("./files/fresh.txt", "I am fresh and young", (err) => {
    if (err) throw err;
    console.log("Data has been added!");
  });
};

create();

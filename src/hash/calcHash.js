const { createHash } = await import("node:crypto");
import fs from "fs";

export const calculateHash = async () => {
  const secret = "Keyyyy";
  const file = fs.createReadStream("./files/fileToCalculateHashFor.txt");
  const hash = createHash("sha256", secret);
  file.on("readable", () => {
    const data = file.read();
    if (data) hash.update(data);
    else {
      console.log(`${hash.digest("hex")}`);
    }
  });
};

calculateHash();

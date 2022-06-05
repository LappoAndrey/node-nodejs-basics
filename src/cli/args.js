import process from "process";

export const parseArgs = () => {
  const myArgs = process.argv.slice(2);
  let result = "";
  myArgs.forEach((val, index) => {
    if (val.includes("--")) {
      result += `${val} is ${myArgs[index + 1]},`;
    }
  });
  console.log(result.substring(0, result.length - 1));
};

parseArgs();

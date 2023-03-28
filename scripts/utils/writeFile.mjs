import fs from "node:fs";

export default function writeFile(path, str) {
  return new Promise((rs) => {
    fs.writeFile(path, "/* eslint-disable */\n" + str, () => {
      rs(true);
    });
  });
}

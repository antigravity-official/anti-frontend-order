import fs from "fs";

import openapiTS from "openapi-typescript";
import writeFile from "./utils/writeFile.mjs";

const run = async () => {
  try {
    const localPath = new URL(
      "../src/api/openapi/_swagger.yml",
      import.meta.url
    );

    const output = await openapiTS(`${localPath}`);
    if (!fs.existsSync("./src/api/openapi/.generated")) {
      fs.mkdirSync("./src/api/openapi/.generated", { recursive: true });
    }
    await writeFile("./src/api/openapi/.generated/type.ts", output);
    return output;
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  run();
})();

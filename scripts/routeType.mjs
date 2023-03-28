import fs from "fs";

import readDir from "./utils/readDir.mjs";
import writeFile from "./utils/writeFile.mjs";

const getIsPrivate = (path) => {
  const source = fs.readFileSync(path, "utf8");
  return source.indexOf("export const Private = true") !== -1;
};

/** Route Type Generator*/

const replaceBrackets = (path, matchItem) => {
  return path.replace(matchItem.matched, `:${matchItem.param}`);
};

const findParams = (routePath) => {
  // @ts-ignore
  return Array.from(routePath.matchAll("\\[(.*?)\\]"), (match) => {
    return {
      matched: match[0],
      param: match[1],
      path: match["input"],
    };
  });
};

const mappingParams = (path, params) => {
  return params.reduce(
    (acc, matchItem, idx) => replaceBrackets(acc, matchItem),
    path
  );
};

const makeRoutePaths = (routePaths) => {
  const paths = routePaths.map((path) => {
    let aliasPath = (path.match(/\/pages\/(.*)\.page\.tsx$/) || [])[1].replace(
      /index/gi,
      ""
    );
    if (aliasPath.endsWith("/")) aliasPath = aliasPath.slice(0, -1);
    // console.log(routePath);
    const params = findParams(aliasPath);

    if (params.length > 0) {
      const og = params[0].path || "";
      const mappedAliasPath = mappingParams(og, params);
      return {
        path: mappedAliasPath,
        srcPath: path.replace("./src/pages/", ""),
        params: params.map((item) => item.param),
      };
    }

    return {
      path: aliasPath,
      srcPath: path.replace("./src/pages/", ""),
    };
  });
  return paths;
};
function replaceToEnglish(str) {
  const replaceOnlyEnglish = str
    .replace(/[^a-zA-Z]/g, "_")
    .replace(/__/gi, "_");
  return (
    replaceOnlyEnglish.charAt(0).toUpperCase() + replaceOnlyEnglish.slice(1)
  );
}

const makeQueryParamType = (paths, queryParamTypePaths) => {
  let unionTypeSource = "";
  console.log(queryParamTypePaths);
  const typeSource = queryParamTypePaths.reduce((result, path, index) => {
    let aliasPath = (path.match(/\/pages\/(.*)\.pageType\.ts$/) ||
      [])[1].replace(/index/gi, "");

    if (aliasPath.endsWith("/")) aliasPath = aliasPath.slice(0, -1);
    const params = findParams(aliasPath);

    if (params.length > 0) {
      const og = params[0].path || "";
      aliasPath = mappingParams(og, params);
    }
    const pageTypeName = replaceToEnglish(aliasPath) + "_Type";
    const importLine = `import type ${pageTypeName} from '${path
      .replace("./src/", "../")
      .replace(".ts", "")}';`;

    unionTypeSource = unionTypeSource.concat(
      `'/${aliasPath}':${pageTypeName};`
    );
    if (queryParamTypePaths.length - 1 === index) {
      // 마지막라인.
      return (
        result +
        importLine +
        `export type RouteQueryParamType = {
        ${unionTypeSource}
      }`
      );
    }

    return result + importLine;
  }, "");
  return typeSource.replace(/\/\/@ts-ignore/gi, "");
};

const run = async () => {
  try {
    const routePaths = readDir("./src/pages").filter((fileName) =>
      fileName.endsWith(".page.tsx")
    );
    const queryParamTypePaths = readDir("./src/pages").filter((fileName) =>
      fileName.endsWith(".pageType.ts")
    );
    const paths = makeRoutePaths(routePaths);
    const source = makeQueryParamType(paths, queryParamTypePaths);

    await writeFile(
      "./src/routes/_generated.ts",
      `export const routePaths = ${JSON.stringify(
        paths
      )} as const; export type RoutePaths = typeof routePaths;
      export type Paths = \`/\${RoutePaths[number]['path']}\`;
      ${source}
      `
    );
  } catch (error) {
    console.log(error);
  }
};

(() => {
  run();
})();

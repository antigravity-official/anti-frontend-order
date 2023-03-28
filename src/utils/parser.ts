import { createSearchParams } from "react-router-dom";
import { cloneDeep, omit } from "lodash";
import { transBool } from "./transBool";

export function transObjToQueryString<T>(values: T) {
  const resultValues: any = cloneDeep(values);
  const removedKeys = Object.keys(resultValues).filter(
    (key: keyof typeof resultValues) => {
      if (
        resultValues[key] === undefined ||
        (Array.isArray(resultValues[key]) && resultValues[key].length === 0)
      ) {
        return true;
      }
      return false;
    }
  );
  return createSearchParams(omit(resultValues, removedKeys));
}

export const urlSearchParamsToObject = (urlParams: URLSearchParams) => {
  const obj: any = {};
  urlParams.forEach((_, key: string) => {
    const paramValue = urlParams.getAll(key);
    if (paramValue.length > 1) {
      obj[key] = paramValue.map((item) => transBool(item));
    } else {
      //@ts-ignore
      obj[key] = transBool(paramValue.pop());
    }
  });
  return obj;
};

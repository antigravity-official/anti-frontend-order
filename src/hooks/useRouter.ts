import { createSearchParams, useLocation, useNavigate } from "react-router-dom";
import { useSearchParams, useParams } from "react-router-dom";

import {
  transObjToQueryString,
  urlSearchParamsToObject,
} from "../utils/parser";

import { routePaths } from "../routes/_generated";

import type { Paths, RouteQueryParamType } from "../routes/_generated";
import type { NavigateOptions, URLSearchParamsInit } from "react-router-dom";
import type { O } from "ts-toolbelt";

export type PathParams<TPath extends Paths> = O.Path<
  RouteQueryParamType,
  [TPath, "params"]
>;
export type PathQuery<TPath extends Paths> = O.Path<
  RouteQueryParamType,
  [TPath, "query"]
>;

const replaceParam = (path: string, paramKey: string, value: string) => {
  return path.replace(`:${paramKey}`, value);
};

const bindParams = ({
  pathname,
  params,
}: {
  pathname: Paths;
  params: PathParams<Paths>;
}) => {
  if (!pathname) throw new Error("pathname이 정의되지 않았습니다!");
  if (!params) return pathname;
  if (pathname.indexOf("/:") === -1) {
    // params가 없는경우는 바로 리턴한다.
    return pathname;
  }
  // params를 바인딩 하는 함수.
  const matchedItem = routePaths.find((data) => "/" + data.path === pathname);
  //@ts-ignore
  if (matchedItem && Array.isArray(matchedItem?.params)) {
    //@ts-ignore
    const paramsArray: string[] = matchedItem.params;

    const bindedPath = paramsArray.reduce((result, paramKey, idx) => {
      //@ts-ignore
      const value = params[paramKey];

      if (value === undefined) {
        throw new Error(`${paramKey} params 가 없습니다! ${result}`);
      }

      return replaceParam(result, paramKey, value);
    }, pathname);
    return bindedPath;
  }
  return pathname;
};

type ToParams<TPathname, TParam, TQuery> = {
  pathname: TPathname;
} & (TParam extends undefined
  ? {
      params?: undefined;
    }
  : O.RequiredKeys<NonNullable<TParam>> extends never
  ? {
      params?: TParam;
    }
  : {
      params: TParam;
    }) &
  (TQuery extends undefined
    ? {
        query?: undefined;
      }
    : O.RequiredKeys<NonNullable<TQuery>> extends never
    ? {
        query?: TQuery;
      }
    : {
        query: TQuery;
      });

export function useRouter<CurrentPath extends Paths>(
  currentPath: CurrentPath | null
) {
  const navigate = useNavigate();
  const customNavigate = <
    TQueryKey extends Paths,
    TParams extends PathParams<TQueryKey>,
    TQuery extends PathQuery<TQueryKey>
  >(
    to: ToParams<TQueryKey, TParams, TQuery>,
    options?: NavigateOptions
  ) => {
    let newTo = to;

    if (newTo.pathname) {
      //@ts-ignore
      const bindedparams = bindParams({
        pathname: newTo.pathname,
        //@ts-ignore
        params: newTo.params,
      });
      newTo = {
        ...newTo,
        ...(newTo?.query
          ? {
              search: `?${createSearchParams(
                newTo?.query as URLSearchParamsInit
              )}`,
            }
          : {}),
        pathname: bindedparams as Paths,
      };
      navigate(newTo, options);
    } else {
      console.log("?");
      throw new Error("pathanme이 없습니다.");
    }
  };

  const location = useLocation();
  const params = useParams();
  const [searchParams, search] = useSearchParams();
  const parsedSearchParams = urlSearchParamsToObject(searchParams);

  return {
    navigate: customNavigate,
    query: parsedSearchParams as PathQuery<CurrentPath>,
    params: params as PathParams<CurrentPath>,
    location: location,
    search: (data: PathQuery<CurrentPath>, options?: NavigateOptions) =>
      search(transObjToQueryString(data), options),
  };
}

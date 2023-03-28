import { omit } from "lodash";
import QueryString from "qs";
import type { AxiosRequestConfig, AxiosInstance } from "axios";
import type { O } from "ts-toolbelt";

import type { paths } from "./openapi/.generated/type";
// 생성된 paths interface의 모든 키들의 type

import orderMock from "../assets/order.tobe.json";
import shipMock from "../assets/ship.tobe.json";

type PathKeys = keyof paths; // 사용되는 api method들에 대한 type
type Methods = "get" | "put" | "post" | "delete" | "patch";
// 특정 method가 존재하는 paths key들만 뽑기 위한 type
type MethodPathKeys<TMethod extends Methods> = O.SelectKeys<
  paths,
  Record<TMethod, unknown>
>;

// 특정 paths의 key, method의 parameters path type (api params에 대한 type)
type PathParameters<TPath extends PathKeys, TMethod extends Methods> = O.Path<
  paths,
  [TPath, TMethod, "parameters", "path"]
>;
// 특정 paths의 key, method의 parameters query type (api querystring에 대한 type)

type QueryParameters<TPath extends PathKeys, TMethod extends Methods> = O.Path<
  paths,
  [TPath, TMethod, "parameters", "query"]
>;

type BodyParameters<TPath extends PathKeys, TMethod extends Methods> = O.Path<
  paths,
  [TPath, TMethod, "requestBody", "content", "application/json"]
>;

type QueryBodyParameters<
  TPath extends PathKeys,
  TMethod extends Methods
> = QueryParameters<TPath, TMethod> extends Record<string, unknown>
  ? // QueryParameter있는경우.
    BodyParameters<TPath, TMethod> extends Record<string, unknown>
    ? O.Merge<QueryParameters<TPath, TMethod>, BodyParameters<TPath, TMethod>>
    : QueryParameters<TPath, TMethod>
  : // QueryParameter 없는경우
  BodyParameters<TPath, TMethod> extends Record<string, unknown>
  ? BodyParameters<TPath, TMethod>
  : undefined;

export type ApiParameters<
  TPath extends PathKeys,
  TMethod extends Methods
> = PathParameters<TPath, TMethod> extends Record<string, unknown>
  ? // PathParam 있는경우
    QueryBodyParameters<TPath, TMethod> extends Record<string, unknown> // QueryParam체크
    ? O.Merge<
        PathParameters<TPath, TMethod>,
        QueryBodyParameters<TPath, TMethod>
      > // QueryParam 있는경우 PathParam과 머지한다.
    : PathParameters<TPath, TMethod> // QueryParam 없는경우
  : // pathParam 없는경우
  QueryBodyParameters<TPath, TMethod> extends Record<string, unknown> // QueryParam체크
  ? QueryBodyParameters<TPath, TMethod>
  : undefined;

// 특정 path, method의 statusCode 200에 대한 response type
export type SuccessResponse<
  TPath extends keyof paths,
  TMethod extends Methods
> = O.Path<
  paths,
  [TPath, TMethod, "responses", 200, "content", "application/json"]
>;
type FailResponse<TPath extends keyof paths, TMethod extends Methods> = O.Path<
  paths,
  [TPath, TMethod, "responses", 400 | 401, "content", "application/json"]
>;

type FunctionParams<TQueryKey, TVariables> = {
  path: TQueryKey;
} & (TVariables extends undefined
  ? {
      variables?: undefined;
    }
  : O.RequiredKeys<NonNullable<TVariables>> extends never
  ? {
      variables?: TVariables;
    }
  : {
      variables: TVariables;
    });

export class CallApi {
  private axios: AxiosInstance;
  constructor(axiosInstance: AxiosInstance) {
    this.axios = axiosInstance;
  }

  get<
    TQueryKey extends MethodPathKeys<"get">,
    TVariables extends ApiParameters<TQueryKey, "get">,
    TData extends SuccessResponse<TQueryKey, "get">
  >(
    { path, variables }: FunctionParams<TQueryKey, TVariables>,
    config?: AxiosRequestConfig
  ) {
    const { url } = replaceParams(path, variables, "get");

    return new Promise((resolve) => {
      setTimeout(() => {
        if (path === "/order/{orderId}") {
          resolve(orderMock as TData);
        }
        if (path === "/ship/{shipId}" && variables?.shipId === 1) {
          resolve(shipMock[1] as TData);
        }
        if (path === "/ship/{shipId}" && variables?.shipId === 2) {
          resolve(shipMock[2] as TData);
        }
        resolve({} as TData);
      }, 1000);
    }) as Promise<TData>;

    // 임시 주석
    // return this.axios.get(url, config).then((data) => {
    //   return data.data as TData;
    // }) as Promise<TData>;
  }

  post<
    TQueryKey extends MethodPathKeys<"post">,
    TVariables extends ApiParameters<TQueryKey, "post">,
    TData extends SuccessResponse<TQueryKey, "post">
  >(
    { path, variables }: FunctionParams<TQueryKey, TVariables>,
    config?: AxiosRequestConfig
  ) {
    const { url, params } = replaceParams(path, variables, "post");
    return this.axios.post(url, params, config).then((data) => {
      return data.data as TData;
    }) as Promise<TData>;
  }
  put<
    TQueryKey extends MethodPathKeys<"put">,
    TVariables extends ApiParameters<TQueryKey, "put">,
    TData extends SuccessResponse<TQueryKey, "put">
  >(
    { path, variables }: FunctionParams<TQueryKey, TVariables>,
    config?: AxiosRequestConfig
  ) {
    const { url, params } = replaceParams(path, variables, "put");
    return this.axios.put(url, params, config).then((data) => {
      return data.data as TData;
    }) as Promise<TData>;
  }
  patch<
    TQueryKey extends MethodPathKeys<"patch">,
    TVariables extends ApiParameters<TQueryKey, "patch">,
    TData extends SuccessResponse<TQueryKey, "patch">
  >(
    { path, variables }: FunctionParams<TQueryKey, TVariables>,
    config?: AxiosRequestConfig
  ) {
    const { url, params } = replaceParams(path, variables, "patch");
    return this.axios.patch(url, params, config).then((data) => {
      return data.data as TData;
    }) as Promise<TData>;
  }

  delete<
    TQueryKey extends MethodPathKeys<"delete">,
    TVariables extends ApiParameters<TQueryKey, "delete">,
    TData extends SuccessResponse<TQueryKey, "delete">
  >(
    { path, variables }: FunctionParams<TQueryKey, TVariables>,
    config?: AxiosRequestConfig
  ) {
    const { url } = replaceParams(path, variables, "delete");
    return this.axios.delete(url, config).then((data) => {
      return data.data as TData;
    }) as Promise<TData>;
  }
}

const replaceParams = (
  path: string,
  variables: Record<string, any> | undefined,
  method: "get" | "post" | "delete" | "put" | "patch"
) => {
  if (!variables) return { url: path, parmas: variables };
  let url = path;
  const paramKeys = (path.match(/{[a-zA-z-]+}/g) ?? []).map((param) =>
    param.replace(/[{}]/g, "")
  );
  paramKeys.forEach((param) => {
    url = url.replace(`{${param}}`, variables?.[param] as string);
  });

  if (["get", "delete"].includes(method)) {
    url += `?${QueryString.stringify(omit(variables, paramKeys), {
      indices: false,
    })}`;
  }

  return {
    url,
    params: omit(variables, paramKeys),
  };
};

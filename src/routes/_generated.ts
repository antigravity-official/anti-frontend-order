/* eslint-disable */
export const routePaths = [{"path":"","srcPath":"index.page.tsx"},{"path":"notfound","srcPath":"notfound/index.page.tsx"},{"path":"order/:orderId","srcPath":"order/[orderId].page.tsx","params":["orderId"]}] as const; export type RoutePaths = typeof routePaths;
      export type Paths = `/${RoutePaths[number]['path']}`;
      import type Order_orderId_Type from '../pages/order/[orderId].pageType';export type RouteQueryParamType = {
        '/order/:orderId':Order_orderId_Type;
      }
      
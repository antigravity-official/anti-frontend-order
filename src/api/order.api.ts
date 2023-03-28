import { useQuery } from "@tanstack/react-query";

import type { UseQueryOptions } from "@tanstack/react-query";
import type { CallApi } from "./CallApi";
import type { ApiParameters } from "./CallApi";
export class OrderApi {
  constructor(private callApi: CallApi) {}

  fetchOrder = async (params: ApiParameters<"/order/{orderId}", "get">) => {
    return this.callApi.get({
      path: "/order/{orderId}",
      variables: params,
    });
  };
}

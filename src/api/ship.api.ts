import { useQuery } from "@tanstack/react-query";

import type { UseQueryOptions } from "@tanstack/react-query";
import type { CallApi } from "./CallApi";
import type { ApiParameters } from "./CallApi";
export class ShipApi {
  constructor(private callApi: CallApi) {}

  fetchShip = async (params: ApiParameters<"/ship/{shipId}", "get">) => {
    return this.callApi.get({
      path: "/ship/{shipId}",
      variables: params,
    });
  };
}

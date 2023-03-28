import axios, { AxiosInstance } from "axios";

import { OrderApi } from "./order.api";
import { ShipApi } from "./ship.api";
import { CallApi } from "./CallApi";

const TIME_OUT = 20000;
export const API_BASE_URL: string = "http://localhost:3000";

class Api {
  private static instance: Api;
  public axiosInstance: AxiosInstance;
  public callApi: CallApi;
  public orderApi: OrderApi;
  public shipApi: ShipApi;

  public static getInstance() {
    // eslint-disable-next-line no-return-assign
    return this.instance || (this.instance = new this());
  }
  private constructor() {
    // ********** axios 인스턴스 생성 *********
    const axiosInstance = axios.create({
      baseURL: API_BASE_URL,
      timeout: TIME_OUT,
    });
    axiosInstance.interceptors.request.use((config) => config);

    axiosInstance.interceptors.response.use((response) => response);

    this.callApi = new CallApi(axiosInstance);
    this.axiosInstance = axiosInstance;

    // Create Api instances
    this.orderApi = new OrderApi(this.callApi);
    this.shipApi = new ShipApi(this.callApi);
  }
}

export const { axiosInstance, callApi, orderApi, shipApi } = Api.getInstance();

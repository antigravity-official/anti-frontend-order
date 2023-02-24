import {OrderDto} from "@domains/dto/OrderDto";

export interface IOrderListPresenter {
  getOrderList(): Promise<Array<OrderDto>>;
}

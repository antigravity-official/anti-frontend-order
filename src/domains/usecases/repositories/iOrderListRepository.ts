import {OrderDto} from "@domains/dto/OrderDto";


export interface IOrderListRepository {
  getOrderList(): Promise<Array<OrderDto>>;
}

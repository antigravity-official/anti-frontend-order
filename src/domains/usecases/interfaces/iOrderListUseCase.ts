import {OrderDto} from '@domains/dto/OrderDto';

export interface IOrderListUseCase {
  getOrderList(): Promise<Array<OrderDto>>;
}

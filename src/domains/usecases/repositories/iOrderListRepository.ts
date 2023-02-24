export interface IOrderListRepository {
  getOrderList(): Promise<Array<OrderDto>>;
}
